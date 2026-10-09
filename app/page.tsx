import type { Metadata } from "next";

export const metadata: Metadata = { title: "Beginner Sewing, Repair & Upcycling", description: "Calm, practical guides for learning sewing, repairing clothes, and giving old materials a second life.", alternates: { canonical: "/" } };

const sections = [
  { href: "/section/sewing-foundations/", label: "01 / foundations", title: "Sewing Foundations", text: "Patterns, essential tools, and machine basics for a confident first stitch.", pathImage: "/assets/category-cards/path-foundations-v2.webp", exploreImage: "/assets/category-cards/explore-foundations-v2.webp" },
  { href: "/section/repair-and-refashion/", label: "02 / repair & refashion", title: "Repair & Refashion", text: "Hand sewing, visible mending, denim, and thoughtful transformations.", pathImage: "/assets/category-cards/path-repair-v2.webp", exploreImage: "/assets/category-cards/explore-repair-v2.webp" },
  { href: "/section/everyday-sewing-projects/", label: "03 / everyday projects", title: "Everyday Sewing Projects", text: "Fabric bags and practical home projects that earn their place.", pathImage: "/assets/category-cards/path-everyday-v2.webp", exploreImage: "/assets/category-cards/explore-everyday-v2.webp" },
];
const guides = [{ href: "/post/fix-hole-in-jeans-by-hand/", tag: "Repair · hand sewing", title: "Fix a hole in jeans by hand", text: "A calm beginner repair plan for sturdy denim." }, { href: "/post/read-a-sewing-pattern/", tag: "Foundations · patterns", title: "Read a sewing pattern", text: "Find your way around the symbols without feeling overwhelmed." }, { href: "/post/easy-tshirt-upcycles/", tag: "Refashion · old T-shirts", title: "Easy T-shirt upcycles", text: "Useful ideas for clothes you already own." }, { href: "/post/best-beginner-sewing-supplies/", tag: "Foundations · tools", title: "Beginner sewing supplies", text: "A buy-less, make-more checklist for getting started." }];

export default function Home() {
  return <main>
    <header className="site-header shell">
      <a className="wordmark" href="/" aria-label="refashionlab home">refashionlab<span>.</span></a>
      <p className="header-note">Field notes for useful hands</p>
      <nav aria-label="Primary navigation"><a href="#explore">Explore</a><a href="#featured">Featured</a><a className="nav-pill" href="/about/">Our approach</a></nav>
    </header>

    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="kicker hero-kicker"><span>Independent learning journal</span><span>Est. 2026</span></p>
        <h1 id="hero-title">Make useful things from what you <em>already have.</em></h1>
        <p className="lede">Calm, practical guides for learning sewing, repairing clothes, and giving old materials a second life.</p>
        <div className="actions"><a className="button button-dark" href="/section/sewing-foundations/">Start with the basics</a><a className="text-link" href="#featured">Browse first projects</a></div>
      </div>
      <div className="hero-stage" aria-label="Abstract fabric, thread, and needle composition" role="img">
        <div className="hero-art"><div className="sun"></div><div className="fabric fabric-one"></div><div className="fabric fabric-two"></div><div className="thread"></div><div className="needle"></div></div>
        <p className="hero-caption"><span>01</span> Begin where you are.<br />Use what you have.</p>
        <span className="hero-orbit" aria-hidden="true">repair · reuse · remake ·</span>
      </div>
    </section>

    <aside className="signal" aria-label="Site overview"><div className="shell signal-inner"><p><strong>50</strong><span>practical guides</span></p><p><strong>10</strong><span>focused categories</span></p><p><strong>0</strong><span>perfect first attempts required</span></p><p className="signal-note">Slow craft.<br />Clear thinking.</p></div></aside>

    <section className="pathways shell" aria-labelledby="path-title">
      <div className="section-heading split"><div><p className="kicker">Choose your path</p><h2 id="path-title">A softer way<br />into making.</h2></div><p className="section-note">Three clear starting points. No complicated setup, no pressure to know everything first.</p></div>
      <div className="path-grid">{sections.map((item, index) => <a className="path-card" href={item.href} key={item.href}><div className="media-frame"><img className="card-image" src={item.pathImage} alt="" loading="lazy" decoding="async" width="960" height="640" /></div><div className="card-copy"><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-action">Open section</span></div></a>)}</div>
    </section>

    <section id="explore" className="explore" aria-labelledby="explore-title"><div className="shell">
      <div className="section-heading explore-heading"><p className="kicker">Explore the site</p><h2 id="explore-title">Start small.<br /><em>Keep going.</em></h2></div>
      <div className="section-grid">{sections.map((item, index) => <a className="section-card" href={item.href} key={item.href}><img className="card-image" src={item.exploreImage} alt="" loading="lazy" decoding="async" width="960" height="640" /><div className="section-card-copy"><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p><b>Explore the section</b></div><span className="oversize-number" aria-hidden="true">0{index + 1}</span></a>)}</div>
    </div></section>

    <section id="featured" className="featured shell" aria-labelledby="featured-title">
      <div className="section-heading split"><div><p className="kicker">Featured guides</p><h2 id="featured-title">Your first<br />four wins.</h2></div><p className="section-note">Clear steps, honest materials, and no need to buy a whole new hobby.</p></div>
      <div className="guide-list">{guides.map((guide, index) => <a href={guide.href} className="guide" key={guide.href}><span className="guide-index">0{index + 1}</span><div><span>{guide.tag}</span><h3>{guide.title}</h3><p>{guide.text}</p></div><strong>Read</strong></a>)}</div>
    </section>

    <section id="about" className="promise-wrap"><div className="promise shell"><div className="promise-title"><p className="kicker">The refashionlab promise</p><h2>Useful<br /><em>over perfect.</em></h2></div><div className="promise-list"><p><b>01 / Clear steps</b><span>One task at a time, with the details that make it less intimidating.</span></p><p><b>02 / Use what you have</b><span>Projects begin with old clothes, fabric scraps, and simple tools.</span></p><p><b>03 / Make it yours</b><span>Practical guidance leaves room for your materials, pace, and style.</span></p></div></div></section>

    <footer className="site-footer shell"><div><a className="wordmark" href="/">refashionlab<span>.</span></a><p>Beginner-friendly sewing, repair, and upcycling guides.</p></div><div className="footer-links"><a href="/about/">About</a><a href="/privacy-policy/">Privacy</a><a href="/terms/">Terms</a><a href="/user-agreement/">User agreement</a></div><small>Made for curious hands. © 2026</small><a className="back-top" href="#hero-title">Back to top</a></footer>
  </main>;
}
