import { PrismaClient } from '@prisma/client'
import express from 'express'
import bodyParser from 'body-parser'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import App from '../src/App'
const app = express()
const port = 9000

const URL = ''

const prisma = new PrismaClient()

// urlencodedとjsonは別々に初期化する
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())

// app.get(`/`, async (req, res) => {
//   res.json({ url: `http://localhost:${port}/${URL}/` })
// })

app.get(`${URL}/`, async (req, res) => {
  // const result = await prisma.blog.findMany({
  //   include: {
  //     category: true,
  //   },
  // })
  // const initData = JSON.stringify(result)

  // AppコンポーネントをHTML文字列に変換
  const jsx = React.createElement(App)
  const reactDom = ReactDOMServer.renderToString(jsx)

  // console.log(reactDom)
  // res.send(initData)

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
          <meta charset="utf-8" />
          <script src="client.js" async defer></script>
      </head>
      <body>
          <div id="root">${reactDom}</div>
      </body>
      </html>
  `

  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html)
})

app.get(`${URL}/api/`, async (req, res) => {
  res.send(JSON.stringify(await prisma.blog.findMany()))
})

app.get(`${URL}/api/blogs`, async (req, res) => {
  res.json({ blogs: await prisma.blog.findMany() })
})

app.post(`${URL}/api/blogs`, async (req, res) => {
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

app.get(`${URL}/api/category`, async (req, res) => {
  res.json({ categories: await prisma.category.findMany() })
})

app.post(`${URL}/api/category`, async (req, res) => {
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

app.use(express.static('./build'))

app.listen(Number(port), () => {
  // eslint-disable-next-line
  console.log(`\n\nsuccess!\nURL:\t\t\thttp://localhost:${port}\n\n`)
})
