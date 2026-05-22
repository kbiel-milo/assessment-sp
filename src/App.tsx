import React from 'react';
import './style.css';
import { UserService, User, Post } from './api';

export default function App() {
  const [search, setSearch] = React.useState('');
  const filters = { search, page: 1, limit: 100 };
  const [users, setUsers] = React.useState<User[]>([]);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(
    null
  );

  // TODO: fetch users
  React.useEffect(() => {}, [filters]);

  // TODO: fetch posts when user is selected
  React.useEffect(() => {}, [selectedUserId]);

  return (
    <div style={styles.layout}>
      <div style={styles.panel}>
        <h2 style={styles.heading}>Users</h2>
        <input
          style={styles.input}
          placeholder="Search by name…"
          value={filters.search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {!users.length ? 'No users found.' : null}
        {/* TODO: render users list */}
      </div>

      <div style={styles.panel}>
        <h2 style={styles.heading}>Posts</h2>
        {!selectedUserId ? 'Select user to see his posts.' : null}
        {/* TODO: render selected users posts */}
      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: 'flex',
    gap: '1.5rem',
    padding: '2rem',
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    fontSize: '14px',
    color: '#1a1a1a',
    minHeight: '100vh',
    boxSizing: 'border-box' as const,
    backgroundColor: '#f5f5f5',
  },
  panel: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
  },
  heading: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 600,
  },
  input: {
    padding: '8px 10px',
    border: '1px solid #d0d0d0',
    borderRadius: '5px',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  },
} as const;
