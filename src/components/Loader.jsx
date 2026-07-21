import BlockMark from './BlockMark'

export default function Loader({ label = 'Loading builds…' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <BlockMark size={40} spin />
      <p className="font-body text-sm text-nest-ink/60">{label}</p>
    </div>
  )
}
