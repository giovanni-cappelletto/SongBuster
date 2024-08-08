import { useState } from "react";

const Dropdown = ({ cardInfo, setCardInfo }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    let value = e.target.id;

    if (value === "cd") {
      value = value.toUpperCase();
    } else {
      value = value[0].toUpperCase() + value.slice(1);
    }

    setCardInfo({ ...cardInfo, type: value });
  };

  return (
    <div
      className="dropdown_container"
      onClick={() => setIsActive(!isActive)}
      onKeyDown={(e) => (e.key === "Enter" ? setIsActive(!isActive) : "")}
      tabIndex="0"
    >
      <p>
        {cardInfo.type}
        <span className="material-symbols-outlined" data-active={isActive}>
          arrow_drop_down
        </span>
      </p>

      <ul data-active={isActive}>
        <li id="cd" onClick={handleClick} tabIndex="1">
          CD
        </li>
        <li id="vinile" onClick={handleClick} tabIndex="2">
          Vinile
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
