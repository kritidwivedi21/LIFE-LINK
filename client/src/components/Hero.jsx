// Inside components/Hero.jsx
function Hero({ onBtnClick }) {
  return (
    <div className="hero-container">
      <h1>Donate Blood, Save Lives ❤️</h1>
      <p>One donation can save up to three lives.</p>
      
      {/* Bind the passed prop to the onClick event here */}
      <button className="become-donor-btn" onClick={onBtnClick}>
        Become a Donor
      </button>
    </div>
  );
}

export default Hero;
