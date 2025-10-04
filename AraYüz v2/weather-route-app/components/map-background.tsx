"use client"

export function MapBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Map placeholder - in production this would be a real map component */}
      <div
        className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(74, 86, 226, 0.1) 0%, transparent 50%)
          `,
        }}
      >
        {/* Grid overlay for map effect */}
        <div
          className="h-full w-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
