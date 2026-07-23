function StatsCard({ title, units }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{units}</p>
    </div>
  );
}

export default StatsCard;