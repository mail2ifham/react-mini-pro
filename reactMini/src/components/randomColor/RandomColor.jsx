import { useEffect, useState } from "react";

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function getHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        return hexColor
    }

    function getRgbColor() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        return `rgb(${r},${g},${b})`
    }

    function handleHexColor() {
        typeOfColor === 'hex' ? setColor(getHexColor()) : setColor(getRgbColor());
    }

    useEffect(() => {
        typeOfColor === 'hex' ? setColor(getHexColor()) : setColor(getRgbColor());

    }, [typeOfColor])

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: color
        }}>
            <button onClick={() => setTypeOfColor("hex")}>HEX Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
            <button onClick={handleHexColor}>Generate random color</button>

            <h1 style={{
                textAlign: "center"
            }}>{typeOfColor}</h1>
            <h2 style={{
                textAlign: "center"
            }}>{color}</h2>
        </div>
    )

}

export default RandomColor;