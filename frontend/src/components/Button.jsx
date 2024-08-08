const Button = ({ children, text, className, theme, dataActive, onClick }) => {
  return (
    <button
      className={`btn ${theme} ${className ? className : ""}`}
      data-active={dataActive ? dataActive : ""}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
