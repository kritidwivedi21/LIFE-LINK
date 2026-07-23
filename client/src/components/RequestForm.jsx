import { useState } from "react";
import axios from "axios";

function RequestForm() {
  const [formData, setFormData] = useState({
    patient_name: "",
    blood_group: "",
    units_required: "",
    hospital: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/requests/create",
        formData
      );

      alert(response.data.message);

      setFormData({
        patient_name: "",
        blood_group: "",
        units_required: "",
        hospital: "",
        contact: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error creating blood request");
    }
  };

  return (
    <div className="form-container">
      <h2>Request Blood</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patient_name"
          placeholder="Patient Name"
          value={formData.patient_name}
          onChange={handleChange}
          required
        />

        <select
          name="blood_group"
          value={formData.blood_group}
          onChange={handleChange}
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
          name="units_required"
          placeholder="Units Required"
          min="1"
          value={formData.units_required}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="hospital"
          placeholder="Hospital Name"
          value={formData.hospital}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestForm;