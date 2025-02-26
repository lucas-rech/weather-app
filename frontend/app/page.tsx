import WeatherCard from "./components/weatherCard";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen bg-gradient-to-t from-[#05050e] via-[#002446] to-[rgb(88,0,110)]">
        <WeatherCard />
    </div>
  );
}
