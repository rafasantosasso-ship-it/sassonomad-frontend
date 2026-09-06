import ArticleLayout from '../ArticleLayout/ArticleLayout';
import useFavorites from '../../hooks/useFavorites';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import { getArticleBySlug } from '../../utils/articles';

const article = getArticleBySlug('chapada-diamantina');

function ArticleChapada() {
  const { isFavorite, toggleFavorite } = useFavorites();

  useDocumentMeta(
    'Chapada Diamantina: Trilhas, Poços e Lençóis — Um Guia Pra Explorar Sem Pressa | Sasso Nomad',
    'De vans compartilhadas a hospedagens de moradores locais: como explorar a Chapada Diamantina com calma, sem virar mais um turista de passagem.',
  );

  return (
    <ArticleLayout
      article={{ ...article, title: 'Chapada Diamantina: Trilhas, Poços e Lençóis' }}
      isSaved={isFavorite(`article:${article.slug}`)}
      onToggleSave={() => toggleFavorite(`article:${article.slug}`)}
    >
      <p>
        Em Lençóis, tem uma estátua dourada de um garimpeiro segurando uma bateia — a ferramenta
        que, séculos atrás, separava diamante de pedra comum nos rios da região. Ele está parado
        ali, na frente da casinha que virou memorial, olhando pra um ofício que já não existe
        mais. Mas o gesto — a paciência de peneirar, devagar, até encontrar o que importa — ainda
        descreve exatamente como se deve visitar esse lugar.
      </p>
      <p>
        A Chapada Diamantina não é destino pra quem quer riscar itens de uma lista. É destino pra
        quem topa demorar.
      </p>

      <h2>Uma Cidade Que Guarda o Ritmo do Garimpo</h2>
      <p>
        Lençóis foi fundada no auge da febre dos diamantes, e o centro histórico ainda carrega
        essa memória em cada casarão colonial e cada rua de paralelepípedo. Mas o que fica de
        fato, pra quem passa uns dias por ali, não é a arquitetura — é o ritmo. A cidade não
        corre. O comércio abre e fecha nos próprios horários, o rio corta a cidade sem pressa
        nenhuma, e a vida acontece nas varandas e nas rodas de conversa da praça, não atrás de
        balcões de agência de turismo.
      </p>
      <p>
        Essa é a base perfeita pra quem quer explorar a Chapada sem se sujeitar ao roteiro
        engessado dos pacotes de três dias.
      </p>

      <h2>Poços, Trilhas e o Tempo Que as Coisas Levam</h2>
      <p>
        O parque nacional que dá nome à região é enorme — e a maior parte dele nunca aparece nas
        primeiras páginas de busca. Os poços de água cristalina escondidos entre formações de
        arenito, as trilhas que sobem platôs rochosos até campos de flores endêmicas, as
        cachoeiras que só revelam sua força de verdade na estação certa — nada disso se
        experimenta com pressa.
      </p>
      <p>
        Ir de van entre os pontos turísticos é rápido, mas empobrece a experiência. Ir devagar —
        combinando transporte compartilhado com dias parados na mesma base, sem trocar de pousada
        toda noite — é o que transforma uma visita de fim de semana numa relação de verdade com o
        lugar.
      </p>

      <h2>Hospedagem de Quem Conhece o Terreno</h2>
      <p>
        A diferença entre uma Chapada de cartão-postal e uma Chapada vivida está, em grande
        parte, em onde você dorme. Pousadas de moradores locais — muitas delas tocadas por
        famílias que estão ali há gerações — entregam o que nenhuma rede hoteleira consegue:
        indicação certa da trilha do dia, do horário sem multidão, do restaurante que só quem mora
        ali sabe que existe.
      </p>
      <p>
        É esse tipo de conhecimento que separa quem passou pela Chapada de quem, de fato, a
        conheceu.
      </p>
    </ArticleLayout>
  );
}

export default ArticleChapada;
