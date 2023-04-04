import { format, parseISO } from 'date-fns'
import { allExplores } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Image from "next/image"

export const generateStaticParams = async () => allExplores.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allExplores.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post.title }
}

const PostLayout = ({ params }) => {
  const post = allExplores.find((post) => post._raw.flattenedPath === params.slug)

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
        <Image src={post.image} alt="test"  width={700}
      height={700}/>
      </div>
      <Content />
    </article>
  )
}

export default PostLayout