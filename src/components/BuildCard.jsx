export default function BuildCard({ build }) {
  const { title, builder, version, thumbnail, downloads, views } = build

  return (
    <article className="group rounded-xl2 border border-nest bg-nest-card overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300 ease-soft">
      <div className="aspect-[4/3] bg-nest-teal/10 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-soft"
          />
        ) : (
          <div className="w-full h-full world-grid" />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-nest-teal leading-tight">{title}</h3>
        <p className="font-body text-xs text-nest-ink/60 mt-1">
          by {builder} · v{version}
        </p>
        <div className="flex items-center justify-between mt-4 text-xs font-body text-nest-ink/50">
          <span>{views ?? 0} views</span>
          <span>{downloads ?? 0} downloads</span>
        </div>
      </div>
    </article>
  )
}
