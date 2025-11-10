import TypeToEnter from "../components/TypeToEnter/TypeToEnter"
import useAppNavigation from "../hooks/useAppNavigation"

export default function Landing() {

    const { navHome } = useAppNavigation();

    return (
        <TypeToEnter text={"Hello"} target={"World!"} helpText={"Type to enter my portfolio!"} finalHelp={"Press Enter :)"} onEnter={navHome}/>
    )
}