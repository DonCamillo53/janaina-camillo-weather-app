import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather`
        );
        const weather = await response.json();
        setWeather(weather);
      } catch (e) {
        console.error(e.message);
      }
    }
    startFetching();
  }, []);
  console.log(weather);
  let isGoodWeather = weather.isGoodWeather;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  // const filteredActivites = activities.filter(
  //   (activity) => activity.isForGoodWeather === isGoodWeather
  // );

  console.log(activities);

  return (
    <>
      <List activities={activities} prop={isGoodWeather} />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
export default App;
