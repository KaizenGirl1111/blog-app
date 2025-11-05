import Link from 'next/link';  // Added import for Link
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import type { Post } from '../../types';

interface PostProps {
  post: Post | null;
}

// Updated Params to extend ParsedUrlQuery for type safety
interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function Post({ post }: PostProps) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
      {/* Replaced <a> with <Link> for Next.js navigation */}
      <Link href="/">
        Back to Home
      </Link>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = (await import('../data/posts')).default;
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps, Params> = async ({ params }) => {
  const posts = (await import('../data/posts')).default;
  const post = posts.find((p) => p.slug === params!.slug) || null;

  return {
    props: {
      post,
    },
  };
};
