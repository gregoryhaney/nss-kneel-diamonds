// import the FN from the database module to
// retrieve the copy of the 'metals' data
import { getMetals } from "./database.js"

// invoke the 'getmetals' FN and store the
// returned data in a variable called 'metals'
const metals = getMetals()



// add an event listener
document.addEventListener(
    "change",
    (event) => {
    }
)

// create and export a FN to generate the HTML that will
// be imported by 'KneelDiamonds.js' 
// this FN will display the metal selections to the user
export const Metals = () => {
    
    
    // create and start variable to hold the UL
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
                </li>`
    }


    // close out the UL 
    html += "</ul>"

    // return the HTML
    return html
}

