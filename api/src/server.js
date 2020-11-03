import express from 'express'
import { Kafka, logLevel } from 'kafkajs'

import routes from './routes'

const app = express()

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092', 'kafka:9092'],
})

const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'certificate-group' })

app.use(async (request, response, next) => {
    request.producer = producer
    return next()
})

app.use(routes)

async function run() {
    await producer.connect()
    await consumer.connect()
    await consumer.subscribe({ topic: 'certification-response' })
    await consumer.run({
        eachMessage: async({topic, partition, message}) => {
            console.log('Resposta', String(message.value))
        }
    })

    app.listen(3333, () => console.log('Main API running on port 3333'))
}

run().catch(console.error)

export default app

