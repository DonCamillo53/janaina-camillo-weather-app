export default function List({ activities, weatherStatus, onDeleteActivity }) {
  console.log("activities,", activities);

  return (
    <ul>
      {activities.map((activity) => {
        if (activity.isForGoodWeather === weatherStatus) {
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
