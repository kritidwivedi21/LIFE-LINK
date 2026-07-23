import { useState } from "react";
import axios from "axios";

function BloodStockForm() {
const [bloodGroup, setBloodGroup] = useState("");
const [units, setUnits] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const response = await axios.post(
    "http://localhost:5000/api/stock/add",
    {
      blood_group: bloodGroup,
      units: units
    }
  );

  alert(response.data.message);

  setBloodGroup("");
  setUnits("");

} catch (error) {
  console.error("FULL ERROR:", error);

  alert(
    error.response?.data?.message ||
    error.message ||
    "Error adding blood stock"
  );
}

};

return ( <div className="form-container"> <h2>Add Blood Stock</h2>

  <form onSubmit={handleSubmit}>

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

    <input
      type="number"
      placeholder="Units"
      min="1"
      value={units}
      onChange={(e) => setUnits(e.target.value)}
      required
    />

    <button type="submit">
      Add Stock
    </button>

  </form>
</div>

);
}

export default BloodStockForm;
