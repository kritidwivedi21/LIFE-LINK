import { useState } from "react";
import axios from "axios";

function Search() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false); // Ye track karega ki user ne search kiya hai ya nahi

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearched(true);

    try {
      // Dono naming formats bheje hain taaki backend agar camelCase ya underscore kuch bhi use kare, data aa jaye
      const response = await axios.get(
        "http://localhost:5000/api/donors/search",
        {
          params: {
            bloodGroup: bloodGroup, // CamelCase check for backend routes
            blood_group: bloodGroup, // Underscore safe-fallback
          },
        }
      );

      setResults(response.data);
    } catch (error) {
      console.error(error);
      alert("Error searching blood");
    }
  };

  return (
    <div className="search-page">
      <h1>Search Blood</h1>

      <form onSubmit={handleSearch}>
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <button type="submit">Search</button>
      </form>

      <div className="search-results" style={{ marginTop: "30px" }}>
        {results.length > 0 ? (
          results.map((donor) => (
            // FIX: MongoDB hamesha unique key ke liye '_id' deta hai na ki 'id'
            <div key={donor._id || donor.id} className="card" style={{ textAlign: "left", width: "100%", maxWidth: "400px", margin: "15px auto" }}>
              <h3>{donor.name}</h3>
              {/* Fallback code taaki agar db me schema bloodGroup ho ya blood_group dono chal sakein */}
              <p><strong>Blood Group:</strong> {donor.bloodGroup || donor.blood_group}</p>
              {donor.age && <p><strong>Age:</strong> {donor.age}</p>}
              {donor.gender && <p><strong>Gender:</strong> {donor.gender}</p>}
              {donor.phone && <p><strong>Phone:</strong> {donor.phone}</p>}
              {donor.email && <p><strong>Email:</strong> {donor.email}</p>}
              {donor.address && <p><strong>Address:</strong> {donor.address}</p>}
            </div>
          ))
        ) : (
          // UI Enhancement: "No donors found" tabhi dikhega jab user search hit kar chuka ho
          searched && <p style={{ color: "#666", marginTop: "20px" }}>No donors found matching this criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
