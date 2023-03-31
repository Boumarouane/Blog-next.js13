import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allJournals } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const metadata = {
  title: "Journal",
  description: "This the journal page for know what is my traveling",
};

function PostCard(post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="text-sm">
        <Content />
      </div>
    </div>
  );
}

function Journal() {
  const posts = allJournals.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div>
      Journal
      <div className="py-8 mx-auto max-w-xl">
        <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>

        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Journal;
