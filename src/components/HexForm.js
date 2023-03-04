const HexForm = ({ onHexChange, onSubmit, hex, hasSubmitted }) => {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="hex">Make a guess</label>
        <input
          onChange={onHexChange}
          id="hex"
          name="hex"
          value={hex}
          pattern="[0-9a-fA-F]{6}"
          required
          disabled={hasSubmitted}
        />
      </div>
      <button disabled={hasSubmitted}>Enter</button>
    </form>
  );
};

export default HexForm;
