import Hapi from '@hapi/hapi'
import routes from './routes/index'
import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1.js'
import { apikey } from '../secret'

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })
  server.route(routes)
  await server.start()
  console.log('Sucesso')
}

const nlu = new NaturalLanguageUnderstandingV1({
  iam_apikey: apikey
})

console.log(nlu)

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
