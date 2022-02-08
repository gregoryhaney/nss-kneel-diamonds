// import the FN from the database module to
// retrieve the copy of the 'customOrders' data
import { getOrders } from "./database.js"


const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
           </li>`
}


// create and export a FN to generate the HTML that will
// be imported by 'KneelDiamonds.js' 
// this FN will display the custom orders to the user

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

        // create and start variable to hold the UL
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")


    // close out the UL 
    html += "</ul>"

    // return the HTML
    return html
}

