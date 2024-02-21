import path from 'path'
import fs from 'fs'
import { PrismaClient } from '@prisma/client'
import ReactDOMServer from 'react-dom/server'
import { Request, Response } from 'express'
import React from 'react'
import { HomePage } from '../src/pages/HomePage'
import { NotFoundPage } from '../src/pages/NotFoundPage'
import { BlogPage } from '../src/pages/BlogPage'

const URL = process.env.REACT_APP_PUBLIC_URL

// index.htmlを読み込み
const indexPath = path.join(__dirname, '..', 'public', 'index.html')
const indexHtml = fs
  .readFileSync(indexPath, 'utf-8')
  .replaceAll('%PUBLIC_URL%', URL ?? '')

const prisma = new PrismaClient()

/**
 * 表示されるページ（/）
 */
export const homePage = async (req: Request, res: Response): Promise<void> => {
  const blogList = await prisma.blog.findMany({
    include: {
      category: true,
    },
  })

  // AppコンポーネントをHTML文字列に変換
  const jsx = React.createElement(HomePage, { blogList })
  const reactDom = ReactDOMServer.renderToString(jsx)

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${reactDom}</div>`
  )

  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html)
}

/**
 * 表示されるページ（/blogs/:blogId）
 */
export const blogItemPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blogId = req.params.blogId
  const blogItem = await prisma.blog.findUnique({
    where: { id: blogId },
    include: {
      category: true,
    },
  })

  if (blogItem === null) {
    res.writeHead(404)
  }

  // AppコンポーネントをHTML文字列に変換
  const jsx =
    blogItem === null
      ? React.createElement(NotFoundPage)
      : React.createElement(BlogPage, { blogItem })
  const reactDom = ReactDOMServer.renderToString(jsx)

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${reactDom}</div>`
  )

  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.end(html)
}

/**
 * ここからはブログ
 */
export const blogsCreate = async (
  req: Request,
  res: Response
): Promise<void> => {
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
}

export const blogsRead = async (req: Request, res: Response): Promise<void> => {
  res.send(JSON.stringify(await prisma.blog.findMany()))
}

export const blogsUpdate = async (
  req: Request,
  res: Response
): Promise<void> => {
  const blogId = req.params.blogId
  const { title, tag, categoryId, contents, imagePath } = req.body

  try {
    const blogItem = await prisma.blog.findUnique({ where: { id: blogId } })
    if (blogItem === null) {
      res.writeHead(404)
      res.end()
      return
    }

    const result = await prisma.blog.update({
      where: { id: blogId },
      data: { title, tag, categoryId, contents, imagePath },
    })

    res.json(result)
  } catch (e) {
    res.writeHead(500)
    res.end(JSON.stringify({ error: '不明なエラー：' + e }))
  }
}

/**
 * ここからはカテゴリー
 */
export const categoriesRead = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send(JSON.stringify(await prisma.category.findMany()))
}

export const categoriesCreate = async (
  req: Request,
  res: Response
): Promise<void> => {
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
}
