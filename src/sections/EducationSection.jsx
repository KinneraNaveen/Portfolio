import Timeline from '../components/Timeline';

const items = [
  { title: 'B.Tech CSE AIML', subtitle: 'Kalasalingam University', period: '2022 – 2026', details: 'Coursework: Data Structures, Algorithms, AI/ML, DBMS, Operating Systems.' },
  { title: 'Hackathons', subtitle: 'Participated in multiple collegiate hackathons', details: 'Built AI and full-stack Web Applications.' },
  { title: 'Certifications', subtitle: 'Python, React, and ML courses', details: 'Coursera, Udemy, and institutional certifications.' },
];

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <h2 className="font-display text-3xl font-bold text-center">Education & Achievements</h2>
      <div className="mt-8 max-w-2xl mx-auto">
        <Timeline items={items} />
      </div>
    </section>
  );
}
