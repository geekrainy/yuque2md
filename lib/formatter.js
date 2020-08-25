/** 
 * from https://github.com/x-cold/yuque-hexo/blob/master/util/index.js
 */
exports.mdFormatter = (data) => {
  const multiBr = /(<br>[\s\n]){2}/gi;
  const multiBrEnd = /(<br \/>[\n]?){2}/gi;
  const brBug = /<br \/>/g;
  const hiddenContent = /<div style="display:none">[\s\S]*?<\/div>/gi;
  const emptyAnchor = /<a name=\".*?\"><\/a>/g;

  const ret = data
    .replace(hiddenContent, '')
    .replace(multiBr, '<br>')
    .replace(multiBrEnd, '<br />\n')
    .replace(brBug, '\n')
    .replace(emptyAnchor, '');

  return ret;
}
