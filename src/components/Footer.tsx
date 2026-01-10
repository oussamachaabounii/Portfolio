import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ background: '#0f172a', color: 'white', padding: '3rem 0 1rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Oussama Chaabouni
            </h3>
            <p style={{ color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Software Engineer | Cloud & .NET Specialist
              <br/>
              Building scalable solutions with .NET, Azure, and DevOps.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://github.com/oussamachaabounii"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  borderRadius: '50%',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/oussamachaabouni"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  borderRadius: '50%',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:oussama.chaabouni@hotmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  borderRadius: '50%',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#home" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.3s' }}>
                  → Home
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.3s' }}>
                  → About
                </a>
              </li>
              <li>
                <a href="#skills" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.3s' }}>
                  → Skills
                </a>
              </li>
              <li>
                <a href="#projects" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.3s' }}>
                  → Projects
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.3s' }}>
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>
              Expertise
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#cbd5e1' }}>🔧 Backend Development</li>
              <li style={{ color: '#cbd5e1' }}>☁️ Cloud Architecture</li>
              <li style={{ color: '#cbd5e1' }}>🚀 DevOps & CI/CD</li>
              <li style={{ color: '#cbd5e1' }}>🏗️ Microservices</li>
              <li style={{ color: '#cbd5e1' }}>🔐 Security</li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(203, 213, 225, 0.1)', 
          paddingTop: '2rem',
          marginTop: '2rem'
        }}>
          {/* Bottom */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
              © {currentYear} Oussama Chaabouni. All rights reserved.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
              Built with <Heart className="h-3 w-3" style={{ color: '#ef4444' }} fill="currentColor" /> using React & TypeScript
            </p>
            <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.5rem' }}>
              📍 Barcelona, Spain | 📧 oussama.chaabouni@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
