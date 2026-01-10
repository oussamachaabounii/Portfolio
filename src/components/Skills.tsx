import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend & Languages',
      skills: [
        { name: 'C# & .NET Core', level: 95 },
        { name: 'ASP.NET MVC', level: 90 },
        { name: 'SQL Server', level: 88 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'Node.js', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 90 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Azure DevOps', level: 90 },
        { name: 'CI/CD Pipelines', level: 92 },
        { name: 'Microservices', level: 88 }
      ]
    },
    {
      title: 'Frontend & Other',
      skills: [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Angular', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'Scrum/Agile', level: 88 },
        { name: 'Blockchain', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" style={{ background: '#0f172a', color: 'white', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white', textAlign: 'center' }}>Skills & Technologies</h2>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '3rem', textAlign: 'center' }}>
          Here are the technologies I work with and my proficiency levels
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              padding: '2rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center', color: '#60a5fa' }}>
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#cbd5e1', fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{skill.level}%</span>
                    </div>
                    <div style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      height: '0.5rem',
                      borderRadius: '9999px',
                      overflow: 'hidden'
                    }}>
                      <div
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
                          width: `${skill.level}%`,
                          transition: 'width 0.5s ease'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
