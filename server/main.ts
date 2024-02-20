import { PrismaClient } from '@prisma/client'
import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 9000

const prisma = new PrismaClient()

// urlencodedとjsonは別々に初期化する
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/', async (req, res) => {
  res.send(JSON.stringify(await prisma.blog.findMany()))
})

app.get('/api/blogs', async (req, res) => {
  res.json({ blogs: await prisma.blog.findMany() })
})

app.post('/api/blogs', async (req, res) => {
  const { title, tag, categoryId, contents, imagePath } = req.body

  if (!title || !tag || !categoryId || !contents || !imagePath) {
    res.writeHead(400)
    res.end(JSON.stringify({ error: 'パラメータが不正です' }))
    return
  }

  try {
    const result = await prisma.blog.create({
      data: { title, tag, categoryId, contents, imagePath },
    })
    res.json(result)
  } catch (e) {
    res.writeHead(500)
    res.end(JSON.stringify({ error: '不明なエラー：' + e }))
  }
})

app.get('/api/category', async (req, res) => {
  res.json({ categories: await prisma.category.findMany() })
})

app.post('/api/category', async (req, res) => {
  const { label } = req.body

  if (!label) {
    res.writeHead(400)
    res.end(JSON.stringify({ error: 'パラメータが不正です' }))
    return
  }

  try {
    const result = await prisma.category.create({
      data: { label },
    })
    res.json(result)
  } catch (e) {
    res.writeHead(500)
    res.end(JSON.stringify({ error: '不明なエラー：' + e }))
  }
})

app.listen(Number(port), () => {
  // eslint-disable-next-line
  console.log(`\n\nsuccess!\nURL:\t\t\thttp://localhost:${port}\n\n`)
})
