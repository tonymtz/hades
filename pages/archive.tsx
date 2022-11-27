import Link from 'next/link'
import { getAllPosts } from "../src/notion-api.service";

interface Props {
  posts: any[]
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}

const ArchivePage = ({ posts }: Props) => {
  return (
    <main>
      <h1>Entries</h1>
      { posts?.map((post) => (
        <Link key={ post.slug } href="/[slug]" as={ `/${ post.slug }` }>
          <div>{ post.title }</div>
        </Link>
      )) }
    </main>
  )
}

export default ArchivePage
