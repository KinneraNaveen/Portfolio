import ContactForm from '../components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <h2 className="font-display text-3xl font-bold text-center">Contact</h2>
      <p className="opacity-80 mt-2 text-center">Let’s collaborate. I’m open to internships, freelance work, and exciting projects.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ContactForm />
        <div className="card space-y-3">
          <p><strong>Email:</strong> kinneranaveen237@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a className="text-brand" href="https://www.linkedin.com/in/kinnera-naveen-1786ab2b6/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/kinnera-naveen-1786ab2b6/</a></p>
          <p><strong>GitHub:</strong> <a className="text-brand" href="https://github.com/kinneranaveen" target="_blank" rel="noreferrer">github.com/kinneranaveen</a></p>
          <a className="btn-primary inline-block glow-hover" href="/resume.pdf" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}
