import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import { isGuarded, useAuth } from '../auth';

export const Route = createFileRoute('/private')({
  beforeLoad: async ({ context, location }) => {
    await isGuarded(context, location);
  },
  component: Private,
})

function Private() {
  const navigate = useNavigate({ from: '/private' })
  const auth = useAuth();

  const logout = () => {
    auth.setUser(null);
    // expire cookie
    document.cookie = `ttrpg-store=; path=/; max-age=0; expires=${new Date(0).toUTCString()}`;
    navigate({
      to: '/',
    });
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <p>Private, you are logged in as {auth.user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}