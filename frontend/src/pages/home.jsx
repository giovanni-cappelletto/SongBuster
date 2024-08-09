import { useState, useEffect, useMemo, useRef } from "react";
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Search from "../components/Search.jsx";
import Button from "../components/Button.jsx";
import { getDataJSON } from "../utils/fetch.js";
import getFilteredData from "../utils/getFilteredData.js";
import "./home.css";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  // ==== Used for sorting cards ====
  const [searchItem, setSearchItem] = useState("");
  const [filters, setFilters] = useState({
    owned: false,
    wished: false,
    cd: false,
    vinyl: false,
  });
  const [data, setData] = useState([]);
  const filteredData = useMemo(
    () => getFilteredData(data, filters, searchItem),
    [data, filters, searchItem]
  );
  const albumInfo = useMemo(() => {
    return {
      currentAlbum: filteredData.filter((value) => value.owned).length,
      totalAlbum: filteredData.length,
    };
  }, [filteredData]);

  // Fetch data
  useEffect(() => {
    getDataJSON("getData", setData);
  }, []);

  // Hides scrollToTop button
  useEffect(() => {
    const hideButton = () => {
      const normalizedPosition = window.scrollY / window.innerHeight;
      setIsActive(normalizedPosition >= 1);
    };

    window.addEventListener("scroll", hideButton);

    return () => window.removeEventListener("scroll", hideButton);
  }, []);

  return (
    <div>
      <Header />
      <Search
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        filters={filters}
        setFilters={setFilters}
        getFilteredData={getFilteredData}
        albumInfo={albumInfo}
      />

      <div className="card_container">
        {filteredData.map(
          ({ title, artist, year, type, url, owned }, index) => {
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
          }
        )}
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
