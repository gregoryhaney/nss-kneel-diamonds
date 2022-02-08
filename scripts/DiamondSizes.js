// import the FN from the database module to
// retrieve the copy of the 'sizes' data
import { getSizes } from "./database.js"


// invoke the 'getSizes' FN and store the
// returned data in a variable called 'sizes'
const sizes = getSizes()

// set up an event listener

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            window.alert(`You've selected ${sizes.carets} carets`)
        }
    }
)


// create and export a FN to generate the HTML that will
// be imported by 'KneelDiamonds.js' 
// this FN will display the size selections to the user

export const DiamondSizes = () => {

    // create and start variable to hold the UL
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
               </li>`
    })

    html += listItemsArray.join("")

    // close out the UL 
    html += "</ul>"


    // return the generated HTML
    return html
}

