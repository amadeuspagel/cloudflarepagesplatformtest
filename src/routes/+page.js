export async function load({ params, platform }) {
  const test = await platform.env.TEST.get('test')

  return {
    test: test
  }

  throw error(404, 'Not found')
}
