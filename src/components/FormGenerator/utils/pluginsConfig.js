const publicPath = process.env.BASE_URL

const pluginsConfig = {
  beautifierUrl: `${publicPath}libs/beautifier/beautifier.min.js`,
  monacoEditorUrl: `${publicPath}libs/monaco-editor/vs`,
  tinymceUrl: `${publicPath}libs/tinymce/tinymce.min.js`
}
console.log('pluginsConfig:', pluginsConfig)

export default pluginsConfig
