import { useContext } from 'react';
import AuthModalContext from '../../contexts/AuthModalContext';
import './CommunityCta.css';

// Convite no fim de cada artigo. Abre o mesmo popup da comunidade (antes
// apontava para /comunidade, página que ainda não existe).
function CommunityCta() {
  const { openCommunity } = useContext(AuthModalContext);

  return (
    <div className="sn-community-cta">
      <h3 className="sn-community-cta__title">Junte-se à comunidade</h3>
      <p className="sn-community-cta__text">
        Novos guias, histórias e atualizações em primeira mão, direto no seu e-mail. E, em breve,
        os espaços de troca da comunidade Sasso Nomad.
      </p>
      <button
        className="sn-community-cta__button"
        type="button"
        onClick={() => openCommunity('artigo')}
      >
        Junte-se à comunidade
      </button>
    </div>
  );
}

export default CommunityCta;
