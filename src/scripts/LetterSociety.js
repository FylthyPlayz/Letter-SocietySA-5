import { Letters } from "./letters.js"
import { PenPalForm } from "./PenPalForm.js"

// page dedicated to displaying the HTML.
export const LetterSociety = () => {
    return `
    <h1>The Letter Society</h1>
    <section class="PenPalForm">
        ${PenPalForm()}
        </section>
        <section class="letterStorage">
        <h2>Sent Letters</h2>
        ${Letters()}
    </section>
    `
}