import { useEffect, useState } from "react";
import axios from "axios";

function BloodTable() {
  const [bloodStock, setBloodStock] = useState([]);

  useEffect(() => {
    const getBloodStock = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/stock"
        );

        setBloodStock(response.data);
      } catch (error) {
        console.error("Error fetching blood stock:", error);
      }
    };

    getBloodStock();
  }, []);

  return (
    <div className="blood-table">
      <h2>Available Blood Stock</h2>

      <table>
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Available Units</th>
          </tr>
        </thead>

        <tbody>
          {bloodStock.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.blood_group}</td>
              <td>{stock.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BloodTable;