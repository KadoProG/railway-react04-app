import express from 'express'
import bodyParser from 'body-parser'
import {
  blogItemPage,
  blogsCreate,
  blogsRead,
  blogsUpdate,
  categoriesCreate,
  categoriesRead,
  homePage,
} from './controller'
const app = express()
const port = 9000

const URL = process.env.REACT_APP_PUBLIC_URL

// urlencodedとjsonは別々に初期化する
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())

app.get(`${URL}/`, homePage)
app.get(`${URL}/blogs/:blogId`, blogItemPage)

app.get(`${URL}/api/`, blogsRead)
app.get(`${URL}/api/blogs`, blogsRead)
app.post(`${URL}/api/blogs`, blogsCreate)
app.patch(`${URL}/api/blogs/:blogId`, blogsUpdate)

app.get(`${URL}/api/category`, categoriesRead)
app.post(`${URL}/api/category`, categoriesCreate)

app.use(express.static('./build'))

app.listen(Number(port), () => {
  // eslint-disable-next-line
  console.log(`\n\nsuccess!\nURL:\t\t\thttp://localhost:${port}${URL}\n\n`)
})
