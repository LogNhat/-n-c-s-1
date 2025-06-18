import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ProjectPage from "../pages/Project";
import ProfilePage from "../pages/Profile";
import WorldMap from "../pages/WorldMap";
import WorldLayout from "../components/Layout/WorldLayout";

const publicRouters = [
  { path: "/", page: HomePage },
  { path: "/about", page: AboutPage },
  { path: "/project", page: ProjectPage },
  { path: "/profile", page: ProfilePage },
  { path: "/worldmap", page: WorldMap, layout: WorldLayout },
];

const privateRouters = [];

export { publicRouters, privateRouters };
