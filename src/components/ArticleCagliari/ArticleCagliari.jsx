import ArticleLayout from '../ArticleLayout/ArticleLayout';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import { getArticleBySlug } from '../../utils/articles';
import '../GuideCta/GuideCta.css';

const article = getArticleBySlug('cagliari');

function ArticleCagliari() {
  useDocumentMeta(
    'Cagliari: A Capital Que Também É Riviera | Sasso Nomad',
    'Vida universitária, praia a 15 minutos e uma cena de cafés que ainda não virou ponto turístico. Cagliari é a capital que escapou do próprio holofote — a favor de quem mora nela.',
  );

  return (
    <ArticleLayout
      article={{
        ...article,
        title: 'Cagliari: A Capital Que Também É Riviera',
        dek: 'Vida cosmopolita, praia a minutos do centro e o tipo de sorte geográfica que poucas capitais europeias têm.',
      }}
    >
      <p>
        Tem uma rua no centro histórico de Cagliari onde as fachadas mudam de cor a cada prédio —
        laranja queimado, ocre, um verde-oliva desbotado — como se a cidade tivesse decidido,
        séculos atrás, que uniformidade era coisa de lugar sem personalidade. De manhã cedo, antes
        do movimento começar, essa rua fica praticamente vazia. Só a luz baixa batendo nas
        paredes, um vaso de planta na varanda, e o silêncio que só existe em cidade que ainda não
        virou vitrine de si mesma.
      </p>
      <p>
        Cagliari é rara por um motivo específico: é capital de verdade — universidade, vida
        urbana, quatrocentos mil habitantes — e ainda assim tem praia de Riviera a poucos minutos
        de qualquer ponto do centro. A maioria das cidades escolhe um dos dois papéis. Cagliari
        joga os dois ao mesmo tempo, e ainda sobra fôlego.
      </p>

      <h2>Uma Capital em Ângulo Protegido</h2>
      <p>
        Quando o assunto é Sardenha, a conversa quase sempre pula direto pras praias do norte —
        Costa Esmeralda, o playground que virou sinônimo de luxo e superlotação em agosto.
        Cagliari fica de fora desse radar, e isso não é acidente de marketing: é geografia
        trabalhando a favor de quem mora ali. A capital ficou protegida do mesmo holofote que
        inflacionou o norte da ilha, e isso significa vida urbana real, aluguel que ainda faz
        sentido, e uma praia — a Poetto, oito quilômetros de areia a quinze minutos do centro —
        que os próprios moradores usam depois do expediente, não só turista de passagem.
      </p>
      <p>
        É esse ângulo que vale entender: Cagliari não está esperando ser descoberta. Está numa
        posição confortável que boa parte das capitais europeias perdeu há anos — e vai perder,
        se o mesmo holofote do norte da ilha decidir virar pra cá.
      </p>

      <h2>Onde a Vida Nômade Já Está Rodando</h2>
      <p>
        Cidade universitária puxa gente nova o ano inteiro, e isso criou uma cena de cafés que
        funciona de verdade pra quem trabalha de notebook: mesa com tomada, Wi-Fi que aguenta call
        de vídeo, e dono que não estranha alguém ficar três horas com o mesmo cappuccino. Bairros
        como Villanova e Marina concentram boa parte dessas opções, a pé de qualquer ponto do
        centro histórico.
      </p>
      <p>
        Pra quem precisa de mais estrutura que mesa de café, Cagliari já tem coworking de verdade
        em operação — sala de reunião, impressora, fibra óptica, e o tipo de ambiente onde cruzar
        com outro nômade trabalhando do lado é rotina, não coincidência. É a combinação que poucos
        destinos de praia conseguem entregar: infraestrutura séria de trabalho remoto, sem abrir
        mão da vida de cidade grande com clima de litoral.
      </p>

      <h2>O Fim de Tarde Que Muda Tudo</h2>
      <p>
        Existe um horário em Cagliari que os moradores conhecem e os turistas de passagem quase
        sempre perdem: a última hora antes do sol se pôr, quando a luz fica dourada e baixa, e as
        fachadas coloridas do centro histórico parecem acender por dentro. É o momento em que a
        cidade para de ser cenário de foto e vira, por alguns minutos, exatamente o que sempre
        foi: um lugar bonito de verdade, sem precisar provar nada pra ninguém.
      </p>

      <div className="sn-guide-cta sn-guide-cta_alt">
        <h3 className="sn-guide-cta__title">Onde Trabalhar em Cagliari — De Graça</h3>
        <p className="sn-guide-cta__text">
          Esse artigo só arranhou a superfície da cena de cafés e coworking da cidade. Preparamos
          um mini-guia gratuito com os endereços exatos: cafés com Wi-Fi confiável por bairro, os
          coworkings ativos e quanto custam, e o horário certo pra pegar mesa sem disputa.
        </p>
        <a
          className="sn-guide-cta__button"
          href="https://sassonomad.com/cagliari-cafes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baixar grátis: Cafés e Coworkings de Cagliari
        </a>
      </div>
    </ArticleLayout>
  );
}

export default ArticleCagliari;
