const Input = ({ type = "text", id, placeholder, cardInfo, setCardInfo }) => {
  const handleChange = (e) => {
    let value = e.target.value;

    if (id === "year") {
      value = Math.abs(value);

      value = value > 2100 || value < 1900 ? new Date().getFullYear() : value;
    } else if (id !== "url") {
      value = value.split(" ");

      if (value.length === 1) {
        value = value.join(" ").toUpperCase();
      } else {
        value
          .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
          .join(" ");
      }
    }

    setCardInfo({ ...cardInfo, [id]: value });
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      onChange={handleChange}
      required
    />
  );
};

export default Input;
