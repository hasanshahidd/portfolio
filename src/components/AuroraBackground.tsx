// Calm, premium background: deep gradient + faint static grid + subtle grain.
// No motion, so it never competes with the content.
export default function AuroraBackground() {
  return (
    <>
      <div className="bg-premium" aria-hidden />
      <div className="bg-noise" aria-hidden />
    </>
  )
}
