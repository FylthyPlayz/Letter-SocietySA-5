import { getRecipients } from "./dataAccess.js";

document.addEventListener(
    "change",
    (evt) => {
        if (evt.target.id === "recipient") {
          setRequestId(parseInt(evt.target.value))
        }
    }
  )

export const Recipients = () => {
    const recipients = getRecipients()
    return `
    <h3>Recipients</h3>
    <select id="recipient">
        <option value="0">Choose Author...</option>
        ${recipients.map(
        (recipientObj) => {
            return `
                <option value="${recipientObj.id}">${recipientObj.recipient}</option>
                `
        }
    )
        }
        </select>
        `
}