const Redis = require("ioredis");
const fastify = require('fastify')({
  logger: true
})

const redis = new Redis(process.env.REDIS_URI);
redis.set("foo", "bar");

fastify.get('/', async ( _, reply) => {
  const foo = await redis.get("foo")
  reply.send({ hello: `${foo}`})
})

// Run the server!
fastify.listen(3000, '::', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server listening on ${address}`)
})
