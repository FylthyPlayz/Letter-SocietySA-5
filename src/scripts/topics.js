import { getTopics, setTopic } from "./dataAccess.js";


const mainContainer = document.querySelector("#container")

export const topicButtons = () => {
    const topics = getTopics()

    return `
    <label for="topics"><h3></label>
    ${topics.map(
        (topic) => {
            return `
                <div>
                <input type="radio" name="topics" value="${topic.id}" /> ${topic.topic}
                </div>
          `
        }
    ).join("")
        }`
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.type === "radio") {
        setTopic(parseInt(clickEvent.target.value))
    }
})