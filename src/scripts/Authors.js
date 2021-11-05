import { getAuthors, setAuthor } from "./dataAccess.js";

document.addEventListener(
    "change",
    (evt) => {
        if (evt.target.id === "author") {
          setAuthor(parseInt(evt.target.value))
        }
    }
  )


export const Authors = () => {
    const authors = getAuthors()
    return `
    <h3>Authors</h3>
    <select id="author">
        <option value="0">Choose Author...</option>
        ${authors.map(
        (authorObj) => {
            return `
                <option value="${authorObj.id}">${authorObj.author}</option>
                `
        }
    )
        }
        </select>
        `
}