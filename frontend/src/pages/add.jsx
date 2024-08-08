import { useState } from "react";
import Input from "../components/Input.jsx";
import Dropdown from "../components/Dropdown.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Code from "../components/Code.jsx";
import Edit from "../components/Edit.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDataJSON } from "../utils/fetch.js";
import "./add.css";

const Add = () => {
  const [openEditMode, setOpenEditMode] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    title: "Titolo",
    artist: "Unknown",
    year: new Date().getFullYear(),
    type: "CD",
    url: "https://t3.ftcdn.net/jpg/01/46/91/16/360_F_146911624_MpozeTIQOoTUUURHWbhFc3Gleql65npI.jpg",
    owned: false,
  });

  const checkValues = (prop, defaultValue) => {
    if (!prop || prop.length === 0) {
      return false;
    }

    if (
      prop.trim() === "" ||
      prop.trim().toLowerCase() === defaultValue.toLowerCase()
    ) {
      return false;
    }

    return true;
  };

  const handleClick = () => {
    const { title, artist, url } = cardInfo;
    const props = [
      [title, "Titolo", "Titolo"],
      [artist, "Unknown", "Artista"],
      [
        url,
        "https://t3.ftcdn.net/jpg/01/46/91/16/360_F_146911624_MpozeTIQOoTUUURHWbhFc3Gleql65npI.jpg",
        "url",
      ],
    ];
    let checkPassed = true;

    for (const [prop, defaultValue, propName] of props) {
      let tmpCheck = checkValues(prop, defaultValue);

      if (!tmpCheck) {
        checkPassed = tmpCheck;
        toast.error(
          `Per favore immetti un valore diverso da "${prop}" in "${propName}"`
        );

        break;
      }
    }

    if (checkPassed) {
      (async () => {
        await setDataJSON("addData", JSON.stringify(cardInfo));
        window.location.href = "/";
      })();
    }
  };

  return (
    <div className="section_container" data-active={openEditMode}>
      <section>
        <h1 className="add_title">Aggiungi album</h1>
        <p className="add_desc">
          Compila i campi qui sotto, controlla la preview a destra e, una volta
          finito, clicca il bottone!
        </p>
        <p className="add_desc">
          Se devi fare ulteriori modifiche sugli album inseriti precedentemente,
          modifica il file.
        </p>

        <form>
          <Input
            id="title"
            placeholder="Titolo"
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />
          <Input
            id="artist"
            placeholder="Artista"
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />
          <Input
            type="number"
            id="year"
            placeholder="Anno"
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />

          <Dropdown cardInfo={cardInfo} setCardInfo={setCardInfo} />

          <Input
            type="url"
            id="url"
            placeholder="URL"
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />

          <span
            className="checkbox_container"
            onClick={(e) =>
              setCardInfo({ ...cardInfo, owned: e.target.checked })
            }
          >
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">È presente nel catalogo fisico</label>
          </span>
        </form>

        <Button text="Aggiungi" theme="dark" onClick={handleClick}>
          <span className="material-symbols-outlined">add</span>
        </Button>
      </section>
      <section id="live_preview">
        <h1 className="add_title">Live Preview</h1>

        <h3 className="live_preview_chapter">Card</h3>
        <Card
          title={cardInfo.title}
          artist={cardInfo.artist}
          year={cardInfo.year}
          type={cardInfo.type}
          owned={cardInfo.owned}
          url={cardInfo.url}
        />

        <h3 className="live_preview_chapter">Code</h3>
        <Code cardInfo={cardInfo} />
        <Button
          text="Modifica file"
          theme="light"
          onClick={() => setOpenEditMode(!openEditMode)}
        >
          <span className="material-symbols-outlined">edit</span>
        </Button>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Edit openEditMode={openEditMode} setOpenEditMode={setOpenEditMode} />
    </div>
  );
};

export default Add;
