import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Nossa Equipe | Thaicamp',
  description: 'Conheça a equipe técnica da Thaicamp — professores e o fundador campeão Gui Bastos.',
};

const team = [
  {
    name: 'Gui Bastos',
    role: 'Fundador · Head Coach · Atleta',
    img: '/img/gui-bastos.jpg',
    bio: 'Canhoto, 1,90m. Atleta profissional de Muay Thai/Kickboxing, com carreira em eventos nacionais e internacionais. Fundador da Thaicamp e responsável pela metodologia técnica e pelo desenvolvimento dos professores.',
    achievements: [
      'Campeão do Attack Fight 81 kg (2022), lutando 2 categorias acima (cinturão).',
      'Atuou/atua em cards como SFT e Spartans K1 Rules.',
      'Experiência como coach internacional (passagens por Miami/EUA).'
    ],
    refs: [
      { label: 'Yoksutai — Cinturão 2022', href: 'https://yoksutai.com/gui-bastos-surpreende-lutando-2-categorias-acima-e-leva-cinturao-do-attack-jordao-segue-campeao-ate-635kg/?srsltid=AfmBOoqyfIal-PKFrewe-1iFRADHC3YH2SMiuSlqDNQIVC7Kb_LyNOsY' },
      { label: 'Perfil Tapology', href: 'https://www.tapology.com/fightcenter/fighters/334171-guilherme-bastos' },
      { label: 'Perfil BoxRec MT', href: 'https://boxrec.com/en/mt-pro/1187619' },
      { label: 'Instagram — Coach Internacional', href: 'https://www.instagram.com/guibastos_fighter_coach/' },
    ]
  },
  {
    name: 'Thainan',
    role: 'Professor',
    img: '/img/thainan.jpeg',
    bio: 'Professor formado no método Thaicamp. Especialista em técnica limpa, movimentação inteligente e construção de fundamentos sólidos. Ideal para alunos que querem aprender Muay Thai com precisão e ritmo.',
    achievements: [
      'Responsável pelos treinos de fundamentos e lapidação técnica.',
      'Experiência com acompanhamento individual de condicionamento.',
      'Certificação interna em prevenção de lesões e primeiros socorros.',
    ],
    refs: []
  },
  {
    name: 'Gustavo',
    role: 'Professor',
    img: '/img/akira.jpeg',
    bio: 'Professor de Muay Thai focado em condicionamento, potência e disciplina progressiva. Ótimo para iniciantes e alunos que buscam evolução física e técnica ao mesmo tempo.',
    achievements: [
      'Conduz os treinos de condicionamento técnico e drills de potência.',
      'Experiência com alunos iniciantes e retornando ao esporte.',
      'Certificação interna em alongamento, respiração e mobilidade.',
    ],
    refs: []
  },
];

export default function NossaEquipePage() {
  return (
    <main>
      <section className="section" style={{paddingTop: 72}}>
        <div className="container">
          <h1 className="h1">Nossa Equipe</h1>
          <p className="lead">Treinadores qualificados, metodologia progressiva e a experiência de um fundador campeão.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="grid grid-3">
            {team.map((p) => (
              <article key={p.name} className="card">
                <div className="heroImgWrap">
                  <Image
                    src={p.img}
                    width={1200}
                    height={800}
                    alt={p.name}
                    className="heroImg"
                    priority={true}
                  />
                </div>
                <h3 className="h3" style={{marginTop: 12}}>{p.name}</h3>
                <p style={{margin: '4px 0', fontWeight: 600}}>{p.role}</p>
                <p style={{marginTop: 8}}>{p.bio}</p>
                <ul style={{marginTop: 10, paddingLeft: 18}}>
                  {p.achievements.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
                {p.refs?.length > 0 && (
                  <div style={{marginTop: 10}}>
                    <strong>Fontes:</strong>
                    <ul style={{paddingLeft: 18, marginTop: 6}}>
                      {p.refs.map(r => (
                        <li key={r.href}>
                          <a href={r.href} target="_blank" rel="noopener noreferrer">{r.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="h2">Quer treinar com a gente?</h2>
          <p className="lead">Aula experimental para conhecer metodologia e equipe.</p>
          <Link href="/contato" className="btn">Agendar</Link>
        </div>
      </section>
    </main>
  );
}