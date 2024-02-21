import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import { LayoutContainer } from '../components/commons/LayoutContainer'
import { IBlogSummary } from '../const'

const URL = process.env.REACT_APP_PUBLIC_URL

interface HomePageProps {
  blogList: IBlogSummary[]
}

export const HomePage: React.FC<HomePageProps> = ({ blogList }) => {
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
              <Card>
                <CardActionArea href={`${URL}/blogs/${blogItem.id}`}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={`${URL}${blogItem.imagePath}`}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Chip
                      label={
                        blogItem.category !== null
                          ? blogItem.category.label
                          : ''
                      }
                    />

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
