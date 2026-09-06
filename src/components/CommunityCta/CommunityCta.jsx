import './CommunityCta.css';

function CommunityCta() {
  return (
    <div className="sn-community-cta">
      <h3 className="sn-community-cta__title">Junte-se à comunidade</h3>
      <p className="sn-community-cta__text">
        Área privada com bastidores, atualizações em primeira mão e — em breve — a newsletter
        oficial da Sassonomad.
      </p>
      <a
        className="sn-community-cta__button"
        href="https://sassonomad.com/comunidade"
        target="_blank"
        rel="noopener noreferrer"
      >
        Junte-se à comunidade
      </a>
    </div>
  );
}

export default CommunityCta;
