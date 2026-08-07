import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "refashionlab — Beginner Sewing, Repair & Upcycling",
  description: "Calm, practical guides for learning sewing, repairing clothes, and giving old materials a second life.",
};

const pathways = [
  ["01", "Start sewing", "Tools, patterns, and first machine skills."],
  ["02", "Repair clothes", "Simple fixes for everyday wear."],
  ["03", "Refashion old clothes", "Turn garments into something useful."],
  ["04", "Make projects", "Small bags and home sewing wins."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell"><a className="wordmark" href="/">refashionlab<span>.</span></a><nav aria-label="Primary navigation"><a href="#explore">Explore</a><a href="#featured">Featured</a><a className="nav-pill" href="#about">Our approach</a></nav></header>
      <section className="hero shell"><div className="hero-copy"><p className="kicker">Beginner sewing · repair · upcycling</p><h1>Make useful things from what you already have.</h1><p className="lede">Calm, practical guides for learning sewing, repairing clothes, and giving old materials a second life.</p><div className="actions"><a className="button button-dark" href="#explore">Start with the basics <span>↗</span></a><a className="text-link" href="#featured">Browse projects <span>↗</span></a></div></div><div className="hero-art" aria-label="Abstract fabric and thread illustration" role="img"><div className="sun"></div><div className="fabric fabric-one"></div><div className="fabric fabric-two"></div><div className="thread"></div><div className="needle"></div></div></section>
      <section className="pathways shell" aria-labelledby="path-title"><div className="section-heading"><p className="kicker">Choose your path</p><h2 id="path-title">A softer way into making.</h2></div><div className="path-grid">{pathways.map(([n, title, body]) => <a className="path-card" href="#explore" key={n}><span className="card-number">{n}</span><h3>{title}</h3><p>{body}</p><span className="arrow">↗</span></a>)}</div></section>
      <section id="explore" className="explore shell" aria-labelledby="explore-title"><div className="section-heading split"><div><p className="kicker">Explore the site</p><h2 id="explore-title">Start small. Keep going.</h2></div><p className="section-note">Three clear places to begin, with real projects waiting at the next step.</p></div><div className="section-grid"><a className="section-card sage" href="#featured"><span>01 / foundations</span><h3>Sewing Foundations</h3><p>Beginner patterns, essential tools, and machine basics.</p><b>Explore foundations ↗</b></a><a className="section-card rust" href="#featured"><span>02 / repair &amp; refashion</span><h3>Repair &amp; Refashion</h3><p>Hand sewing, visible mending, denim, and old clothes.</p><b>Explore repairs ↗</b></a><a className="section-card ink" href="#featured"><span>03 / everyday projects</span><h3>Everyday Sewing Projects</h3><p>Fabric bags and practical home sewing projects.</p><b>Explore projects ↗</b></a></div></section>
      <section id="featured" className="featured shell" aria-labelledby="featured-title"><div className="section-heading split"><div><p className="kicker">Featured guides</p><h2 id="featured-title">Your first four wins.</h2></div><p className="section-note">Clear steps, honest materials, and no need to buy a whole new hobby.</p></div><div className="guide-list"><a href="#" className="guide"><span>Repair · hand sewing</span><h3>Fix a hole in jeans by hand</h3><p>A calm beginner repair plan for sturdy denim.</p><strong>Read guide ↗</strong></a><a href="#" className="guide"><span>Foundations · patterns</span><h3>Read a sewing pattern</h3><p>Find your way around the symbols without feeling overwhelmed.</p><strong>Read guide ↗</strong></a><a href="#" className="guide"><span>Refashion · old T-shirts</span><h3>Easy T-shirt upcycles</h3><p>Useful ideas for clothes you already own.</p><strong>Read guide ↗</strong></a><a href="#" className="guide"><span>Foundations · tools</span><h3>Beginner sewing supplies</h3><p>A buy-less, make-more checklist for getting started.</p><strong>Read guide ↗</strong></a></div></section>
      <section id="about" className="promise shell"><div><p className="kicker">The refashionlab promise</p><h2>Useful over perfect.</h2></div><div className="promise-list"><p><b>Clear steps</b><span>One task at a time, with the details that make it less intimidating.</span></p><p><b>Use what you have</b><span>Projects begin with old clothes, fabric scraps, and simple tools.</span></p><p><b>Make it yours</b><span>Practical guidance leaves room for your materials, pace, and style.</span></p></div></section>
      <footer className="site-footer shell"><div><a className="wordmark" href="/">refashionlab<span>.</span></a><p>Beginner-friendly sewing, repair, and upcycling guides.</p></div><div className="footer-links"><a href="#about">About</a><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="#">User Agreement</a></div><small>Made for curious hands.</small></footer>
    </main>
  );
}
