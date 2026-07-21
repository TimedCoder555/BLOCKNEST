export default function Settings({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Close settings"
        onClick={onClose}
        className="absolute inset-0 bg-nest-ink/30 backdrop-blur-sm"
      />
      <aside className="relative w-full max-w-sm h-full bg-nest-card border-l border-nest p-8 flex flex-col gap-6 shadow-soft animate-[slideIn_0.3s_ease-soft]">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-nest-teal">Settings</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full border border-nest flex items-center justify-center text-nest-teal hover:bg-nest-teal hover:text-nest-bg transition-colors"
          >
            ×
          </button>
        </div>

        <p className="font-body text-sm text-nest-ink/60">
          Theme, animations, language, and the VIP admin sign-in are on the way.
        </p>
      </aside>
    </div>
  )
}
