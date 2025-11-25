export default function SectionCard({ eyebrow, title, description, children, footer }) {
  return (
    <section className="section-card">
      {eyebrow && <p className="tagline">{eyebrow}</p>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <div className="stack" style={{ marginTop: '1.25rem' }}>
        {children}
      </div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
}
