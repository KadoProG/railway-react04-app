import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import { LayoutContainer } from '../components/commons/LayoutContainer'

const fetchGETNotionBlogData = async () => {
  try {
    return {
      blogs: [
        {
          id: 1,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          imagePath: '/images/logo512.png',
        },
        {
          id: 2,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          imagePath: '/images/logo512.png',
        },
        {
          id: 3,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          imagePath: '/images/logo512.png',
        },
        {
          id: 4,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          imagePath: '/images/logo512.png',
        },
        {
          id: 5,
          title:
            'こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。',
          imagePath: '/images/logo512.png',
        },
      ],
    }
  } catch (e) {
    return { blogs: [] }
  }
}

export const HomePage: React.FC = () => {
  const [blogList, setBlogList] = React.useState<
    { id: number; title: string; imagePath: string }[]
  >([])
  // 起動時に実行
  React.useEffect(() => {
    fetchGETNotionBlogData().then((res) => {
      setBlogList(res.blogs)
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
          {blogList.map((blogItem) => (
            <Grid item key={blogItem.id} xs={12} sm={6} md={4}>
              <Card key={blogItem.id}>
                <CardMedia
                  component="img"
                  height="194"
                  image={blogItem.imagePath}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography fontWeight="bold">{blogItem.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </LayoutContainer>
  )
}
