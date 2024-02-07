import express from 'express'
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(Number(port), () => {
  // eslint-disable-next-line
  console.log(`\n\nsuccess!\nURL:\t\t\thttp://localhost:${port}\n\n`)
})
