import ArticleLayout from '../ArticleLayout/ArticleLayout';
import useFavorites from '../../hooks/useFavorites';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import { getArticleBySlug } from '../../utils/articles';

const article = getArticleBySlug('ireland');

function ArticleIreland() {
  const { isFavorite, toggleFavorite } = useFavorites();

  useDocumentMeta(
    'Irlanda Fora do Óbvio: Vida de Nômade Além do Centro Caótico de Dublin | Sasso Nomad',
    'Dublin é "Silicon Docks" — mas a vida de quem trabalha remoto por lá acontece longe do centro, em vilarejos costeiros a 25 minutos de trem.',
  );

  return (
    <ArticleLayout
      article={{
        ...article,
        title: 'Irlanda Fora do Óbvio: Vida de Nômade Além do Centro Caótico de Dublin',
      }}
      isSaved={isFavorite(`article:${article.slug}`)}
      onToggleSave={() => toggleFavorite(`article:${article.slug}`)}
    >
      <p>
        Tem um telescópio azul de observação plantado numa esquina de Howth, apontado pra baía de
        Dublin. É o tipo de objeto que parece bobo até você realmente parar e olhar por ele —
        porque do outro lado da lente está uma cidade inteira, comprimida no horizonte, parecendo
        pequena o suficiente pra caber numa moeda. E é exatamente essa distância — física e mental
        — que muda tudo sobre viver e trabalhar na Irlanda.
      </p>
      <p>
        Porque Dublin, vista de perto, é caos. Trânsito, aluguel puxado, ruas cheias de gente de
        terno andando rápido demais. Mas Dublin vista de Howth — uma vila de pescadores encravada
        numa península, a meia hora de trem do centro — é outra cidade completamente.
      </p>

      <h2>A Cidade Que os Nômades Digitais Ainda Não Descobriram Direito</h2>
      <p>
        Enquanto Lisboa e Barcelona vivem lotadas de conteúdo sobre nomadismo digital, Dublin
        carrega um apelido que poucos fora do mercado de tecnologia conhecem: Silicon Docks. É
        ali, na zona portuária reformada da cidade, que Google, Meta, LinkedIn, Salesforce e
        Stripe mantêm suas sedes europeias — uma concentração de tecnologia rara em qualquer lugar
        do mundo, falando inglês, dentro da União Europeia.
      </p>
      <p>
        Isso não significa emprego fácil ou vaga full remote garantida — a realidade de 2026 é que
        a maioria dessas empresas trabalha em modelo híbrido, dois ou três dias de escritório por
        semana, com remoto integral reservado a posições sênior. Mas significa algo mais sutil e
        mais interessante pra quem já trabalha remoto de fora: Dublin é um dos poucos lugares da
        Europa onde a economia inteira ao redor foi desenhada pensando em gente de tecnologia —
        cowork em cada esquina, comunidade internacional já estabelecida, inglês nativo sem
        esforço de adaptação.
      </p>

      <h2>Fora do Centro, Outra Velocidade</h2>
      <p>
        A virada de chave, porém, não está no centro. Está no litoral. O trem elétrico que corta a
        cidade à beira-mar — o DART — liga vilarejos como Howth, Malahide, Dalkey e Killiney ao
        centro em vinte a quarenta minutos, cruzando por cima do trânsito que trava quem depende
        de carro ou ônibus.
      </p>
      <p>
        Howth, especificamente, é o tipo de lugar que parece geograficamente impossível de estar
        tão perto de uma capital europeia: penhascos, porto de pesca ativo, trilha costeira
        circular que dá a volta na península inteira, e um ritmo de vila que não existe em nenhum
        bairro central de Dublin. Quem mora ali não está fugindo da cidade — está escolhendo viver
        perto dela sem pagar o preço (literal e figurado) de estar dentro dela.
      </p>

      <h2>O Que Isso Significa Pra Quem Trabalha Remoto</h2>
      <p>
        A lição que Howth ensina é maior do que a própria Irlanda: a melhor jogada de quem trabalha
        remoto muitas vezes não é escolher entre cidade grande ou interior tranquilo — é encontrar
        o ponto exato onde os dois estão a meia hora de trem um do outro. Dublin tem a
        infraestrutura, a comunidade internacional e a densidade de tecnologia que sustentam uma
        carreira remota séria. A costa ao redor tem o que essa mesma carreira precisa pra não virar
        só trabalho: ar do mar, silêncio, e a possibilidade de fechar o notebook e estar na trilha
        em cinco minutos.
      </p>
      <p>
        Esse equilíbrio — ainda pouco explorado por quem fala de nomadismo digital em português —
        é o motivo pelo qual a Irlanda entra agora no radar da Sassonomad.
      </p>
    </ArticleLayout>
  );
}

export default ArticleIreland;
