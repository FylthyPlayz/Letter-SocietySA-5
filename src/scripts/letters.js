import { getLetterStorage } from "./dataAccess.js"



const showLetters = (letter) => {
    return `<li> 
    ${letter.letter}
    </li>`
    
}

export const Letters = () => {
    const letters = getLetterStorage()
    
    let html = `<ul>
    ${letters.map(showLetters).join("")
}
</ul>`

return html
}