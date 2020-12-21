const Vue = window.Vue;
import {generateComponent} from '../components/'

export let create = function () {
  return function () {
    let id = 0
    window.$docsify.markdown = {
      renderer: {
        code: function(code, lang) {
          if (/^\/\*\s*vue\s*\*\//.test(code)) {
            id++
            var DemoBlockWrapper = generateComponent(code, lang)
            Vue.component('DemoBox' + id, DemoBlockWrapper)
            return '<' + 'demo-box-' + id + '></demo-box-' + id + '>'
          } else {
            lang = lang || ''
            var hl = window.Prism.highlight(code, window.Prism.languages[lang] || window.Prism.languages.markup)
            return '<pre v-pre data-lang="' + lang + '"><code class="lang-' + lang + '">' + hl + '</code></pre>'
          }
        }
      }
    }
  }
}
