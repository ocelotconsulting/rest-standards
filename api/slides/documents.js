const fs = require('fs')
const marked = require('marked')
const template = require('lodash/template')
const Prism = require('prismjs')
require('prismjs/components/prism-json')
require('prismjs/components/prism-bash')

const slides = [
  'title',
  'intro',
  'whyStandards',
  'verbs',
  'urls',
  'pathVsQuery',
  'schema',
  'staticLanguages'
]


const toCode = html => `<pre><code class='language-json'>${html}</code></pre>`

const resolveSource = line =>
  line.indexOf('<p>___') === 0 ?
    toCode(Prism.highlight(fs.readFileSync(line.slice(6, line.length - 4), {encoding: 'utf8'}), Prism.languages.json))
    : line

const resolveSources = html =>
  html.split('\n').map(s => resolveSource(s.trim())).join('\n')

const compileAndBind = markdown => {
  return resolveSources(marked(markdown))
}

module.exports = slides.map(
  name => ({
    name,
    html: () => compileAndBind(fs.readFileSync(`api/slides/${name}.md`, {encoding: 'utf8'}))
  })
)
