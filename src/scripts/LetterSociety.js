import { Letters } from "./letters.js"
import { PenPalForm } from "./PenPalForm.js"


export const LetterSociety = () => {
    return `
    <h1>Letter Society</h1>
    <section class="PenPalForm">
        ${PenPalForm()}
        </section>
        <section class="letterStorage">
        <h2>Sent Letters</h2>
        ${Letters()}
    </section>
    `
}