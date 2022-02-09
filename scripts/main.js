import { KneelDiamonds } from "./KneelDiamonds.js"
const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

    // listen for the event called "stateChanged"
    // and when dispatched by database.js 
    // the HTML will be regenerated && displayed to the user.
    // this ensures the user always has the latest state
document.addEventListener("stateChanged", event => {
    console.log("State of the data has changed. ReGenerating HTML...")
    renderAllHTML()
})