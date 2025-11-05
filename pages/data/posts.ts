import type { Post } from '../../types';

const posts: Post[] = [
  {
    id: 1,
    slug: 'first-post',
    title: 'My First Blog Post',
    content: 'This is the content of the first post.',
    date: '2023-10-01',
  },
  {
    id: 2,
    slug: 'second-post',
    title: 'My Second Blog Post',
    content: 'This is the content of the second post.',
    date: '2023-10-02',
  },
];

export default posts;