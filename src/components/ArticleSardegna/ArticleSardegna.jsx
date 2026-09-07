import { Link } from 'react-router-dom';
import ArticleLayout from '../ArticleLayout/ArticleLayout';
import useFavorites from '../../hooks/useFavorites';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import { getArticleBySlug } from '../../utils/articles';
import '../GuideCta/GuideCta.css';

const article = getArticleBySlug('sardegna');

function ArticleSardegna() {
  const { isFavorite, toggleFavorite } = useFavorites();

  useDocumentMeta(
    'Sardegna: Vilarejos de Pedra e Mar Turquesa — Um Roteiro Lento pelo Sul da Ilha | Sasso Nomad',
    'Longe das rotas turísticas óbvias: vilarejos de granito rosa, torres que guardam o mar e uma Sardegna que só se revela pra quem fica.',
  );

  return (
    <ArticleLayout
      article={{
        ...article,
        title: 'Sardegna: Vilarejos de Pedra e Mar Turquesa',
        dek: 'Um roteiro lento pela costa e pelo interior, longe das rotas turísticas óbvias.',
      }}
      isSaved={isFavorite(`article:${article.slug}`)}
      onToggleSave={() => toggleFavorite(`article:${article.slug}`)}
    >
      <p>
        Tem uma torre no extremo sul da Sardenha que muda de cor com a luz do dia. De manhã, é só
        pedra clara contra o céu. À noite, alguém acende um foco e ela vira magenta contra o azul
        profundo do crepúsculo — vigiando uma baía que já viu impérios inteiros passarem por ela
        sem nunca dominá-la de verdade.
      </p>
      <p>
        Porque antes de qualquer invasor, antes de qualquer turista, existiu um povo que a
        arqueologia ainda não conseguiu explicar direito. Mais de três mil anos atrás, os
        nurágicos ergueram sete mil torres de pedra por toda a ilha — sem argamassa, sem escrita,
        sem deixar registro de como se chamavam. Só as torres ficaram, espalhadas pelo interior
        como perguntas sem resposta. Depois vieram os fenícios, os romanos, os espanhóis — que
        construíram as torres de vigia costeiras pra avistar invasores vindos do mar, a mesma
        torre que hoje vira ponto de encontro ao entardecer. Depois veio o turismo de luxo, que
        transformou o norte da ilha em playground de milionário. Depois veio o turismo de massa,
        que lotou as praias mais fotografadas em julho e agosto. E agora, silenciosamente, começam
        a chegar os nômades digitais — a camada mais recente de uma ilha que sempre soube absorver
        quem chega sem deixar de ser o que é.
      </p>

      <h2>A Sardenha Que Ninguém Mostra na Primeira Busca no Google</h2>
      <p>
        A ilha que aparece nas listas de &ldquo;praias mais bonitas do Mediterrâneo&rdquo; é real
        — mas é só a superfície. Por trás da água turquesa que já virou clichê de cartão-postal,
        existe uma rede de vilarejos de pedra, torres esquecidas e uma vida local que segue seu
        próprio ritmo, alheia ao calendário do turismo de massa.
      </p>
      <p>
        E existe algo mais interessante ainda acontecendo no interior da ilha: comunidades
        inteiras lutando contra o próprio esvaziamento, e decidindo que a resposta pode ser
        receber gente de fora. Um vilarejo de pouco mais de mil habitantes no coração da Barbagia
        virou notícia internacional ao vender casas abandonadas por um euro e lançar um programa
        de hospedagem simbólica pra quem trabalha remoto. O resultado: milhares de pedidos vindos
        de todos os continentes — e ele não está mais sozinho nisso. Não é caridade — é
        sobrevivência inteligente. E é a prova de que, pra alguns lugares na Sardenha, o nômade
        digital não é ameaça à autenticidade local. É quem ajuda a mantê-la viva. Quais vilarejos
        exatamente, e o que é preciso pra entrar nessa fila sendo estrangeiro, é outra história —
        mas vale saber que ela existe.
      </p>

      <h2>A Sardenha Que Fica Depois do Pôr do Sol</h2>
      <p>
        A maioria dos visitantes trata a Sardenha como cenário de fotografia: chega de dia,
        fotografa a água, vai embora antes que a luz mude. Mas é depois do pôr do sol que a ilha
        mostra outra cara. As torres de vigia espanholas ganham iluminação e viram pontos de
        encontro silenciosos. Não tem multidão. Tem o som do mar, uma bússola de metal cravada no
        chão apontando pros quatro cantos do horizonte, e a sensação estranhamente rara de estar
        em um lugar bonito sem estar sendo processado por ele.
      </p>
      <p>
        É nesse horário que o conceito de slow travel deixa de ser teoria. Não importa se você
        está numa van estacionada à beira de uma praia deserta ou numa casinha de pedra alugada
        por um mês num vilarejo do interior — o efeito é o mesmo. Os dias param de ser medidos em
        pontos turísticos riscados de uma lista e passam a ser medidos em luz: a hora que o sol
        nasce atrás da serra, a hora que o calor aperta e todo mundo desaparece pra dentro de
        casa, a hora que a temperatura cai e a vida volta pra rua. É esse tipo de momento que
        separa quem visita a Sardenha de quem a vive, mesmo que por um mês.
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
        É nesses vilarejos que a Sardenha entrega o que o litoral badalado não consegue: tempo —
        e acolhimento. O povo sardo carrega uma reputação de desconfiar do forasteiro, mas quem
        realmente fica descobre o oposto: uma hospitalidade que não precisa de sorriso
        performático, só de tempo pra se provar genuína. O padeiro aprende seu nome na segunda
        visita, não na primeira. O vizinho oferece azeite da própria produção sem que ninguém
        peça. E o visitante que decide ficar mais do que uma noite descobre rápido que aqui,
        &ldquo;fazer nada&rdquo; é uma atividade completa.
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
        badalado, com vilarejos que estão literalmente convidando gente de fora pra ficar — é
        exatamente onde essa recompensa ainda não tem fila de espera.
      </p>

      <div className="sn-guide-cta sn-guide-cta_alt">
        <h3 className="sn-guide-cta__title">O Que Este Artigo Não Te Contou</h3>
        <p className="sn-guide-cta__text">
          Qual vilarejo específico ainda está com casas a um euro disponíveis. Qual bairro de
          Cagliari tem a fibra mais rápida sem pagar preço de turista. Que horas exatamente o
          padeiro tira o pão do forno em cada cidade deste roteiro. Esse tipo de detalhe não cabe
          num artigo — cabe em quem já morou lá o suficiente pra saber.
        </p>
        <p className="sn-guide-cta__text">
          O <strong style={{ color: 'var(--color-text-light)' }}>Guia Viver no Sul da Sardenha
          </strong> é isso: o mapa completo de quem transformou curiosidade em mudança de vida,
          com os nomes, os preços e os horários que este texto só insinuou.
        </p>
        <Link className="sn-guide-cta__button" to="/guias/sardegna">
          Conhecer o Guia Viver no Sul da Sardenha
        </Link>
        <span className="sn-guide-cta__price">EUR 19</span>
      </div>
    </ArticleLayout>
  );
}

export default ArticleSardegna;
