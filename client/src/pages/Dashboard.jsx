import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/donors")
      .then((res) => {
        setDonors(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ textAlignment: "center", padding: "50px" }}>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Donor Dashboard</h1>
      <div style={{ margin: "20px auto", maxWidth: "900px" }}>
        {donors.length > 0 ? (
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor) => (
                <tr key={donor._id || donor.id}>
                  <td>{donor.full_name || donor.name}</td>
                  <td>{donor.blood_group}</td>
                  <td>{donor.city || "Not Provided"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlignment: "center" }}>No records found.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
