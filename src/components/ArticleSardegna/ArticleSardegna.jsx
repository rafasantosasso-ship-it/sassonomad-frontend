import ArticleLayout from '../ArticleLayout/ArticleLayout';
import useFavorites from '../../hooks/useFavorites';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import { getArticleBySlug } from '../../utils/articles';

const article = getArticleBySlug('sardegna');

function ArticleSardegna() {
  const { isFavorite, toggleFavorite } = useFavorites();

  useDocumentMeta(
    'Sardegna: Vilarejos de Pedra e Mar Turquesa — Um Roteiro Lento pelo Sul da Ilha | Sasso Nomad',
    'Longe das rotas turísticas óbvias: vilarejos de granito rosa, torres que guardam o mar e uma Sardegna que só se revela pra quem fica.',
  );

  return (
    <ArticleLayout
      article={{ ...article, title: 'Sardegna: Vilarejos de Pedra e Mar Turquesa' }}
      isSaved={isFavorite(`article:${article.slug}`)}
      onToggleSave={() => toggleFavorite(`article:${article.slug}`)}
    >
      <p>
        Tem uma torre no extremo sul da Sardenha que muda de cor com a luz do dia. De manhã, é só
        pedra clara contra o céu. À noite, alguém acende um foco e ela vira magenta contra o azul
        profundo do crepúsculo — vigiando uma baía que já viu piratas berberes, pescadores e,
        agora, um punhado de gente que decidiu ficar mais do que o fim de semana.
      </p>
      <p>
        Essa é a Sardenha que ninguém mostra na primeira busca no Google. A ilha que aparece nas
        listas de &ldquo;praias mais bonitas do Mediterrâneo&rdquo; é real — mas é só a superfície.
        Por trás da água turquesa que já virou clichê de cartão-postal, existe uma rede de
        vilarejos de pedra, torres de vigia esquecidas e uma vida local que segue seu próprio
        ritmo, alheia ao calendário do turismo de massa.
      </p>

      <h2>A Sardenha Que Fica Depois do Pôr do Sol</h2>
      <p>
        A maioria dos visitantes trata a Sardenha como cenário de fotografia: chega de dia,
        fotografa a água, vai embora antes que a luz mude. Mas é depois do pôr do sol que a ilha
        mostra outra cara. As torres de vigia espanholas — construídas séculos atrás pra avistar
        invasores vindos do mar — ganham iluminação e viram pontos de encontro silenciosos. Não
        tem multidão. Tem o som do mar, uma bússola de metal cravada no chão apontando pros
        quatro cantos do horizonte, e a sensação estranhamente rara de estar em um lugar bonito
        sem estar sendo processado por ele.
      </p>
      <p>
        É esse tipo de momento que separa quem visita a Sardenha de quem a vive, mesmo que por um
        mês.
      </p>

      <h2>Vilarejos Que o Turismo Ainda Não Achou</h2>
      <p>
        Longe da costa badalada, o interior sardo guarda vilarejos inteiros construídos em
        granito rosa e cinza — o tipo de arquitetura que parece ter crescido direto da montanha,
        não sido erguida sobre ela. Ruas estreitas, praças pequenas o suficiente pra caber numa
        única conversa, e uma vida cotidiana que continua acontecendo exatamente como antes de
        qualquer guia de viagem mencionar o lugar.
      </p>
      <p>
        É nesses vilarejos que a Sardenha entrega o que o litoral badalado não consegue: tempo.
        Ninguém está com pressa. O padeiro conhece o nome dos clientes. E o visitante que decide
        ficar mais do que uma noite descobre rápido que aqui, &ldquo;fazer nada&rdquo; é uma
        atividade completa.
      </p>

      <h2>Por Que Ficar Muda Tudo</h2>
      <p>
        Existe uma diferença enorme entre passar por um lugar e morar nele — mesmo que por poucas
        semanas. Quem só visita coleciona fotos. Quem fica aprende os horários certos pra evitar o
        sol do meio-dia, descobre qual padaria tem o pão ainda quente às sete da manhã, e entende
        por que os sardos insistem num almoço que dura o dobro do que qualquer turista está
        acostumado.
      </p>
      <p>
        A Sardenha recompensa quem desacelera. E o sul da ilha — menos disputado que o norte
        badalado — é exatamente onde essa recompensa ainda não tem fila de espera.
      </p>
    </ArticleLayout>
  );
}

export default ArticleSardegna;
