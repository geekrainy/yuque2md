const SDK = require('@yuque/sdk');
const { getUserInfo, getPostList, getPostDetail } = require('../lib/yuque');
const { writeFile, getTargetPath, checkTargetPath } = require('../lib/file')
const { mdFormatter } = require('../lib/formatter')
const { token, namespace, ...restConfig } = require('../yuque2md.json')

const config = {
  namespace,
  client: new SDK({ token }),
  ...restConfig,
}

const sync = async () => {
  const userInfo = await getUserInfo(config);
  const processNamespace = ~namespace.indexOf('/') ? namespace : `${userInfo.login}/${namespace}`
  config.namespace = processNamespace;
  const postList = await getPostList(config);
  const postContentList = await Promise.all(postList.map(postInfo => getPostDetail({ ...config, postInfo })))

  checkTargetPath(config)  

  postContentList.forEach(post => {
    const { title, body } = post;
    const fileName = `${title}.md`
    const params = [getTargetPath(config, fileName), mdFormatter(body)]

    writeFile(...params)
  })
}

module.exports = sync;
