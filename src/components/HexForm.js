const HexForm = ({ onHexChange, onSubmit, hex }) => {
  return (
    <form novalidate>
      <label htmlFor="hex">Make a guess</label>
      <input id="hex" name="hex" value={hex} pattern="^#*[0-9a-fA-F]{6}" />
      <button>Enter</button>
    </form>
  );
};

export default HexForm;
