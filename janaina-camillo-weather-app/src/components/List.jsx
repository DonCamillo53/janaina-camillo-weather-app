export default function List({ activities, prop }) {
  console.log("activities,", activities);

  return (
    <ul>
      {activities.map((activity) => {
        if (activity.isForGoodWeather === prop) {
          return <li key={activity.id}>{activity.name}</li>;
        }
      })}
    </ul>
  );
}
