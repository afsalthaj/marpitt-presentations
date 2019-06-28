const { Marpit } = require('@marp-team/marpit')
const marpit = new Marpit()

// 2. Add theme CSS
const theme = `
/* @theme example */

section {
  background-color: #369;
  color: #fff;
  font-size: 30px;
  padding: 40px;
}

h1,
h2 {
  text-align: center;
  margin: 0;
}

h1 {
  color: #8cf;
}
`

marpit.themeSet.default = marpit.themeSet.add(theme)

const markdown = `

# Hello, Marpit!

Marpit is the skinny framework for creating slide deck from Markdown.

---

## Ready to convert into PDF!

You can convert into PDF slide deck through Chrome.

`

module.exports = () => {  
  return marpit.render(markdown)
}


