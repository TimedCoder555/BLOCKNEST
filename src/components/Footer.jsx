import BlockMark from './BlockMark'

export default function Footer() {
  return (
    <footer className="border-t border-nest mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-nest-teal">
          <BlockMark size={20} />
          <span className="font-display text-lg">BlockNest</span>
        </div>
        <p className="text-sm text-nest-ink/60 font-body">
          Home of amazing Minecraft builds — built by creators, shared for free.
        </p>
        <p className="text-xs text-nest-ink/40 font-body">
          &copy; {new Date().getFullYear()} BlockNest
        </p>
      </div>
    </footer>
  )
}
