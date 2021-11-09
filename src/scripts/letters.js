import { getAuthors, getLetterStorage } from "./dataAccess.js"


// this will display the letters at the bottom of the page once they have been submitted.
const showLetters = (letter) => {
    return `<li> Dear, 
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