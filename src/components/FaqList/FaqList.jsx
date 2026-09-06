import './FaqList.css';

function FaqList({ items }) {
  return (
    <div className="sn-faq-list">
      {items.map((item) => (
        <div className="sn-faq-list__item" key={item.question}>
          <p className="sn-faq-list__question">{item.question}</p>
          <p className="sn-faq-list__answer">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FaqList;
