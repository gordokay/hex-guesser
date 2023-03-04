const PlayerSwatch = ({ hex, hasSubmitted }) => {
  const style = {
    backgroundColor: `#${hex}`,
  };
  if (!hasSubmitted) return null;
  return (
    <div className="swatch-container">
      <p className={`swatch-label`}>{hex}</p>
      <div className="swatch" style={style} />
    </div>
  );
};

export default PlayerSwatch;
