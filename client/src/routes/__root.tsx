import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="text-white p-2 flex gap-2">
        <Link to="/" className="[&.active]:underline">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:underline">
          About
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})