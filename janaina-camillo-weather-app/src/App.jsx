import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }
  const isGoodWeather = false;

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
