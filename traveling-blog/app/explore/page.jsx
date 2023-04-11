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
  return (
    <div className="cursor-pointer">
      <Link
        href={post.url}
        legacyBehavior
      >
        <div className="mb-8 mx-8 relative w-[400px] h-[400px] md:w-[480px] md:h-[520px] overflow-hidden">
          <Image
            fill
            className="w-full object-cover  h-auto hover:scale-105 transition-all duration-500 ease-in-out"
            src={post.thumbnail}
            alt="test"
          />
          <div className="absolute bottom-0 left-0 flex flex-col justify-center items-center w-full h-32 bg-white backdrop-filter backdrop-blur-md bg-opacity-10">
            <time dateTime={post.date} className="block text-xs font-semibold">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <h3 className="text-2xl my-2 font-semibold text-slate-400">{post.title}</h3>
            <div className="text-lg font-semibold text-slate-400">
              {post.country}
            </div>
          </div>
        </div>
      </Link>
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
