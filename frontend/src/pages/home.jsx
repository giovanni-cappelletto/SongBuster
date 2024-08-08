import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Search from "../components/Search.jsx";
import Button from "../components/Button.jsx";
import { getDataJSON } from "../utils/fetch.js";
import "./home.css";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [filters, setFilters] = useState({
    wished: false,
    cd: false,
    vinyl: false,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataJSON("getData", setData);
  }, []);

  window.addEventListener("scroll", () => {
    const normalizedPosition = window.scrollY / window.innerHeight;

    if (normalizedPosition >= 1) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  });

  return (
    <div>
      <Header />
      <Search
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="card_container">
        {data
          .sort((a, b) => a.year - b.year)
          .map(({ title, artist, year, type, url, owned }, index) => {
            // CD and Vinyl filter
            if (!(filters.cd && filters.vinyl)) {
              if (
                (filters.cd && type === "Vinile") ||
                (filters.vinyl && type === "CD")
              ) {
                return;
              }
            }

            // Wished filter
            if (filters.wished && owned) {
              return;
            }

            // Search filter
            if (
              title.toLowerCase().indexOf(searchItem.toLowerCase()) !== 0 &&
              String(year).indexOf(searchItem) !== 0 &&
              artist.toLowerCase().indexOf(searchItem.toLowerCase())
            ) {
              return;
            }

            return (
              <Card
                title={title}
                artist={artist}
                year={year}
                type={type}
                url={url}
                key={index}
                owned={owned}
              />
            );
          })}
      </div>

      <Button
        className="return_to_start"
        theme="dark"
        dataActive={isActive}
        onClick={() => window.scrollTo(0, 0)}
        disabled
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </Button>
    </div>
  );
};

export default Home;
