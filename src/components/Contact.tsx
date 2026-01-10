import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ background: '#0f172a', color: 'white', padding: '3rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.25rem', color: 'white', textAlign: 'center' }}>Get In Touch</h2>
        <p style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '2rem', textAlign: 'center' }}>
          Have a project in mind? Let's discuss how we can work together
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {/* Contact Information Cards */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
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
            <Mail style={{ width: '2rem', height: '2rem', marginBottom: '0.75rem', color: '#60a5fa', marginLeft: 'auto', marginRight: 'auto' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.35rem', color: 'white' }}>
              Email
            </h3>
            <a 
              href="mailto:oussama.chaabouni@hotmail.com"
              style={{ 
                color: '#60a5fa', 
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s',
                fontSize: '0.9rem'
              }} onMouseEnter={(e) => e.currentTarget.style.color = '#93c5fd'} onMouseLeave={(e) => e.currentTarget.style.color = '#60a5fa'}
            >
              oussama.chaabouni@hotmail.com
            </a>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
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
            <Phone style={{ width: '2rem', height: '2rem', marginBottom: '0.75rem', color: '#60a5fa', marginLeft: 'auto', marginRight: 'auto' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.35rem', color: 'white' }}>
              Phone
            </h3>
            <a 
              href="tel:+34605136382"
              style={{ 
                color: '#60a5fa', 
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s',
                fontSize: '0.9rem'
              }} onMouseEnter={(e) => e.currentTarget.style.color = '#93c5fd'} onMouseLeave={(e) => e.currentTarget.style.color = '#60a5fa'}
            >
              +34 605 136 382
            </a>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            padding: '1.5rem',
            borderRadius: '0.5rem',
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
            <MapPin style={{ width: '2rem', height: '2rem', marginBottom: '0.75rem', color: '#60a5fa', marginLeft: 'auto', marginRight: 'auto' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.35rem', color: 'white' }}>
              Location
            </h3>
            <p style={{ color: '#cbd5e1', fontWeight: '500', fontSize: '0.9rem', margin: 0 }}>
              Barcelona, Spain
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.75rem', 
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          borderRadius: '0.5rem',
          textAlign: 'center',
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem', color: '#60a5fa' }}>
            Let's Connect
          </h3>
          <p style={{ marginBottom: '1rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
            Follow me on social media or reach out directly
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/oussamachaabounii"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.2rem',
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#60a5fa',
                textDecoration: 'none',
                borderRadius: '0.375rem',
                fontWeight: '500',
                fontSize: '0.85rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.8)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
              }}
            >
              <Github style={{ width: '16px', height: '16px' }} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/oussamachaabouni"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.2rem',
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#60a5fa',
                textDecoration: 'none',
                borderRadius: '0.375rem',
                fontWeight: '500',
                fontSize: '0.85rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.8)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
              }}
            >
              <Linkedin style={{ width: '16px', height: '16px' }} />
              LinkedIn
            </a>
            <a
              href="mailto:oussama.chaabouni@hotmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.2rem',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.375rem',
                fontWeight: '600',
                fontSize: '0.85rem',
                border: 'none',
                transition: 'all 0.3s',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.5)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
              }}
            >
              <Send style={{ width: '16px', height: '16px' }} />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
