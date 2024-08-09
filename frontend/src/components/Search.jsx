import Filter from "./Filter.jsx";

const Search = ({
  searchItem,
  setSearchItem,
  filters,
  setFilters,
  albumInfo,
}) => {
  return (
    <div className="search">
      <h1 className="search_title">Catalogo musica</h1>

      <form className="search_form">
        <input
          type="text"
          placeholder="Cerca il nome dell'artista, dell'album oppure l'anno"
          className="input"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <p className="search_desc">
          {albumInfo.currentAlbum} album posseduti su {albumInfo.totalAlbum}.
        </p>
      </form>

      <div className="filters">
        <Filter
          text="Owned"
          id="owned"
          index="1"
          filters={filters}
          setFilters={setFilters}
        />
        <Filter
          text="Not owned"
          id="wished"
          index="1"
          filters={filters}
          setFilters={setFilters}
        />
        <Filter
          text="CD"
          id="cd"
          index="2"
          filters={filters}
          setFilters={setFilters}
        />
        <Filter
          text="Vinile"
          id="vinyl"
          index="3"
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </div>
  );
};

export default Search;
