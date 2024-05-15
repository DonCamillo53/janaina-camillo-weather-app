export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    let data = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.isForGoodWeather.checked,
      category: event.target.elements.category.value,
    };

    onAddActivity(data);

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
      <div>
        <label htmlFor="select-location">Category</label>
        <select name="category" id="select-location">
          <option value="arts_and_crafts">Arts and Crafts</option>
          <option value="cooking_and_baking">Cooking and Baking</option>
          <option value="educational">Educational</option>
          <option value="entertainment">Entertainment</option>
          <option value="fitness_and_wellness">Fitness and Wellness</option>
          <option value="sports">Sports</option>
          <option value="outdoor_activities">Outdoor Activities</option>
        </select>
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
