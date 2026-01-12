import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a1f3a 100%)', color: 'white', padding: '6rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
          Hi, I'm<br />
          <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Oussama Chaabouni</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.8' }}>
          Software Engineer | Cloud & .NET Specialist
          <br/>
          Building scalable microservices, CI/CD pipelines, and cloud-native solutions
          with .NET, Azure, and DevOps best practices.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
          }}>
            View My Work
          </a>
          <a href="#contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            color: '#60a5fa',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: '600',
            border: '2px solid #3b82f6',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}>
            Get In Touch
          </a>
          <a 
            href="/Portfolio/Oussama_Chaabouni.pdf"
            download="Oussama_Chaabouni_CV.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'transparent',
              color: '#60a5fa',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: '2px solid #3b82f6',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Download style={{ width: '16px', height: '16px' }} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
