import { useState } from "react";
import "./FileBtn.css";
import { ClipLoader } from "react-spinners";
import testImage from "./assets/images/test.png";

const FileBtn = () => {
  const [selectedFileOne, setSelectedFileOne] = useState<File | null>(null);
  const [selectedFileTwo, setSelectedFileTwo] = useState<File | null>(null);
  const [optimizer, setOptimizer] = useState<string>("SGD");
  const [errorMessege, setErrorMessege] = useState("");
  const [loading, setLoading] = useState(false); // Börja som inte laddande
  const [imageUrl, setImageUrl] = useState<string | null>(null); // För att visa bild
  const [result, setResult] = useState("");


  const handleFileChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFileOne(event.target.files[0]);
    }
  };

  const handleFileChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFileTwo(event.target.files[0]);
    }
  };

  const saveFiles = () => {
    if (!selectedFileOne && !selectedFileTwo) {
      setErrorMessege("Please select both files!");
      return;
    }

    setErrorMessege(""); // Rensa tidigare felmeddelande
    setLoading(true); // Starta laddningen

    // Simulera laddning (t.ex. API-anrop)
    setTimeout(() => {
      setLoading(false); // Avsluta laddningen
      setImageUrl(selectedFileOne ? URL.createObjectURL(selectedFileOne) : null); // Visa bild från vald fil
      setResult("Files processed successfully!"); // Bekräftelse
    }, 3000); // Simulerar en 3 sekunders fördröjning
  };

  return (
    <>
    <div className="row-container">
    <div className="fil-btn-container">
        <section>
          <h3>Global model</h3>
          <input
            placeholder="Select file"
            type="file"
            accept="image/*"
            id="contained-button-file"
            onChange={handleFileChangeOne}
          />
        </section>
        <section>
          <h3>Client data</h3>
          <input
            placeholder="Select file"
            type="file"
            accept="image/*"
            id="icon-button-file"
            onChange={handleFileChangeTwo}
          />
        </section>
        <section>
          <label className="label" htmlFor="optimizer">Optimizer</label>
          <select
            name="optimizer"
            id="optimizer"
            value={optimizer}
            onChange={(e) => setOptimizer(e.target.value)}
          >
            <option value="SGD">SGD</option>
            <option value="Adam">Adam</option>
          </select>
        </section>
        <button className="reverse-engineer-btn" onClick={saveFiles}>
          Reverse engineer
        </button>
      </div>
      {errorMessege && <p>{errorMessege}</p>}
      <section className="result-container">
      <p>{result}</p>
        {loading ? (
          <ClipLoader color="#123abc" loading={loading} size={50} />
        ) : (
          imageUrl && <img src={testImage} alt="Selected file" />
        )}
      </section>

    </div>
      
    </>
  );
};

export default FileBtn;
