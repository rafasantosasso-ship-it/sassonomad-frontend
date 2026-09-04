import './CommunitySection.css';

function CommunitySection({ onJoinClick }) {
  return (
    <section className="sn-community">
      <h2 className="sn-community__title">Faça parte da comunidade Sasso Nomad</h2>
      <p className="sn-community__text">
        Entre para trocar experiências com outros viajantes e nômades digitais, acessar conteúdo
        exclusivo e acompanhar novidades em primeira mão.
      </p>
      <button className="sn-community__cta" type="button" onClick={onJoinClick}>
        Participar da comunidade
      </button>
    </section>
  );
}

export default CommunitySection;
