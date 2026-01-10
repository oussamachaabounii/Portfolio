import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" style={{ background: '#0f172a', color: 'white', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white', textAlign: 'center' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '3rem', textAlign: 'center' }}>
          Learn more about my journey and passion for development
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginTop: '3rem', alignItems: 'start' }}>
          <div style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1rem' }}>
              I am a passionate software engineer with 4+ years of experience in backend and full-stack development. I specialize in C#, .NET Core, ASP.NET, SQL Server, Azure, Docker, Kubernetes, and modern architectures such as microservices. I thrive in Agile teams, mentor developers, and enjoy working on scalable, secure, and innovative solutions.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Currently based in Barcelona, Spain, working as a Software Engineer at EcoVadis where I deliver high-quality solutions, design microservices architecture, and build robust CI/CD pipelines. I'm passionate about continuous learning and staying at the forefront of cloud technologies and DevOps practices.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new cloud technologies, contributing to innovative projects, and sharing knowledge with the developer community.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#60a5fa' }}>4+</h3>
              <p style={{ color: '#cbd5e1' }}>Years of Experience</p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#60a5fa' }}>20+</h3>
              <p style={{ color: '#cbd5e1' }}>Projects Delivered</p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#60a5fa' }}>10+</h3>
              <p style={{ color: '#cbd5e1' }}>Certifications Earned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
