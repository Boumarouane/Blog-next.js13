import Link from "next/link"
import Image from "next/image"
import { compareDesc, format, parseISO } from "date-fns";
import { allExplores } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const metadata = {
  title: 'Explore',
  description: 'This the journal page for know what is my traveling',
}

function PostCard(post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className="mb-8">
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <Image src={post.image} alt="test"  width={700}
      height={700}/>
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <div className="text-sm">
        <Content />
      </div>
    </div>
  );
}

export default function Explore() {

  
  const posts = allExplores.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      <div className="py-8 mx-auto max-w-xl">

        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
