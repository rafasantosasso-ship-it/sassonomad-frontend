import GuideCta from '../../../components/GuideCta/GuideCta';

export const meta = {
  eyebrow: 'GUIDA DIGITALE',
  title: 'Guida Completa al Nomadismo Digitale',
  dek: 'Come costruire una vita con più libertà di movimento, senza rinunciare alla carriera — senza formule magiche.',
  alt: 'Millepiedi arrotolato a spirale, macro in primo piano',
  pageEyebrow: 'GUIDA DIGITALE',
  pageDek: 'Una guida su cosa significa davvero costruire una vita con più libertà di movimento — senza rinunciare alla carriera, senza formule magiche, senza romanticizzare quello che ha anche un prezzo.',
  productName: 'Guida Completa al Nomadismo Digitale',
  seoTitle: 'Guida Completa al Nomadismo Digitale: Come Iniziare Davvero | Sasso Nomad',
  seoDescription: 'Come rendere portatile la tua professione, scegliere il posto giusto e mettere alla prova la vita da nomade digitale in quattro fasi — con dati reali su Brasile, Italia e Thailandia.',
};

function Body({ offer }) {
  return (
    <>
      <p>
        Dentro trovi: cosa è cambiato davvero nel mondo del lavoro da remoto, con dati reali
        invece di impressioni; come trasformare la tua professione in qualcosa di portatile;
        quello che nessuno racconta su solitudine, disciplina e confini digitali; come scegliere
        il posto giusto per il momento giusto della tua vita; la logica con cui Brasile, Italia e
        Thailandia trattano chi lavora da remoto; e un percorso in quattro fasi per mettere alla
        prova questa vita prima di stravolgere la tua.
      </p>

      <p>Non si tratta di viaggiare sempre. Si tratta di avere meno vincoli di luogo.</p>

      <GuideCta variant="alt" title="Prendi la tua copia" buttonLabel="Acquista" offer={offer} />
    </>
  );
}

export default Body;
