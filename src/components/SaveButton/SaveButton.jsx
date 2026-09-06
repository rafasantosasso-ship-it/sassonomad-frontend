import './SaveButton.css';

function SaveButton({ isSaved, onToggle, size = 'card', label }) {
  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    onToggle();
  }

  return (
    <button
      type="button"
      className={`sn-save-button sn-save-button_${size}${isSaved ? ' sn-save-button_saved' : ''}`}
      onClick={handleClick}
      aria-pressed={isSaved}
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-7.5-4.6-10-9.2C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 18 11.8 15.5 16.4 12 21 12 21z" />
      </svg>
    </button>
  );
}

export default SaveButton;
