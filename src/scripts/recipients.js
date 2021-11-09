import { getRecipients, setRecipient } from "./dataAccess.js";

document.addEventListener( // a change event for when the user clicks the dropdown menu
    "change",
    (evt) => {
        if (evt.target.id === "recipient") {
          setRecipient(parseInt(evt.target.value))
        }
    }
  )

export const Recipients = () => { // a function to display the recipients in the dropdown
    const recipients = getRecipients()
    return `
    <h3>Recipients</h3>
    <select id="recipient">
        <option value="0">Choose Recipient...</option>
        ${recipients.map(
        (recipientObj) => {
            return `
                <option value="${recipientObj.id}">${recipientObj.name}</option>
                `
        }
    )
        }
        </select>
        `
}