import Hapi from '@hapi/hapi'
import routes from './routes/index'

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })
  server.route(routes)
  await server.start()
  console.log('Sucesso')
}
process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
