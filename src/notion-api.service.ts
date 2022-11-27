import { NotionPost } from '../@types/schema'
import { BlockMapType } from "react-notion";

const DATABASE_ID = process.env.NOTION_DATABASE_ID ?? ''
const GET_TABLE = 'https://notion-api.splitbee.io/v1/table/'
const GET_PAGE = 'https://notion-api.splitbee.io/v1/page/'

export const getAllPosts = async (): Promise<NotionPost[]> => {
  try {
    const response = await fetch(GET_TABLE + DATABASE_ID)
    const data: NotionPost[] = await response.json()

    if (!data || !data.length) {
      console.warn('No data')
      return []
    }

    return data.filter((post: NotionPost) => post.published)
  } catch (e) {
    console.error(e)
    return []
  }
}

export const getPostBySlug = async (slug: string): Promise<NotionPost | undefined> => {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug)
}

export const getPostBlocks = async (postId: string): Promise<BlockMapType | undefined> => {
  try {
    const response = await fetch(GET_PAGE + postId)
    const data = await response.json()

    if (!data) {
      console.warn('No data')
      return
    }

    return data
  } catch (e) {
    console.error(e)
  }
}
