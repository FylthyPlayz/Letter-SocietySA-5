const applicationState = { //transient state for when a user clicks/chooses and writes things
    users: [],
    letterstorage: [],
    topics: [],
    userChoices: {
        authorId: 0,
        recipientId: 0,
        letterId: 0,
        topicId: 0
    }
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


export const sendRequest = () => { // This will send the new post....
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

export const fetchAuthors = ()=> { // this will grab the authors and return them
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then (
            (users) => {
                applicationState.users = users
            }
        )
}

export const fetchRecipients = ()=> { // this will grab and return the recipients
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then (
            (users) => {
                applicationState.users = users
            }
        )
}
export const fetchTopics = ()=> {// this will grab and return the topics
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then (
            (topics) => {
                applicationState.topics = topics
            }
        )
}
// get functions that will return a copy of the data from permanent state
export const getLetterStorage = () => {
    return applicationState.letterstorage.map(letterStore => ({ ...letterStore }))
}

export const getAuthors = () => {
    return applicationState.users.map(author => ({ ...author }))
}
export const getRecipients = () => {
    return applicationState.users.map(recipient => ({ ...recipient }))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}
// set functions that will track user clicks and set them as an ID in the application state
export const setLetterStorage = () => {
    return applicationState.userChoices.letterId = id
}
export const setAuthor = () => {
    return applicationState.userChoices.authorId = id
}
export const setRecipient = () => {
    return applicationState.userChoices.recipientId = id
}
export const setTopic = () => {
    return applicationState.userChoices.topicId = id
}