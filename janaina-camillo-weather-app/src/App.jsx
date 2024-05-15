import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";
import { WeatherDisplay } from "./components/WeatherDisplay";

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
  let isGoodWeather = weather?.isGoodWeather;
  let temperature = weather?.temperature;
  let weatherIcon = weather?.condition;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  function handleDeleteActivity(idNewActivity) {
    setActivities(
      activities.filter((activity) => activity.id != idNewActivity)
    );
  }
  // <button onClick={() => onDeleteActivity(id)}>x</button>

  // const filteredActivites = activities.filter(
  //   (activity) => activity.isForGoodWeather === isGoodWeather
  // );

  console.log(activities);

  return (
    <>
      <WeatherDisplay
        weatherIcon={weatherIcon}
        temperature={temperature}
        isGoodWeather={isGoodWeather}
      />
      <List
        activities={activities}
        prop={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
export default App;
