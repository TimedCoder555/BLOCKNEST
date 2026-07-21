import { Link } from 'react-router-dom'
import BlockMark from '../components/BlockMark'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-32 text-center flex flex-col items-center gap-6">
      <BlockMark size={40} className="opacity-70" />
      <h1 className="font-display text-3xl text-nest-teal">This block hasn't been placed yet</h1>
      <p className="font-body text-nest-ink/60">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-block bg-nest-teal text-nest-bg font-body text-sm hover:bg-nest-deep transition-colors duration-200 ease-soft"
      >
        Back to Home
      </Link>
    </main>
  )
}
