// import the FNs from the database module to
    // (1) retrieve the copy of the 'styles' data
    // (2) update the orderBuilder object
import { getStyles, setStyle } from "./database.js"

    // invoke the 'getStyles' FN and store the
    // returned data in a variable called 'styles'
const styles = getStyles()

    // add an event listener
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

    // create and export a FN to generate the HTML that will
    // be imported by 'KneelDiamonds.js' 
    // this FN will display the style selections to the user
export const JewelryStyles = () => {

        // create and start variable to hold the UL
    let html = "<ul>"

        // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
            return `
            <li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </li>
            `
    })

         // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

         // close out the UL 
    html += "</ul>"

        // return the HTML
    return html
}

