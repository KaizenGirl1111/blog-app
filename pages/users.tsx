import type { GetServerSideProps } from 'next';
import type { User } from '../types/index';

interface UsersProps {
  users: User[];
}

export default function Users({ users }: UsersProps) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<UsersProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};