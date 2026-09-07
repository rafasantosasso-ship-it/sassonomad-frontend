import ArticleLayout from '../ArticleLayout/ArticleLayout';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import { getArticleBySlug } from '../../utils/articles';
import '../GuideCta/GuideCta.css';

const article = getArticleBySlug('nomadismo-digital');

function ArticleNomadismo() {
  useDocumentMeta(
    'Trabalhar de Qualquer Lugar: A Rotina Real de Um Nômade Digital | Sasso Nomad',
    'Nada de foto de laptop na praia. A rotina real de quem trabalha remoto viajando devagar: ferramentas, fusos horários e o que ninguém mostra no feed.',
  );

  return (
    <ArticleLayout
      article={{
        ...article,
        title: 'Trabalhar de Qualquer Lugar: A Rotina Real de Um Nômade Digital',
        dek: 'Ferramentas, fusos horários e como manter produtividade viajando em ritmo lento.',
      }}
    >
      <p>
        Tem um mural em Milão de um personagem esticando a cidade inteira como se fosse elástico —
        prédios, ruas, avião, tudo puxado por uma mão só, distorcido mas ainda de pé. É uma imagem
        exagerada, quase absurda. E ainda assim é a metáfora mais honesta que existe pra descrever
        o que é trabalhar remoto viajando devagar: você está esticando sua rotina pra caber num
        lugar novo, sem deixar ela quebrar.
      </p>
      <p>
        A internet vendeu a ideia de que nomadismo digital é notebook aberto numa cadeira de
        praia, coco na mão, cronograma inexistente. A realidade é bem menos fotogênica — e bem
        mais interessante.
      </p>
      <p>
        Também é bem menos nicho do que parece: são mais de 43 milhões de pessoas vivendo assim ao
        redor do mundo, número que deve passar de 80 milhões até o fim da década. A pergunta não é
        mais &ldquo;isso funciona de verdade?&rdquo; — já funciona, em escala. A pergunta é como
        fazer funcionar sem virar estatística de quem tenta seis meses e desiste.
      </p>

      <h2>O Mito do Trabalho Sem Estrutura</h2>
      <p>
        Quem começa a trabalhar remoto viajando descobre rápido que liberdade de local não é
        liberdade de rotina. Pelo contrário: quanto mais o cenário muda, mais a estrutura interna
        precisa ser sólida. Sem um horário fixo de escritório te ancorando, é fácil ou trabalhar
        demais (porque &ldquo;está tudo tão bonito lá fora que eu preciso aproveitar, então vou
        trabalhar até tarde pra compensar&rdquo;) ou trabalhar de menos (porque a praia, o café, a
        trilha, sempre ganham da entrega do dia).
      </p>
      <p>
        A rotina real de quem sustenta isso por meses, não semanas, é feita de blocos fixos de
        trabalho — geralmente pela manhã, antes do calor ou do movimento do dia — e limites claros
        de quando o notebook fecha de verdade.
      </p>

      <h2>Fuso Horário É o Verdadeiro Personagem da História</h2>
      <p>
        Ninguém fala sobre isso o suficiente: a variável que mais decide se o nomadismo digital
        funciona ou não é o fuso horário do seu cliente ou da sua equipe, não a beleza do destino.
        Um destino perfeito com fuso horário incompatível vira uma prisão de notificações
        chegando de madrugada. Um destino mais simples, mas alinhado com o horário de quem você
        atende, vira liberdade de verdade.
      </p>
      <p>
        Antes de escolher o próximo lugar, a pergunta certa não é &ldquo;é bonito?&rdquo; — é
        &ldquo;que horas são aí quando são nove da manhã pro meu cliente?&rdquo;.
      </p>

      <h2>Ferramentas Não Substituem Disciplina</h2>
      <p>
        Notion, Loom, um bom calendário com blocos de foco marcados — tudo isso ajuda. Mas nenhuma
        ferramenta resolve o que só disciplina resolve: decidir, todo santo dia, que o trabalho
        acontece antes da praia, não depois. Quem trabalha remoto de verdade — não só posta sobre
        isso — sabe que a real conquista não é onde você está. É conseguir, de qualquer lugar,
        entregar o que prometeu.
      </p>
      <p>
        É esse equilíbrio — não o cenário — que faz a diferença entre um nômade digital que dura
        seis meses e um que dura seis anos.
      </p>

      <div className="sn-guide-cta sn-guide-cta_alt">
        <h3 className="sn-guide-cta__title">O Que Este Artigo Não Te Contou</h3>
        <p className="sn-guide-cta__text">
          Qual ferramenta substitui qual planilha. Como montar o bloco de horário quando seu
          cliente está em três fusos diferentes ao mesmo tempo. O checklist exato de documentos,
          seguro e backup de conexão antes de embarcar. Esse tipo de detalhe prático não cabe numa
          reflexão — cabe num manual.
        </p>
        <p className="sn-guide-cta__text">
          O <strong style={{ color: 'var(--color-text-light)' }}>Guia Completo de Nomadismo
          Digital</strong> é esse manual: checklists, ferramentas e roteiros testados por quem já
          fez a mudança de verdade, dos dois territórios da Sassonomad ao orçamento mensal.
        </p>
        <a
          className="sn-guide-cta__button"
          href="https://sassonomad.com/nomadismo-digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conhecer o Guia Completo de Nomadismo Digital
        </a>
      </div>
    </ArticleLayout>
  );
}

export default ArticleNomadismo;
