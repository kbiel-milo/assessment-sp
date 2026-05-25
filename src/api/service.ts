import { User, Post, UserFilters } from './schema';

const BASE = `${window.location.protocol}//jsonplaceholder.typicode.com`;

const delay = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

const AGES = [
  32, 24, 45, 47, 58
]
export class UserService {
  static async fetchUsers(filters?: UserFilters): Promise<User[]> {
    console.log(`Fetching users with Filter(${JSON.stringify(filters)}).`);

    await delay(400 + Math.random() * 500);

    // throw new Error("Failed to load users");

    const res = await fetch(`${BASE}/users`);

    if (!res.ok) throw new Error('Failed to load users');

    const users = (await res.json()) as User[];

    // JSONPlaceholder doesn't support filtering server-side
    // so we do it client-side here — in a real API this would
    // be a query param
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      return users.filter((u) => u.username.toLowerCase().includes(q));
    }

    console.log(`Fetched users with Filter(${JSON.stringify(filters)})`);
    return users.map((u, i) => ({ ...u, age: AGES[i % AGES.length] }));
  }

  static async fetchPostsByUser(userId: number): Promise<Post[]> {
    console.log(`Fetching posts for User(id=${userId}).`);
    await delay(300 + Math.random() * 400);

    // throw new Error("Failed to load posts");

    const res = await fetch(`${BASE}/posts?userId=${userId}`);

    if (!res.ok) throw new Error('Failed to load posts');

    console.log(`Fetched posts for User(id=${userId}).`);
    return res.json() as Promise<Post[]>;
  }
}
