// types/index.ts
export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}