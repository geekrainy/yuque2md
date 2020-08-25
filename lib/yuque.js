exports.getUserInfo = async ({ client }) => {
  const ret = await client.users.get();
  return ret;
}

exports.getPostList = async ({ namespace, client }) => {
  const ret = await client.docs.list({
    namespace
  })
  return ret;
}

exports.getPostDetail = async ({ namespace, client, postInfo }) => {
  const params = {
    namespace,
    slug: postInfo.slug,
    data: {
      raw: 1
    }
  }
  return await client.docs.get(params)
}
