const Button = ({
  children,
  text,
  className,
  theme,
  dataActive,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`btn ${theme} ${className ? className : ""}`}
      data-active={dataActive ? dataActive : ""}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
