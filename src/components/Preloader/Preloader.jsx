import './Preloader.css';

function Preloader({ inline = false }) {
  return (
    <div className={inline ? 'sn-preloader sn-preloader_inline' : 'sn-preloader'}>
      <div className="sn-preloader__spinner" />
    </div>
  );
}

export default Preloader;
