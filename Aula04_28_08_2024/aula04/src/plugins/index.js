/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'

// Tudo de adicionar plugins vai ser aqui (axios, firebase, etc)
// Você configura arquivos axios.js e importa aqui
export function registerPlugins (app) {
  app.use(vuetify)
}
