export default function SelectLocation() {
  return (
    <div>
      <label htmlFor="select-location">Select Location</label>
      <select name="select-location" id="select-location">
        <option value="arctic">Arctic</option>
        <option value="europe">Europe</option>
        <option value="rainforest">Rainforest</option>
        <option value="sahara">Sahara</option>
      </select>
    </div>
  );
}