import { getAuthors, setAuthor } from "./dataAccess.js";

document.addEventListener(// an event change when the author is chosen from the dropdown
    "change",
    (evt) => {
        if (evt.target.id === "author") {
          setAuthor(parseInt(evt.target.value))
        }
    }
  )


export const Authors = () => { // this will create the function to represent the authors from a dropdown menu
    const authors = getAuthors()
    return `
    <h3>Authors</h3> 
    <select id="author">
        <option value="0">Choose Author...</option>
        ${authors.map(
        (authorObj) => {
            return `
                <option value="${authorObj.id}">${authorObj.name}</option>
                `
        }
    )
        }
        </select>
        `
}