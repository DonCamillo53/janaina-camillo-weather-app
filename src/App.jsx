import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";
import { WeatherDisplay } from "./components/WeatherDisplay";
import SelectLocation from "./components/SelectLocation";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("arctic");

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/${location}`
        );
        const weather = await response.json();
        setWeather(weather);
      } catch (e) {
        console.error(e.message);
      }
    }

    startFetching();

    const interval = setInterval(() => {
      startFetching();
    }, 5000);
    return () => clearInterval(interval);
  }, [location]);

  let isGoodWeather = weather?.isGoodWeather;
  let temperature = weather?.temperature;
  let weatherIcon = weather?.condition;

  function handleAddActivity(newActivity) {
    setActivities(
      [...activities, { id: uid(), ...newActivity }].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }

        return 0;
      })
    );
  }

  function handleDeleteActivity(idNewActivity) {
    setActivities(
      activities.filter((activity) => activity.id != idNewActivity)
    );
  }

  return (
    <main>
      <section className="card">
        <div className="control-section">
          <WeatherDisplay
            weatherIcon={weatherIcon}
            temperature={temperature}
            isGoodWeather={isGoodWeather}
          />
          <SelectLocation
            onChange={(e) => {
              (e) => setLocation(e.target.value);
            }}
          />
          <Form onAddActivity={handleAddActivity} />
        </div>
        <List
          activities={activities}
          weatherStatus={isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
      </section>
    </main>

  );
}
export default App;
