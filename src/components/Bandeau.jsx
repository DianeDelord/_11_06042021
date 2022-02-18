import React from "react"
import Apropos from "../pages/A-propos"

const {title, text} = Apropos.content
console.log(title)
console.log(text)

function getText(is_open) {
    if (is_open) {
        return <h1 className="title">{title}, {text}</h1>
    } else {
        return <h1 className="title">{title}</h1> 
    }
}

export default getText()