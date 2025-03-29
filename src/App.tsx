import { Table } from "./components/Table"
import { columns } from "./components/columns"
import { Medication } from "./components/medication"
import Disease from "./components/Disease";
import "./App.css";
import "./MatrixTheme.css"
import Footer from "./components/Footer";
import { useState ,useEffect} from "react";
function App() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create an async function inside useEffect
    const fetchMedications = async () => {
      try {
        const response = await fetch("./medicine.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Medication[] = await response.json();
        setMedications(data);
      } catch (err) {
        console.error("Error fetching medications:", err);
        setError("Failed to fetch medications");
      }
    };

    fetchMedications();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!medications.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Disease></Disease>
      <h1 className="centered-heading">💊 Medication Table 💊</h1>
      <Table columns={columns} data={medications} />
      <Footer></Footer>
    </div>
  );
}


export default App
