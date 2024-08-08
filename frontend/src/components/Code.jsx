const Code = ({ cardInfo }) => {
  return (
    <div className="code highlight">
      &#91; <br />
      <span className="indent highlight">
        &#123; <br />
      </span>
      {Object.keys(cardInfo).map((prop, index) => {
        return <Line prop={prop} value={cardInfo[prop]} key={index} />;
      })}
      <span className="indent">
        &#125; <br />
      </span>
      &#93;
    </div>
  );
};

const Line = ({ prop, value }) => {
  return (
    <div className="highlight">
      <span className="indent-2x">
        {prop}: &#34;{String(value)}&#34;
        {prop !== "owned" ? "," : ""}
      </span>
      <br />
    </div>
  );
};

export default Code;
