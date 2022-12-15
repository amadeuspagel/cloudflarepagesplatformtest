export async function load({ params, env }) {
  const test = await env.TEST.get('test')

  return {
    test: test
  }

  throw error(404, 'Not found')
}
