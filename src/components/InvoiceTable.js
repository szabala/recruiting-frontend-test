function InvoiceTable({ receivedInvoices, selectedInvoice, handleInvoiceSelection }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-8">
            <h1 className="text-2xl font-bold py-2 px-4">Selecciona una factura</h1>
            <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {receivedInvoices.map((invoice) => (
                    <div
                        key={invoice.id}
                        className={`flex border-b dark:bg-gray-800 dark:border-gray-700 ${selectedInvoice === invoice ? 'bg-gray-100 dark:bg-gray-700' : ''
                            }`}
                    >
                        <div className="flex-none w-1/24 px-6 py-4 text-right">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={selectedInvoice === invoice}
                                onChange={() => handleInvoiceSelection(invoice)}
                            />
                        </div>
                        <div className="flex-auto px-6 py-4 font-medium text-gray-900 whitespace-normal dark:text-white">
                            {invoice.id} ({invoice.organization_id})
                        </div>
                        <div className="flex-none w-1/3 px-6 py-4">${invoice.amount} {invoice.currency}</div>
                        <div className="flex-none w-1/4 px-6 py-4"> Recibida </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InvoiceTable;