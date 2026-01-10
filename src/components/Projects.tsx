import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Decentralized OAuth 2.0 Protocol',
      description: 'Blockchain-based authentication protocol using Hyperledger Besu, Solidity, and Node.js. An academic project developed with Telecom SupParis that explores decentralized identity management and smart contract-based authentication.',
      technologies: ['Hyperledger Besu', 'Solidity', 'Node.js', 'Blockchain'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Intrusion Detection System',
      description: 'Built a comprehensive IDS with Docker, Vagrant, and virtual machines for secure network monitoring. Implements advanced threat detection and real-time security alerts.',
      technologies: ['Docker', 'Vagrant', 'Network Security', 'VMs'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Regulatory Monitoring Platform',
      description: 'Full-stack regulatory monitoring platform with automated collection and processing of regulatory laws. Built with Flask, Node.js, Angular, and MongoDB, deployed on Google Cloud Platform.',
      technologies: ['Flask', 'Node.js', 'Angular', 'MongoDB', 'GCP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Dashboard IDE Plugin',
      description: 'Built a dashboard IDE plugin to generate JSON configurations for planning solutions. Worked with Oracle RPAS, React.js, Node.js, XML, and JSON to create a powerful development tool.',
      technologies: ['React.js', 'Node.js', 'Oracle RPAS', 'JSON/XML'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: '#0f172a' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: '#ffffff' }}>Featured Projects</h2>
        <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
          Here are some of my recent projects that showcase my skills and experience
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              padding: '2rem',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#60a5fa', marginBottom: '0.75rem' }}>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      display: 'inline-block',
                      background: 'rgba(59, 130, 246, 0.15)',
                      color: '#60a5fa',
                      fontSize: '0.75rem',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '9999px',
                      fontWeight: '500',
                      border: '1px solid rgba(59, 130, 246, 0.3)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: 'white',
                    border: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
                  }}
                >
                  <Github style={{ width: '16px', height: '16px' }} />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
