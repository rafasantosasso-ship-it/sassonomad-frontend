import ArticleLayout from '../ArticleLayout/ArticleLayout';
import useFavorites from '../../hooks/useFavorites';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import { getArticleBySlug } from '../../utils/articles';

const article = getArticleBySlug('cagliari');

function ArticleCagliari() {
  const { isFavorite, toggleFavorite } = useFavorites();

  useDocumentMeta(
    'Cagliari: A Capital Que Ninguém Trata Como Capital | Sasso Nomad',
    'Fachadas coloridas, ladeiras de pedra e uma capital europeia que ainda não virou destino de massa. Cagliari fora do roteiro clássico da Sardegna.',
  );

  return (
    <ArticleLayout
      article={{ ...article, title: 'Cagliari: A Capital Que Ninguém Trata Como Capital' }}
      isSaved={isFavorite(`article:${article.slug}`)}
      onToggleSave={() => toggleFavorite(`article:${article.slug}`)}
    >
      <p>
        Tem uma rua no centro histórico de Cagliari onde as fachadas mudam de cor a cada prédio —
        laranja queimado, ocre, um verde-oliva desbotado — como se a cidade tivesse decidido,
        séculos atrás, que uniformidade era coisa de lugar sem personalidade. De manhã cedo, antes
        do movimento começar, essa rua fica praticamente vazia. Só a luz baixa batendo nas
        paredes, um vaso de planta na varanda, e o silêncio que só existe em cidade que ainda não
        aprendeu a se vender como destino turístico.
      </p>
      <p>
        Isso é estranho de dizer sobre uma capital. Capitais costumam ser barulhentas,
        disputadas, cheias de gente tirando foto do mesmo ângulo. Cagliari quebra essa regra — e é
        exatamente por isso que ela merece mais atenção do que recebe.
      </p>

      <h2>A Capital Que o Turismo Ainda Não Descobriu Direito</h2>
      <p>
        Quando o assunto é Sardenha, a conversa quase sempre pula direto pras praias — Costa
        Esmeralda, Cala Pira, as águas turquesa que já viraram clichê de cartão-postal. Cagliari, a
        capital da ilha, raramente entra nessa conversa. É tratada como escala: chega, pega o
        carro alugado, vai embora pra costa.
      </p>
      <p>
        Isso é um erro de quem nunca subiu a pé até o Castello, o bairro mais alto da cidade, e viu
        o sol se pôr sobre os telhados e o mar ao mesmo tempo. Ou nunca comeu peixe fresco comprado
        de manhã no Mercato di San Benedetto, o mercado que abastece a cidade inteira há gerações.
        Cagliari não compete com as praias do norte da ilha — ela oferece outra coisa, que praia
        nenhuma consegue: uma vida urbana genuína, com universidade, bairros históricos empilhados
        uns sobre os outros, e uma cena de cafés que ainda não foi filtrada pra Instagram.
      </p>

      <h2>Uma Cidade Que Se Vive em Camadas</h2>
      <p>
        Villanova, Marina, Castello, Stampace — os bairros do centro histórico de Cagliari não são
        apenas divisões administrativas, são camadas de tempo diferentes empilhadas na mesma
        colina. Ruas estreitas de pedra sobem e descem sem lógica aparente, cada esquina revela uma
        fachada de cor diferente, e a arquitetura conta uma história que vai do domínio espanhol
        até a reconstrução do pós-guerra, sem nunca virar museu — porque as pessoas ainda moram
        ali, ainda penduram roupa na janela, ainda gritam de uma varanda pra outra.
      </p>
      <p>
        É esse tipo de cidade viva — não montada pra visitante, apenas habitada por quem sempre
        morou ali — que rende a descoberta de verdade. Quem chega esperando só um ponto de partida
        pra praia sai surpreso descobrindo que poderia ter ficado ali a viagem inteira.
      </p>

      <h2>O Fim de Tarde Que Muda Tudo</h2>
      <p>
        Existe um horário em Cagliari que os moradores conhecem e os turistas de passagem quase
        sempre perdem: a última hora antes do sol se pôr, quando a luz fica dourada e baixa, e as
        fachadas coloridas do centro histórico parecem acender por dentro. É o momento em que a
        cidade para de ser cenário de foto e vira, por alguns minutos, exatamente o que sempre foi:
        um lugar bonito de verdade, sem precisar provar nada pra ninguém.
      </p>
    </ArticleLayout>
  );
}

export default ArticleCagliari;
