const replace = require('replace-in-file');

const options = {
  files: 'dist/index.html',
  from: '{{GOOGLE_ANALYTICS}}',
  to: process.env.GOOGLE_ANALYTICS
}

const results = replace.sync(options)
console.log('Replacement result:', results)