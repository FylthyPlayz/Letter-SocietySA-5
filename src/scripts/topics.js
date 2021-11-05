import { getTopics } from "./dataAccess.js";

const topics = getTopics()

export const topicButtons = () => {
    let html = "<h2></h2>"
    const listTopics = topics.map(topic =>{
        return `
        <input type="radio" name="topics" value="${topic.id}" /> ${topic.topic}
        `
    })
    return html
}