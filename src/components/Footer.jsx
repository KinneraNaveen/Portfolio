export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-80">“Building solutions that connect people and technology.”</p>
        <div className="flex items-center gap-4 text-xl">
          <a className="hover:text-brand transition" href="https://github.com/kinneranaveen" target="_blank" rel="noreferrer" aria-label="Kinnera Naveen's GitHub Profile">🐙</a>
          <a className="hover:text-brand transition" href="https://www.linkedin.com/in/kinnera-naveen-1786ab2b6/" target="_blank" rel="noreferrer" aria-label="Kinnera Naveen's LinkedIn Profile">💼</a>
          <a className="hover:text-brand transition" href="mailto:kinneranaveen237@gmail.com" aria-label="Email Kinnera Naveen">✉️</a>
        </div>
        <p className="text-xs opacity-70">© {new Date().getFullYear()} Kinnera Naveen</p>
      </div>
    </footer>
  )
}
