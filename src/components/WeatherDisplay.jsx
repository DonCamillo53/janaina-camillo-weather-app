export function WeatherDisplay({ weatherIcon, temperature, isGoodWeather }) {
  return (
    <section className="weather-display">
      <div className="weather-display__display">
        <span>{weatherIcon}</span>
        <h1>{`${temperature}ºC`}</h1>
      </div>
      <div className="weather-display__paragraph">
        <p>
          {isGoodWeather
            ? "The weather is awesome – Here are some activities you can do today"
            : "Bad weather outside – Here are some activities you can do today"}
        </p>
      </div>
    </section>
  );
}
