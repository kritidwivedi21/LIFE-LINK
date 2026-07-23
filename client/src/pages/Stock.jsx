import BloodStockForm from "../components/BloodStockForm";
import BloodTable from "../components/BloodTable";

function Stock() {
  return (
    <div className="stock-page">
      <h1>Blood Stock Management</h1>

      <BloodStockForm />

      <BloodTable />
    </div>
  );
}

export default Stock;