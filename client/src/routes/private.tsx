import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../contexts/auth';

export const Route = createFileRoute('/private')({
  beforeLoad: ({ context, location }) => {
    console.log('context', context)
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: Private,
})

function Private() {
  const navigate = useNavigate({ from: '/private' })
  const auth = useAuth();

  return (
    <div>
      <p>Private, you are logged in as {auth.user?.email}</p>
      <button onClick={() => auth.setUser(null)}>Logout</button>
    </div>
  )
}