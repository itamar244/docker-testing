// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const { Client } = require('pg')

const client = new Client({
  port: 5432,
  user: 'postgres',
  password: '123',
  database: 'postgres',
  host: 'pgtest',
})

// Declare a route
fastify.get('/', async (request, reply) => {
  const res = await client.query('SELECT * from public.users');
  return res.rows
})

// Run the server!
const start = async () => {
  try {
    await client.connect()
    await fastify.listen(8080, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    await client.end()
    process.exit(1)
  }
}

start();