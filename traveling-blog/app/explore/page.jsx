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
    <div className="lg:mt-28">
      <div className="cursor-pointer">
        <Link href={post.url} legacyBehavior>
          <div className="mb-10 relative w-[350px] h-[350px] md:w-[480px] md:h-[520px] overflow-hidden">
            <Image
              fill
              className="w-full object-cover h-auto hover:scale-105 transition-all duration-500 ease-in-out"
              src={post.thumbnail}
              alt="test"
            />
            <div className="absolute bottom-0 left-0 flex flex-col justify-center items-center w-full h-32 bg-white backdrop-filter backdrop-blur-md bg-opacity-10">
              <time
                dateTime={post.date}
                className="block text-xs font-semibold"
              >
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
              <h3 className="text-2xl my-2 font-semibold text-slate-400">
                {post.title}
              </h3>
              <div className="text-lg font-semibold text-slate-400">
                {post.country}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function Explore() {

  
  const posts = allExplores.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="">
      <div className="mx-auto max-w-x grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        <div className="h-auto lg:h-[500px] ml-0 md:ml-10 xl:ml-44 flex items-center justify-center py-10">
          <h2 className=" text-4xl lg:text-7xl xl:text-8xl text-black">MY FEATURED TOURS</h2>
        </div>

        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
