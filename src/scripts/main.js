import { fetchAuthors, fetchRecipients, fetchRequests, fetchTopics } from "./dataAccess.js"
import { LetterSociety } from "./LetterSociety.js"
// main page to render HTML
const mainContainer = document.querySelector("#container")


document.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
    )

    const render = ()=> { // fetching data to render to the page
        fetchRequests()
        .then(() => fetchAuthors())
        .then(() => fetchRecipients())
        .then(() => fetchTopics())
        .then(() =>{
            mainContainer.innerHTML = LetterSociety()
        })
        }
    
    render()