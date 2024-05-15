export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    let data = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.isForGoodWeather.checked,
    };

    onAddActivity(data);
    console.log(data);

    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new Activity</h2>
      <div>
        <label htmlFor="activity_input">Name</label>
        <input type="text" id="activity_input" name="name" />
      </div>
      <div>
        <label htmlFor="activity_checkbox">Good-Weather Activity</label>
        <input type="checkbox" id="activity_checkbox" name="isForGoodWeather" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
