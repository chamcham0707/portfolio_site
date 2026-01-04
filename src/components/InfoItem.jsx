import "./InfoItem.css";

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="InfoItem">
      <div className="info-icon">{icon}</div>

      <dl className="info-text">
        <dt className="info-label">{label}</dt>
        <dd className="info-value">{value}</dd>
      </dl>
    </div>
  );
};

export default InfoItem;
