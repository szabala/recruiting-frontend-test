const CLP_TO_USD = 0.0011; // This would ussually come from an API call

// This function calculates the difference between the invoice and the credit note
// and returns a string with the difference to be paid
function calculateDifference(invoice, creditNote) {
    var diff;
    if (invoice.currency === creditNote.currency) {
        diff = invoice.amount - creditNote.amount;
    } else {
        if (creditNote.currency === "CLP") {
            diff = invoice.amount - (creditNote.amount * CLP_TO_USD);
        } else {
            diff = invoice.amount - (creditNote.amount / CLP_TO_USD);
        }
    }
    diff = diff > 0 ? diff : 0;
    return "Diferencia a pagar: $" + diff + " " + invoice.currency;
}

export default calculateDifference;