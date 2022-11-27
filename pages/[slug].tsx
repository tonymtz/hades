import { FC } from "react";
import { BlockMapType } from "react-notion";
import { getAllPosts, getPostBlocks, getPostBySlug } from "../src/notion-api.service";
import { Page } from "../src/components/page";
import { NotionPost } from "../@types/schema";

interface Props {
  blocks?: BlockMapType
  post?: NotionPost
}

// @ts-ignore
export const getStaticProps = async ({ params: { slug } }) => {
  const post = await getPostBySlug(slug as string);

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

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((row) => `/${ row.slug }`),
    fallback: true,
  };
}

const SlugPage: FC<Props> = ({ blocks, post }) => {
  if (!post || !blocks) {
    return (
      <div>
        <h1>404</h1>
      </div>
    )
  }

  return <Page blockMap={ blocks } title={post.title}/>
}

export default SlugPage
