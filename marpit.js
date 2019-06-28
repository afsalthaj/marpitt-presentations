const { Marpit } = require('@marp-team/marpit')
const marpit = new Marpit()

marpit.themeSet.default = marpit.themeSet.add(`
/* @theme my-first-theme */

section {
  background-color: #123;
  color: #fff;
  font-size: 30px;
  padding: 40px;
}

h1 {
  color: #8cf;
}
`)

module.exports = () => {  
  return marpit.render(`
    Spark Execution plans

    `
  )
}


