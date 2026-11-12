// Menampilkan foto jika `src` diisi, kalau tidak tampil kotak placeholder "FOTO".
export default function Photo({ src, alt, className = "" }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={foto-hero.jpg} alt={alt} className={`border border-line object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center border border-line bg-ink-2 font-mono text-xs tracking-[0.3em] text-mute ${className}`}
    >
      FOTO
    </div>
  );
}
