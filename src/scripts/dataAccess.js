const applicationState = { //transient state for when a user clicks/chooses and writes things
    authors: [],
    letterstorage: [],
    topics: [],
    recipients: []
}

const mainContainer = document.querySelector("#container")
const API = "http://localhost:8088"

export const fetchRequests = () => { // a request to get the letter storage from the application state.
    return fetch(`${API}/letterStorage`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.letterstorage = serviceRequests
            }
        )
}


export const sendRequest = () => { // This will send the 
    const date = new Date().toLocaleDateString()
    applicationState.letterstorage.dateSent = date
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    return fetch(`${API}/letterstorage`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchAuthors = ()=> {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then (
            (authors) => {
                applicationState.authors = authors
            }
        )
}

export const fetchRecipients = ()=> {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then (
            (recipients) => {
                applicationState.recipients = recipients
            }
        )
}
export const getLetterStorage = () => {
    return applicationState.letterstorage.map(letterStore => ({ ...letterStore }))
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({ ...recipient }))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}

// export const setLetterStorage = () => {
//     return applicationState.letterstorage.letterId = id
// }