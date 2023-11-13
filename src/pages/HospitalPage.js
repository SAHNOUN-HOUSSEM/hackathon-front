import Navbar from "../components/Hospital/Navbar";
import Form from "../components/Hospital/form";
import "../components/Hospital/Hospital.css";
export default function HospitalPage() {
  return (
    <div
      className="hospital-container"
      style={{ backgroundImage: "url(/pictures/background.png)" }}
    >
      <Navbar />
      <Form />
    </div>
  );
}
