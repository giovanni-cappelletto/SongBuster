const Filter = ({ text, index, id, filters, setFilters }) => {
  return (
    <div
      className="filter"
      tabIndex={index}
      data-active={filters[id] ? "true" : "false"}
      onClick={() => setFilters({ ...filters, [id]: !filters[id] })}
    >
      {text}
    </div>
  );
};

export default Filter;
