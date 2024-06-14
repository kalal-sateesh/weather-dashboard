import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDashboard from "./components/WeatherDashboard";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <WeatherDashboard />
    </>
  );
}

export default App;
