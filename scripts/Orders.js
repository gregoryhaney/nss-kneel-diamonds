    // import the FN from the database module to
    // retrieve the copy of 'getOrders' && 'getMetals' data
import { getOrders, getMetals } from "./database.js"


    // import the FN from the database module to
    // retrieve the copy of 'getSizes' && 'getStyles' data
import { getSizes, getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

const buildOrderListItem = (order) => {
        const foundMetal = metals.find((metal) => metal.id === order.metalId)
        const foundSize = sizes.find((size) => size.id === order.sizeId)
        const foundStyle = styles.find((style) => style.id === order.styleId)
        const totalCost = (foundMetal.price) + (foundSize.price) + (foundStyle.price)
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        
    return `<li>
          Order #${order.id}, placed on ${order.timestamp}, cost ${costString}
           </li>`
}

    // create and export a FN to generate the HTML that will
    // be imported by 'KneelDiamonds.js' 
    // this FN will display the custom orders to the user
export const Orders = () => {
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
