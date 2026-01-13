import React from 'react';
import { ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'EcoVadis',
      location: 'Barcelona, Spain',
      period: 'Jul 2023 – Present',
      highlights: [
        'Deliver high-quality solutions with C#, .NET Core, ASP.NET MVC, SQL Server',
        'Design and implement microservices architecture, migrate monolithic applications',
        'CI/CD pipelines with Docker, Helm, Kubernetes, Azure DevOps',
        'Database design with SQL Server, Cosmos DB, Elasticsearch',
        'Improved system reliability by enhancing observability using ELK stack'
      ]
    },
    {
      title: 'Junior Software Engineer / Scrum Master',
      company: 'EcoVadis',
      location: 'Tunisia',
      period: 'Nov 2021 – Jul 2023',
      highlights: [
        'Delivered high-quality code using C#, .NET Core, ASP.NET MVC, SQL Server',
        'Led Scrum ceremonies as team Scrum Master, ensuring Agile best practices',
        'Built and optimized CI/CD pipelines with Azure DevOps',
        'Collaborated on microservices design, deployment, and database management'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Equalios',
      location: 'Tunis, Tunisia',
      period: 'Mar 2021 – Nov 2021',
      highlights: [
        'Developed a regulatory monitoring platform with Flask, Node.js, Angular, MongoDB',
        'Automated collection & processing of regulatory laws with Python',
        'Deployed solutions on Google Cloud Platform for scalability'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Cognira',
      location: 'Tunis, Tunisia',
      period: 'Jul 2020 – Sep 2020',
      highlights: [
        'Built a dashboard IDE plugin to generate JSON configurations for planning solutions',
        'Worked with Oracle RPAS, React.js, Node.js, XML, and JSON'
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: '#0f172a', color: 'white', padding: '3rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white', textAlign: 'center' }}>
          Professional Experience
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '3rem', textAlign: 'center' }}>
          My career journey and professional achievements
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', maxWidth: '1200px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderLeft: '3px solid #3b82f6',
                overflow: 'hidden',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(59, 130, 246, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Header */}
              <div style={{ padding: '1.25rem', borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#60a5fa', margin: '0 0 0.3rem 0' }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#cbd5e1', fontWeight: '500', margin: '0 0 0.4rem 0' }}>
                  {exp.company}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#94a3b8' }}>
                  <span>{exp.period}</span>
                  <span>📍 {exp.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ padding: '1.25rem', flex: 1 }}>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      style={{
                        color: '#cbd5e1',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        lineHeight: '1.4'
                      }}
                    >
                      <ChevronRight style={{ width: '14px', height: '14px', color: '#3b82f6', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
