export default function SearchBar({ value = '', onChange = () => {} }) {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="build-search" className="sr-only">
        Search builds
      </label>
      <div className="flex items-center gap-2 rounded-block border border-nest bg-nest-card px-4 py-3 shadow-card">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#035352" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          id="build-search"
          type="text"
          placeholder="Search builds, castles, redstone…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent font-body text-sm text-nest-ink placeholder:text-nest-ink/40 focus:outline-none"
        />
      </div>
    </div>
  )
}
