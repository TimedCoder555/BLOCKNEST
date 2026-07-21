import BlockMark from './BlockMark'

export default function EmptyState({ title, description }) {
  return (
    <div className="rounded-xl2 border border-nest bg-nest-card/60 py-16 px-8 text-center flex flex-col items-center gap-4">
      <BlockMark size={36} className="opacity-70" />
      <h3 className="font-display text-2xl text-nest-teal">{title}</h3>
      <p className="font-body text-sm text-nest-ink/60 max-w-sm">{description}</p>
    </div>
  )
}
