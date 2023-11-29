const Block = ({ color, text, icon, grade, colorText }) => {
  return (
    <div style={{ background: color }} className="block">
      <img src={icon} alt={`${text}`} width="32px" height="32px" />
      <div className="text-div">
        <p style={{ color: colorText }} className="block-text">
          {text}
        </p>
      </div>
      <div className="block-number">
        <p> {grade} / 100</p>
      </div>
    </div>
  );
};

export default Block;
