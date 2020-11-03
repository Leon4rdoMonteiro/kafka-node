import express from 'express'
import { Kafka } from 'kafkajs'

import routes from './routes'

const app = express()

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092', 'kafka:9092']
})

const producer = kafka.producer()

app.use(async (request, response, next) => {
    request.producer = producer
    return next()
})

app.use(routes)

async function run() {
    await producer.connect()

    app.listen(3333, () => console.log('Main API running on port 3333'))
}

run().catch(console.error)

export default app

