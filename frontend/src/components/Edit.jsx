import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { getDataJSON, setDataJSON } from "../utils/fetch.js";
import Markdown from "react-markdown";

const Edit = ({ openEditMode, setOpenEditMode }) => {
  const [currentTab, setCurrentTab] = useState("data.json");
  const [data, setData] = useState([]);
  const [legenda, setLegenda] = useState("");
  const [currentData, setCurrentData] = useState("");

  useEffect(() => {
    getDataJSON("getData", setData);
    getDataJSON("legenda", setLegenda);
  }, []);

  const handleClick = (e) => {
    setCurrentTab(e.target.textContent);
  };

  return (
    <div className="edit_container" data-active={openEditMode}>
      <header className="edit_header">
        <div className="edit_content">
          <h2 className="edit_title">Modifica il catalogo</h2>
          <p className="edit_desc">
            Modifica il catalogo utilizzando la legenda. Una volta finito,
            clicca il tasto "Aggiorna".
          </p>
        </div>

        <div className="edit_btns">
          <Button
            text="Annulla"
            className="discard_btn"
            onClick={() => {
              setOpenEditMode(!openEditMode);
            }}
          />
          <Button
            text="Aggiorna"
            className="update_btn"
            onClick={() => {
              (async () => {
                await setDataJSON("editData", currentData);
                window.location.href = "/";
              })();
            }}
          />
        </div>
      </header>

      <div className="file_explorer">
        <ul>
          <li
            className={`file ${currentTab === "data.json" ? "active" : ""}`}
            onClick={handleClick}
          >
            data.json
          </li>
          <li
            className={`file ${currentTab === "Legenda" ? "active" : ""}`}
            onClick={handleClick}
          >
            Legenda
          </li>
        </ul>
      </div>

      <div className="file_editor">
        {currentTab === "data.json" && (
          <div
            contentEditable="true"
            onInput={(e) => setCurrentData(e.target.textContent)}
          >
            {data.map(({ title, artist, year, type, url, owned }, index) => {
              return (
                <div key={index}>
                  {index === 0 && "["}
                  &#123; <br />
                  <span className="indent">"title": "{title}",</span> <br />
                  <span className="indent">"artist": "{artist}",</span> <br />
                  <span className="indent">"year": {year},</span> <br />
                  <span className="indent">"type": "{type}",</span> <br />
                  <span className="indent">"url": "{url}",</span> <br />
                  <span className="indent">
                    "owned": {owned ? "true" : "false"}
                  </span>
                  <br />
                  &#125;{index !== data.length - 1 ? "," : "]"}
                </div>
              );
            })}
          </div>
        )}

        {currentTab === "Legenda" && (
          <Markdown className="markdown">{legenda}</Markdown>
        )}
      </div>
    </div>
  );
};

export default Edit;
