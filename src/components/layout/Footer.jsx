const teamMembers = [
  {
    name: "Dubraska",
    role: "Fundador & Tostador",
    emoji: "☕",
  },
  {
    name: "Federico",
    role: "Barista Especialista",
    emoji: "🫖",
  },
  {
    name: "Dexter",
    role: "Asesor de Equipos",
    emoji: "⚙️",
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">☕ MÜLLER COFFEE STORE</div>
        </div>

        <div className="footer-team">
          <h3 className="footer-section-title">Nuestro Equipo</h3>
          <div className="team-cards">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-emoji">{member.emoji}</div>
                <div className="team-info">
                  <strong>{member.name}</strong>
                  <span className="team-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 Müller Coffee Store.</span>
      </div>
    </footer>
  );
};

export default Footer;