import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TextProvider } from "./contexts/textContext";

function App() {
    return (
        <>
            <Navbar />
            <TextProvider>
                <Outlet />
            </TextProvider>
        </>
    );
}

export default App;
