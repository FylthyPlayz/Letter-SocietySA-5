import { fetchAuthors, fetchRecipients, fetchRequests } from "./dataAccess.js"
import { LetterSociety } from "./LetterSociety.js"

const mainContainer = document.querySelector("#container")


document.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
    )

    const render = ()=> {
        fetchRequests()
        .then(() => fetchAuthors())
        .then(() => fetchRecipients())
        .then(() =>{
            mainContainer.innerHTML = LetterSociety()
        })
        }
    
    render()