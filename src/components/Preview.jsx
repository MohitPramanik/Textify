import { useContext } from "react";
import { textContext } from "../contexts/textContext";

function Preview() {
    const { text } = useContext(textContext);
    return (
        <div id="preview" className="pb-4">
            <h2 className="fs-1 px-4 py-2">Preview of the modified text</h2>

            <div className=" mx-4 mt-3 fs-4 min-vh-100 border border-2 border-black rounded p-4 show-area">
                {text.length > 0 ? text : <h3>No text available</h3>}
            </div>
        </div>
    );
}

export default Preview;
