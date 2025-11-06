import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid #eee' }}>
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 0',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontWeight: 600,
            color: 'inherit',
            textDecoration: 'none',
          }}
          aria-label="Thaicamp"
        >
          <img
        src = "/img/logo.png" width="100" height="100"
          />
        </Link>

        <nav style={{ display: 'flex', gap: 24 }}>
          <Link href="/">Início</Link>
          <Link href="/beneficios">Benefícios</Link>
          <Link href="/equipe">Nossa Equipe</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}