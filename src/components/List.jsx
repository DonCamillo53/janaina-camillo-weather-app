export default function List({ activities, weatherStatus, onDeleteActivity }) {
  console.log("activities,", activities);

  const icons = {
    outdoor_activities: " 🌳",
    sports: " ⚽️",
    arts_and_crafts: " 🎨",
    cooking_and_baking: " 👨🏽‍🍳",
    fitness_and_wellness: " 🏋🏻‍♂️",
    entertainment: " 🎭",
    educational: " 📚",
  };

  return (
    <ul>
      {activities.map((activity) => {
        if (activity.isForGoodWeather === weatherStatus) {
          return (
            <li key={activity.id} id={activity.id}>
              {activity.name}
              <span>{icons[activity.category]}</span>
              <button onClick={() => onDeleteActivity(activity.id)}>x</button>
            </li>
          );
        }
      })}
    </ul>
  );
}
