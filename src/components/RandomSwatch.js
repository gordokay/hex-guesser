const RandomSwatch = ({ hex, hasSubmitted }) => {
  const style = {
    backgroundColor: `#${hex}`,
  };

  return (
    <div className="swatch-container">
      <p className={`swatch-label ${!hasSubmitted ? "hidden" : ""}`}>{hex}</p>
      <div className="swatch" style={style} />
    </div>
  );
};

export default RandomSwatch;
