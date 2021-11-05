import { sendRequest } from "./dataAccess.js"
import { Authors } from "./Authors.js"
import { Recipients } from "./recipients.js"
import { topicButtons } from "./topics.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => { // adding a clickable event that will 
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const chooseAuthor = document.querySelector("select[name='author']").value
        const letterFill = document.querySelector("input[name='letterFill']").value
        const topicClick = document.querySelector("input[name='topicClick']").value
        const chooseRecipient = document.querySelector("input[name='chooseRecipient']").value


        // Make an object out of the user input
        const dataToSendToAPI = {
            chooseAuthor: chooseAuthor,
            letterFill: letterFill,
            topicClick: topicClick,
            chooseRecipient: chooseRecipient,

        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

{/* <label class="label" for="chooseAuthor">Author</label>
<input type="dropdown" name="chooseAuthor" class="select" /> */}
{/* <label class="label" for="chooseRecipient">Recipient</label>
<input type="dropdown" name="chooseRecipient" class="select" /> */}
{/* <label class="label" for="topicClick">Topics</label>
<input type="radio" name="topicClick" class="select" /> */}

export const PenPalForm = () => {
    let html = `
    <div class="field">
        ${Authors()}
        </div>
        <div class="field">
            <label class="label" for="letterFill">Letter</label>
            <input type="text" name="letterFill" class="input" />
        </div>
        <div class="field">
            ${topicButtons()}
        </div>
        <div class="field">
            ${Recipients()}
        </div>
        
        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}