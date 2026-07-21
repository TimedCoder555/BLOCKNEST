import { useState } from 'react'
import BlockMark from '../components/BlockMark'
import SearchBar from '../components/SearchBar'
import EmptyState from '../components/EmptyState'

const categories = ['Castles', 'Redstone', 'Survival', 'Adventure Maps', 'Modern', 'Fantasy']

export default function Home() {
  const [query, setQuery] = useState('')

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 world-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center flex flex-col items-center gap-6">
          <BlockMark size={56} />
          <h1 className="font-display text-5xl sm:text-6xl text-nest-teal leading-tight max-w-2xl">
            Home of Amazing Minecraft Builds
          </h1>
          <p className="font-body text-nest-ink/60 max-w-lg">
            Browse elegant builds from creators around the world. Preview, explore, and download world
            files — completely free.
          </p>
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className="px-4 py-2 rounded-full border border-nest font-body text-sm text-nest-ink/70 hover:border-nest-teal hover:text-nest-teal transition-colors duration-200 ease-soft"
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Builds */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-3xl text-nest-teal">Featured Builds</h2>
        </div>
        <EmptyState
          title="No Builds Yet"
          description="New Minecraft creations are coming soon."
        />
      </section>

      {/* Latest Builds */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-3xl text-nest-teal">Latest Builds</h2>
        </div>
        <EmptyState
          title="No Builds Yet"
          description="Check back soon — the first builds will land here."
        />
      </section>
    </main>
  )
}
