export default function List({ activities, prop, onDeleteActivity }) {
  console.log("activities,", activities);

  return (
    <ul>
      {activities.map((activity) => {
        if (activity.isForGoodWeather === prop) {
          return (
            <li key={activity.id} id={activity.id}>
              {activity.name}{" "}
              <button onClick={() => onDeleteActivity(activity.id)}>x</button>
            </li>
          );
        }
      })}
    </ul>
  );
}
