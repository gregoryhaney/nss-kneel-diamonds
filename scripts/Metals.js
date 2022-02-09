// import the FNs from the database module to
    // (1) retrieve the copy of the 'metals' data
    // (2) update the orderBuilder object
import { getMetals, setMetal } from "./database.js"

// invoke the 'getmetals' FN and store the
// returned data in a variable called 'metals'
const metals = getMetals()


// new event listener, which will update the orderBuilder object in database.js
            document.addEventListener(
                "change",
                (event) => {
                    if (event.target.name === "metal") {
                        setMetal(parseInt(event.target.value))
                    }
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
