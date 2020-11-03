import { Router } from 'express'

const routes = Router()

routes.post('/certifications', async (request, response) => {
    const producer = request.producer

    const message = {
        user: { id: 1, name: 'Leonardo Monteiro'},
        course: 'Kafka com Node.js',
        grade: 5
    }
    
    await producer.send({
        topic: 'issue-certificate',
        messages: [
            { value: JSON.stringify(message) }
        ],
    })

    return response.json({ ok: true })
})

export default routes