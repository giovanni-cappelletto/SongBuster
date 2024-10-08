import { useState, useEffect, useRef } from "react";
import html2pdf from "html2pdf.js";
import Button from "../components/Button.jsx";
import { getDataJSON } from "../utils/fetch.js";
import "./pdf.css";

const DownloadPDF = () => {
  const [data, setData] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    getDataJSON("getData", setData);
  }, []);

  const options = {
    filename: "futuri_acquisti.pdf",
    margin: [0.7, 1.25],
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 3, dpi: 192, letterRendering: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  const convertToPDF = () => {
    const content = contentRef.current;
    html2pdf().set(options).from(content).save();
  };

  return (
    <div className="table_container">
      <Button text="Scarica" onClick={convertToPDF} theme="dark">
        <span className="material-symbols-outlined">download</span>
      </Button>
      <table ref={contentRef}>
        <thead>
          <tr>
            <th>Album</th>
            <th>Artista</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a, b) => {
              const artistA = a.artist.toUpperCase();
              const artistB = b.artist.toUpperCase();

              if (artistA < artistB) {
                return -1;
              }

              if (artistA > artistB) {
                return 1;
              }

              // Same artist
              return a.year - b.year;
            })
            .map(({ title, artist, year, type, owned }, index) => {
              if (owned) {
                return;
              }

              return (
                <tr key={index}>
                  <td>
                    {title} ({year})
                  </td>
                  <td>{artist}</td>
                  <td>{type}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DownloadPDF;
