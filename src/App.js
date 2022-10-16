import { useState } from "react";
import AirQualityMonitoring from "./Components/AirQualityMonitoring";
import EnergyMonitoring from "./Components/EnergyMonitoring";
import Insights from "./Components/Insights";
import Navbar from "./Components/Navbar";
import NavbarResources from "./Components/NavbarResources";
import WaterMonitoring from "./Components/WaterMonitoring";
import WeatherMonitoring from "./Components/WeatherMonitoring";

function App() {
  const [verticalType, setCurrentVertical] = useState("Insights");
  console.log(verticalType);
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <NavbarResources
          setCurrentVertical={setCurrentVertical}
          verticalType={verticalType}
        />
        {verticalType === "Insights" && <Insights />}
        {verticalType === "Energy Monitoring" && <EnergyMonitoring />}
        {verticalType === "Water Monitoring" && <WaterMonitoring />}
        {verticalType === "Weather Monitoring" && <WeatherMonitoring />}
        {verticalType === "Air Quality Monitoring" && <AirQualityMonitoring />}
      </div>
    </>
  );
}

export default App;
