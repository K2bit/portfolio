import { useNavigate } from "react-router-dom";


export default function useAppNavigation() {
    const navigate = useNavigate();

    return {
        navHome: () => navigate("/home"),
        navProjects: () => navigate("/projects"),
        navExperience: () => navigate("/experience"),
        navContact: () => navigate("/contact"),
        navPersonal: () => navigate("/personal"),
    }
}