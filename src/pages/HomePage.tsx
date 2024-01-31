import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material'
import React from 'react'
import { LayoutContainer } from '../components/commons/LayoutContainer'
import { useNavigate } from 'react-router-dom'
import { IBlogSummary } from '../const'

/**
 * 〇〇秒待つ関数
 * @param waitTime ms 待つ
 * @returns 一応空配列
 */
const waitFunc = (waitTime: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([])
    }, waitTime)
  })

// const prisma = new PrismaClient()

const fetchGETNotionBlogData = async (): Promise<{ blogs: IBlogSummary[] }> => {
  try {
    await waitFunc(1000)
    // const data = await prisma.blog.findMany()
    return {
      blogs: [
        {
          id: 1,
          categories: [{ id: 1, label: '最新記事' }],
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          imagePath: '/images/logo512.png',
        },
        {
          id: 2,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          categories: [{ id: 1, label: '最新記事' }],
          imagePath: '/images/logo512.png',
        },
        {
          id: 3,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          categories: [{ id: 1, label: '最新記事' }],
          imagePath: '/images/logo512.png',
        },
        {
          id: 4,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          categories: [{ id: 1, label: '最新記事' }],
          imagePath: '/images/logo512.png',
        },
        {
          id: 5,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          categories: [{ id: 1, label: '最新記事' }],
          imagePath: '/images/logo512.png',
        },
      ],
    }
  } catch (e) {
    return { blogs: [] }
  }
}

export const HomePage: React.FC = () => {
  const [blogList, setBlogList] = React.useState<IBlogSummary[]>([])
  const navigation = useNavigate()

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // 起動時に実行
  React.useEffect(() => {
    setIsLoading(true)
    fetchGETNotionBlogData()
      .then((res) => {
        setBlogList(res.blogs)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <LayoutContainer>
      <Container component={Box} mx="auto">
        <Typography>
          ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事ここから記事
        </Typography>

        <Typography
          my={2}
          component="h2"
          variant="h4"
          align="center"
          fontWeight="bold"
        >
          ブログ一覧
        </Typography>
        <Grid container spacing={1}>
          {isLoading && (
            <>
              {[1, 2, 3, 4, 5, 6].map((v) => (
                <Grid item key={v} xs={12} sm={6} md={4}>
                  <Card>
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width="auto"
                      height={194}
                    />
                    <CardContent>
                      <Skeleton
                        variant="rounded"
                        animation="wave"
                        width={100}
                        height={40}
                      />
                      <Box my={1}></Box>
                      <Skeleton
                        variant="rounded"
                        animation="wave"
                        width="100%"
                        height={50}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </>
          )}
          {blogList.map((blogItem) => (
            <Grid item key={blogItem.id} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea
                  onClick={() => navigation(`/blogs/${blogItem.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={blogItem.imagePath}
                    alt="Paella dish"
                  />
                  <CardContent>
                    {blogItem.categories.map((category) => (
                      <Chip key={category.id} label={category.label} />
                    ))}

                    <Typography fontWeight="bold" pt={1}>
                      {blogItem.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </LayoutContainer>
  )
}
