import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Typography } from '@mui/material'

/**マークダウンをHTMLに変換する処理 */
export const MarkdownRenderer = ({
  markdownText,
}: {
  markdownText: string
}) => (
  <Typography
    component="div"
    sx={{
      ' & img ': {
        display: 'block',
        mx: 'auto',
        maxWidth: '80%',
        objectFit: 'cover',
      },
    }}
  >
    <ReactMarkdown>{markdownText}</ReactMarkdown>
  </Typography>
)
