import { BlockMapType } from "react-notion";
import { getPostBlocks, getPostBySlug } from "../src/notion-api.service";
import { Page } from "../src/components/page";
import { NotionPost } from "../@types/schema";

interface Props {
  blocks?: BlockMapType
  post?: NotionPost
}

export const getStaticProps = async () => {
  const post = await getPostBySlug("home");

  if (!post) {
    return {
      props: {},
    }
  }

  const blocks = await getPostBlocks(post.id)

  return {
    props: { blocks, post },
  }
}

const HomePage = ({ blocks, post }: Props) => {
  return blocks && (
    <Page
      blockMap={ blocks }
      cover={ post!.cover?.[0].url }
      title={ post!.title }
    />
  )
}

export default HomePage
