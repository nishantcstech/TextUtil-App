import React, { useState } from 'react';

export default function TextForm(props) {
    const handlerChange = (event) => {
        //console.log("handlerChange")
        setText(event.target.value)
    }
    const handlerUpCase = () => {
        //console.log("click a button")
        const newText = text.toUpperCase()
        setText(newText)
    }
    const handlerLoCase = () => {
        //console.log("click a button")
        const newText = text.toLowerCase()
        setText(newText)
    }
    const handlerCopy = () => {
        let text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)


    }
    const handlerClear = () => {
        const newText = ""
        setText(newText)
    }
    const handleRemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleReverseString = () => {
        let splitText = text.split("")
        let reverseString = splitText.reverse()
        let joinText = reverseString.join("")
        let newText = joinText
        setText(newText)

    }
    const [text, setText] = useState("")
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" value={text}
                        onChange={handlerChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} rows="8"></textarea>
                </div>
                <button onClick={handlerUpCase} className="btn btn-primary mx-2">Convert To Upercase</button>
                <button onClick={handlerLoCase} className="btn btn-primary mx-2">Convert To Lowercase</button>
                <button onClick={handlerCopy} className="btn btn-primary mx-2">Copy Text</button>
                <button onClick={handlerClear} className="btn btn-primary mx-2">Clear Text</button>
                <button onClick={handleReverseString} className="btn btn-primary mx-2">Reverse String</button>

                <button onClick={handleRemoveExtraSpace} className="btn btn-primary mx-2">Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>The Text Summary</h2>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> Charecters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview"}</p>
            </div>
        </>
    )
}
