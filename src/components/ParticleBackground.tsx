"use client"

interface Particle {
  x: number
  y: number
  size: number
}

export function ParticleBackground() {
  // Generate random particles
  const particles: Particle[] = Array.from({ length: 50 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-cyan-500/30 backdrop-blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>
    </div>
  )
}

