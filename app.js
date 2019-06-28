const app = require('express')()
const marpit = require('./marpit')

app.get('/', (req, res) => {
  const { html, css } = marpit()

  res.send(`
<html>
  <head><style>${css}</style></head>
  <body style="background-color:#fff;font-family:'Arial',sans-serif;">${html}</body>
</html>
`.trim())
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})


