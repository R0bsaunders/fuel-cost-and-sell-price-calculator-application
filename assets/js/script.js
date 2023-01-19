// Select Client
    // Drop down with available clients
    // Main Body is shown
        // unhide main body

    // Title becomes Client Name
    // Text entry for number of liters
    // Text entry for cost per liter
    // Text entry for margin per liter

// All above items are calculated in the below formulas
    // Delivery Cost (ppl): Delivery Cost / liters ordered
    // Cost per liter (ppl): Buy price + Margin + Delivery Cost
    // Total Margin: (Liters * Margin) /100
    // Total Cost: (Cost per Liter * Liters) /100

// Sell Price Shows
    // Pence per litre in big text
    // Strong to show PPL + VAT
    // Copy above button

// Show delivery ppl
// Show total Margin

const h1 =  $('h1');
const clientDropdown = $('select');

var selectedClient = [];


// ADD CLIENTS TO DROPDOWN

for (let i = 0; i < clients.length; i++) {
    var listItem = $("<option>")

    .attr("value", clients[i].name)
    .addClass("dropdownOption")
    .text(clients[i].name);
    
    clientDropdown.append(listItem);
}

// EVENT LISTENER ON CLIENT
clientDropdown.on('click', something);

// Print client to H1
function something(event) {
    h1.text("Artic Calculator: " + $(event.target).val());

    // Store Only Selected Client Array in Variable
    for (let i = 0; i < clients.length; i++) {
        if(clients[i].name == $(event.target).val()) {
            selectedClient = clients[i];
            console.log(selectedClient)
        }
    };
};

//EVENT LISTER FOR FORMS

