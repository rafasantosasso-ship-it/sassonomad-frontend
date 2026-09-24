import { CONTACT_EMAIL } from '../../utils/constants';

// Política de privacidade em PT (idioma-fonte).
function Body() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <>
      <h1>Política de privacidade</h1>
      <p className="sn-legal__updated">Última atualização: setembro de 2026</p>

      <h2>Quem cuida dos seus dados</h2>
      <p>
        A Sasso Nomad é um projeto de Rafael Sasso, com base na Itália. Para qualquer assunto
        sobre os seus dados, escreva para <a href={mailto}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>O que a gente guarda</h2>
      <ul>
        <li>Nome e e-mail que você informa no cadastro da comunidade;</li>
        <li>
          Data em que você aceitou receber os e-mails e em que confirmou o endereço, idioma e
          de qual parte do site veio o cadastro;
        </li>
        <li>
          Se você criar uma conta: a sua senha, guardada só em formato criptografado (nem nós
          conseguimos ler), e os guias e artigos que você salvar.
        </li>
      </ul>
      <p>Não compramos, vendemos nem alugamos listas de e-mail.</p>

      <h2>Para que usamos</h2>
      <ul>
        <li>Enviar o e-mail de boas-vindas e a newsletter da Sasso Nomad;</li>
        <li>Permitir que você entre no site e salve conteúdos;</li>
        <li>Enviar e-mails da sua conta, como o link para criar uma nova senha.</li>
      </ul>
      <p>
        A base legal é o seu consentimento (art. 6.1.a do GDPR) para a newsletter e a execução do
        serviço que você pediu (art. 6.1.b) para a conta.
      </p>

      <h2>Quem nos ajuda a operar</h2>
      <p>Usamos poucos fornecedores, só para o site funcionar:</p>
      <ul>
        <li>MongoDB Atlas: banco de dados onde ficam os cadastros;</li>
        <li>Resend: envio dos e-mails;</li>
        <li>Google Cloud: servidor onde o site e a API rodam.</li>
      </ul>
      <p>
        Alguns desses serviços podem processar dados fora da União Europeia, sempre com as
        garantias previstas pelo GDPR (como as cláusulas contratuais padrão da Comissão
        Europeia).
      </p>

      <h2>Por quanto tempo</h2>
      <p>
        Enquanto você estiver inscrito ou tiver conta. Cadastros que nunca confirmaram o e-mail
        podem ser apagados depois de alguns meses. Se você cancelar a inscrição, deixamos de
        enviar e-mails na hora.
      </p>

      <h2>Cookies e armazenamento no navegador</h2>
      <p>
        O site não usa cookies de publicidade. Quando você entra na sua conta, guardamos um
        código de acesso no armazenamento local do seu navegador para manter você conectado. Ao
        clicar em &quot;Sair&quot;, ele é apagado. Se você escolher um idioma no seletor do menu,
        guardamos essa escolha num cookie técnico (sn_lang) por 12 meses, só para abrir o site no
        idioma certo.
      </p>

      <h2>Seus direitos</h2>
      <p>
        Você pode, a qualquer momento, pedir acesso, correção, exclusão ou cópia dos seus dados,
        e retirar o consentimento. Para parar de receber e-mails, use o link &quot;Cancelar
        inscrição&quot; no rodapé de qualquer e-mail. Para o resto, escreva para
        {' '}
        <a href={mailto}>{CONTACT_EMAIL}</a>
        . Você também tem o direito de reclamar ao Garante per la protezione dei dati personali
        (Itália) ou à ANPD (Brasil).
      </p>
    </>
  );
}

export default Body;
