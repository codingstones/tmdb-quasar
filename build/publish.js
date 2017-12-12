const ghpages = require('gh-pages')

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/codingstones/tmdb-quasar.git'
}, ()=> console.log('published'))
