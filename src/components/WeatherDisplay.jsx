export function WeatherDisplay({ weatherIcon, temperature, isGoodWeather }) {
  return (
    <>
      <div>
        <span>{weatherIcon}</span>
        <h1>{`${temperature}ºC`}</h1>
      </div>
      <div>
        <p>
          {isGoodWeather
            ? "The weather is awesome! Go outside and:"
            : "bad weather outside! Here's what you can do now:"}
        </p>
      </div>
    </>
  );
}
