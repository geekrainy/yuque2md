const fs = require('fs')
const path = require('path')

exports.getTargetPath = ({ targetPath }, title) => {
  return path.join(process.cwd(), targetPath, title)
}

exports.checkTargetPath = ({ targetPath }) => {
  const fullTargetPath = path.join(path.join(process.cwd(), targetPath))
  if (!fs.existsSync(fullTargetPath)) {
    fs.mkdirSync(fullTargetPath)
  }
}

exports.writeFile = (path, data) => {
  fs.writeFileSync(path, data, {
    encoding: 'UTF8',
  });
}
