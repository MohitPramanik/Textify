import { useCallback, useContext, useEffect, useState } from "react";
import { textContext } from "../contexts/textContext";
import { jsPDF } from "jspdf";

function Editor() {
    const { text, setText } = useContext(textContext);

    const handleUpperCase = useCallback(() => {
        setText(text.toUpperCase());
    });

    const handleLowerCase = useCallback(() => {
        setText(text.toLowerCase());
    });

    const handleSentenceCase = useCallback(() => {
        let tempArr = text.split(" ");
        let tempText = "";
        let isNewSentence = true;

        tempArr = tempArr.map((word) => {
            if (word !== "" && isNewSentence) {
                isNewSentence = false;
                if (word.length > 1)
                    return word[0].toUpperCase() + word.slice(1).toLowerCase();
                else return word.toUpperCase();
            } else if (word.includes(".")) {
                isNewSentence = true;
                return ".";
            } else return word.toLowerCase();
        });
        tempText = tempArr.join(" ");
        setText(tempText);
    });

    const handleInvertCase = useCallback(() => {
        let tempText = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] >= "a" && text[i] <= "z")
                tempText += text[i].toUpperCase();
            else tempText += text[i].toLowerCase();
        }
        setText(tempText);
    });

    const handleCapitalize = useCallback(() => {
        let tempArr = text.split(" ");
        let tempText = "";
        tempArr = tempArr.map((word) => {
            if (word.length > 1)
                return word[0].toUpperCase() + word.slice(1).toLowerCase();
            else return word.toUpperCase();
        });
        tempText = tempArr.join(" ");
        console.log(tempArr);
        setText(tempText);
    });

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
        let select = document.getElementById("text-area");
        select.select();
    });

    const handleDownload = useCallback(() => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });

    const handleDownloadPdf = useCallback(() => {
        const doc = new jsPDF();

        doc.text(text, 10, 10);
        doc.save("text.pdf");
    });

    const handleExtraSpace = useCallback(() => {
        let tempArr = text.split(" ");
        tempArr = tempArr.filter((word) => word !== "");
        let tempText = tempArr.join(" ");
        setText(tempText);
    });

    return (
        <div className="container mt-3 pb-3">
            <div className="mb-3">
                <textarea
                    id="text-area"
                    className="form-control border-2 border-black"
                    style={{ resize: "none" }}
                    placeholder="Enter your text here..."
                    rows="10"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </div>

            <div className="d-flex gap-3 flex-wrap" id="modify-btn-area">
                <button onClick={handleUpperCase}>Convert to Uppercase</button>
                <button onClick={handleLowerCase}>Convert to Lowercase</button>
                <button onClick={handleSentenceCase}>
                    Convert to Sentence case
                </button>
                <button onClick={handleInvertCase}>Invert Case</button>
                <button onClick={handleCapitalize}>Capitalize text</button>
                <button onClick={handleExtraSpace}>Remove extra space</button>
                <button onClick={handleCopy}>Copy text</button>
                <button onClick={handleDownload}>Export as a text file</button>
                <button onClick={handleDownloadPdf}>Export as a pdf</button>
            </div>

            <div className="mt-3">
                <p>
                    <b>{text === "" ? 0 : text.split(" ").length}</b> words and{" "}
                    <b>{text.length}</b> characters.
                </p>
            </div>
        </div>
    );
}

export default Editor;
