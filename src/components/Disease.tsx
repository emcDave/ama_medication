
import "./table.css"
const Disease = () => {
  const diseases = [
    {
      id: 1,
      name: "Diabetes mellitus",
      Description:
        "Diabetes mellitus is a chronic condition that affects the way the body processes blood sugar (glucose).",
      "Year of Diagnosis": "2010",
      Years: "15 years",
      Remarks: "None",
    },
    {
      id: 2,
      name: "Chronic Kidney Disease",
      Description:
        "Chronic Kidney Disease is a condition characterized by the gradual loss of kidney function over time.",
      "Year of Diagnosis": "2022",
      Years: "5 years",
      Remarks: "None",
    },
    {
      id: 3,
      name: "Hypotension",
      Description:
        "Hypotension is abnormally low blood pressure that can lead to dizziness or fainting.",
      "Year of Diagnosis": "2024",
      Years: "1 year",
      Remarks: "None",
    },
    {
      id: 4,
      name: "Coronary Artery Disease",
      Description:
        "Coronary Artery Disease involves the narrowing or blockage of the coronary arteries, often due to plaque buildup.",
      "Year of Diagnosis": "December 2024",
      Years: "Less than a year",
      Remarks:
        "Had Coronary Artery Bypass Grafting Surgery on January 16, 2025.",
    },
    {
      id: 5,
      name: "Multi Drug Resistance",
      Description:
        "Multi Drug Resistance occurs when bacteria or viruses become resistant to multiple drugs often used to treat them.",
      "Year of Diagnosis": "January 2025",
      Years: "Less than a year",
      Remarks: "None",
    },
  ];

  return (
    <div>
      <h1 className="centered-heading">🦠 Disease Table 🦠</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Year of Diagnosis</th>
            <th>Years</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {diseases.map((disease) => (
            <tr key={disease.id}>
              <td>{disease.name}</td>
              <td>{disease.Description}</td>
              <td>{disease["Year of Diagnosis"]}</td>
              <td>{disease.Years}</td>
              <td>{disease.Remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Disease;
