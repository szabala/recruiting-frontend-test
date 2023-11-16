import React, { useState } from 'react';

function InvoiceComponent({ invoices }) {
  const receivedInvoices = invoices.filter((invoice) => invoice.type === 'received');
  const creditNoteInvoices = invoices.filter((invoice) => invoice.type === 'credit_note');

  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [filteredCreditNoteInvoices, setFilteredCreditNoteInvoices] = useState([]);
  const [selectedCreditNote, setSelectedCreditNote] = useState(null);

  const handleInvoiceSelection = (invoice) => {
    setSelectedInvoice(invoice);
    const filteredInvoices = creditNoteInvoices.filter((creditInvoice) => creditInvoice.reference === invoice.id);
    setFilteredCreditNoteInvoices(filteredInvoices);
  };

  const handleCreditNoteSelection = (creditNote) => {
    setSelectedCreditNote(creditNote);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold py-2 px-4">Selecciona una factura</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <tbody>
          {receivedInvoices.map((invoice) => (
            <tr key={invoice.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 py-2 px-4">
                <div
                  className={`${
                    selectedInvoice === invoice
                      ? 'bg-black text-white'
                      : 'bg-blue-500 hover:bg-blue-700 text-white'
                  } font-bold py-2 px-4 rounded-full focus:outline-none cursor-pointer`}
                  onClick={() => handleInvoiceSelection(invoice)}
                  style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {selectedInvoice === invoice ? '✔' : ''}
                </div>
              </td>
              <td className="border border-gray-300 py-2 px-4">{invoice.id} ({invoice.organization_id})</td>
              <td className="border border-gray-300 py-2 px-4">${invoice.amount} {invoice.currency}</td>
              <td className="border border-gray-300 py-2 px-4">{invoice.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedInvoice && filteredCreditNoteInvoices.length !== 0 && (
        <div>
          <h2 className="text-2xl font-bold py-2 px-4 mt-8">Selecciona una nota de crédito</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              {filteredCreditNoteInvoices.map((creditInvoice) => (
                <tr key={creditInvoice.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 py-2 px-4">
                    <div
                      className={`${
                        selectedCreditNote === creditInvoice
                          ? 'bg-black text-white'
                          : 'bg-blue-500 hover:bg-blue-700 text-white'
                      } font-bold py-2 px-4 rounded-full focus:outline-none cursor-pointer`}
                      onClick={() => handleCreditNoteSelection(creditInvoice)}
                      style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {selectedCreditNote === creditInvoice ? '✔' : ''}
                    </div>
                  </td>
                  <td className="border border-gray-300 py-2 px-4">{creditInvoice.id} ({creditInvoice.organization_id})</td>
                  <td className="border border-gray-300 py-2 px-4">${creditInvoice.amount} {creditInvoice.currency}</td>
                  <td className="border border-gray-300 py-2 px-4">{creditInvoice.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default InvoiceComponent;
