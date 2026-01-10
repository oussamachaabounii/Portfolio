import React from 'react';

const Header: React.FC = () => {
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header style={{ background: '#0f172a', color: 'white', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
      <div className="container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa', textDecoration: 'none' }}>
            Oussama
          </a>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
