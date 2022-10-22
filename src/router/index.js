import About from "../pages/about";
import Home from "../pages/home";
import Projects from "../pages/projects";

export const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/home', component: Home, exact: true},
    {path: '/projects', component: Projects, exact: true},
]