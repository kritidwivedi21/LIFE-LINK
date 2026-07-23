import { useNavigate } from "react-router-dom"; // 1. Added navigation hook
import Hero from "../components/Hero";
import StatsCard from "../components/StatsCard";

function Home() {
  const navigate = useNavigate(); // 2. Initialized router navigation

  const handleBecomeDonor = () => {
    navigate("/register"); // 3. Forces redirect to /register page
  };

  return (
    <div className="home-page">
      {/* Passed the click handler function down to the Hero component */}
      <Hero onBtnClick={handleBecomeDonor} />

      <section className="why-section">
        <h2>Why Blood Donation Matters 🩸</h2>

        <p>
          Every blood donation can help save lives. LifeLink connects blood
          donors with people who need blood in a simple and efficient way.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">🩸</div>
            <h3>Donate Blood</h3>
            <p>
              Register yourself as a donor and become someone's hope.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">🔍</div>
            <h3>Find Blood</h3>
            <p>
              Quickly search for available donors by blood group.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">❤️</div>
            <h3>Save Lives</h3>
            <p>
              Your one donation can make a meaningful difference.
            </p>
          </div>
        </div>
      </section>

      <section className="blood-section">
        <h2>Available Blood Groups</h2>

        <p className="section-subtitle">
          Check the available blood stock in our system
        </p>

        <div className="stats-container">
          <StatsCard title="A+" units="15 Units" />
          <StatsCard title="B+" units="10 Units" />
          <StatsCard title="O+" units="20 Units" />
          <StatsCard title="AB+" units="8 Units" />
        </div>
      </section>

      <section className="cta-section">
        <h2>Be Someone's Reason to Live ❤️</h2>

        <p>
          A small act of kindness can become someone's second chance.
        </p>

        {/* Added working click event to the bottom duplicate button */}
        <button onClick={handleBecomeDonor}>Become a Donor</button>
      </section>
    </div>
  );
}

export default Home;
