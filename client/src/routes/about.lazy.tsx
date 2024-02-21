import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="text-white p-2">Hello from About!</div>
}