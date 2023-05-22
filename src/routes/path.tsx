import { Route, Routes } from "react-router-dom";
import Home from "../screens/home/home";
import Team from "../screens/team/team";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default Path;
