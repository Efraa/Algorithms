// https://www.urionlinejudge.com.br/judge/en/problems/view/2684

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const numberOfTestCases = parseInt(input[0]);
const output = val => val ?
  console.log('Successful!!') :
  console.log('error');

const isHTML = html =>
  /<(?=.*?.*?\/?>|br|hr|input|meta|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/
    .test(html);

const specialCaseOfEmptyTags = html => {
  const emptyTags = html.match(/<(\w*?\s?\/>|\/>?|>)/g);
  return emptyTags && emptyTags.indexOf('<>') !== -1 &&
  emptyTags.indexOf('</>') !== -1 && emptyTags.length === 2
  ? true : false;
};

const getTags = (html, tag) => html.split('')
  .filter(t => t === tag).length;

const hasPairs = html =>
  specialCaseOfEmptyTags(html) ? true :
  getTags(html, '<') === getTags(html, '>') && isHTML(html) ? true : false;

const uniqueTag = html =>
  getTags(html, '<') === 1 && getTags(html, '>') === 1 ? true : false;

const helpProfessorWeb = ({ type, tag }) =>
  output(!type ? hasPairs(tag) : uniqueTag(tag));

for (let c = 1; c <= numberOfTestCases; c += 1) {
  const val = input[c];
  const type = val ? Number(val.charAt(0)) : false;
  if (type || type === 0)
    helpProfessorWeb({
      type: type,
      tag: val.split('').slice(1).join('').trim()
    });
  else output(type);
}
