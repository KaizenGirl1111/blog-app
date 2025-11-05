import Link from 'next/link';
import { useState } from 'react';
import type { GetStaticProps } from 'next';
import type { Post } from '../types';
interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    setMessage(result.message);
    setFormData({ name: '', email: '' });
  };

  return (
    <main className="container">
      <header>
        <h1>Blog Posts</h1>
      </header>

      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <section aria-labelledby="contact-form-title">
        <h2 id="contact-form-title">Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = (await import('./data/posts')).default;
  return { props: { posts } };
};