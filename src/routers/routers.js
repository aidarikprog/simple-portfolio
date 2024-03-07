import ProjectPage from "../pages/ProjectPage"
import MainPage from "../pages/MainPage"
import SkillsPage from "../pages/SkillsPage"
import ContactsPage from "../pages/ContactsPage"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: "page not founded",
    },
    {
        path: "/projects",
        element: <ProjectPage />,
        errorElement: "page not founded",
    },
    {
        path: "/skills",
        element: <SkillsPage />,
        errorElement: "page not founded",
    },
    {
        path: "/contacts",
        element: <ContactsPage />,
        errorElement: "page not founded",
    },
])
