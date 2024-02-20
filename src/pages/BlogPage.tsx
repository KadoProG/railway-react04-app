import { Box, Chip, Typography } from '@mui/material'
import { LayoutContainer } from '../components/commons/LayoutContainer'
import { MarkdownRenderer } from '../components/commons/MarkdownRenderer'
import { IBlogSummary } from '../const'
import { formatDate } from '../utils/dayjs'
// const URL = ''

interface BlogPageProps {
  blogItem: IBlogSummary
}

export const BlogPage: React.FC<BlogPageProps> = ({
  blogItem,
}: BlogPageProps) => (
  <LayoutContainer>
    <Box maxWidth={800} mx="auto" my={6} p={1}>
      <Typography variant="h4" component="h1" fontWeight="bold" align="center">
        {blogItem.title}
      </Typography>
      <Typography variant="body2" align="center">
        {formatDate(blogItem.createdAt)}
      </Typography>
      <Chip label="最新記事" />

      {/* 本文（マークダウン→HTML） */}
      <MarkdownRenderer markdownText={blogItem.contents} />
    </Box>
  </LayoutContainer>
)
