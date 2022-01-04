import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./app/components/Header";
import AboutScreen from "./app/screens/AboutScreen";
import HomeScreen from "./app/screens/HomeScreen";
import NewTeamScreen from "./app/screens/NewTeamScreen";
import TeamScreen from "./app/screens/TeamScreen";
import TeamsScreen from "./app/screens/TeamsScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/teams" element={<TeamsScreen />} />
        <Route path="/teams/:teamId" element={<TeamScreen />} />
        <Route path="/teams/new" element={<NewTeamScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
