import reset from "../styles/reset.css?raw";
import typograpy from "../styles/typograpy.css?raw";

export const GlobalStyles = () => {
    return <style>{`${reset} ${typograpy}`}</style>

}