import './Preloader.css';

function Preloader({ inline = false }) {
  return (
    <div className={inline ? 'sn-preloader sn-preloader--inline' : 'sn-preloader'}>
      <div className="sn-preloader__spinner" />
    </div>
  );
}

export default Preloader;
