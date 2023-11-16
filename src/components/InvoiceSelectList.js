import React, { useState } from 'react';
import InvoiceTable from './InvoiceTable';
import CreditNoteTable from './CreditNoteTable';
import Modal from './Modal';

function InvoiceComponent({ invoices }) {
  const receivedInvoices = invoices.filter((invoice) => invoice.type === 'received');
  const creditNoteInvoices = invoices.filter((invoice) => invoice.type === 'credit_note');

  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [filteredCreditNoteInvoices, setFilteredCreditNoteInvoices] = useState([]);
  const [selectedCreditNote, setSelectedCreditNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const resetSelection = () => {
    setSelectedInvoice(null);
    setSelectedCreditNote(null);
    setFilteredCreditNoteInvoices([]);
  }

  const handleInvoiceSelection = (invoice) => {
    if (selectedInvoice === invoice) {
      resetSelection();
      return;
    }
    setSelectedInvoice(invoice);
    setSelectedCreditNote(null);
    const filteredInvoices = creditNoteInvoices.filter((creditInvoice) => creditInvoice.reference === invoice.id);
    setFilteredCreditNoteInvoices(filteredInvoices);
  };

  const handleCreditNoteSelection = (creditNote) => {
    if (selectedCreditNote === creditNote) {
      setSelectedCreditNote(null);
      return;
    }
    setSelectedCreditNote(creditNote);
  };

  const handleAssign = () => {
    if (showModal) {
      resetSelection();
      setShowModal(false);
      return;
    }
    setShowModal(true);
  }

  return (
    <div className="w-100">
      <InvoiceTable receivedInvoices={receivedInvoices} selectedInvoice={selectedInvoice} handleInvoiceSelection={handleInvoiceSelection} />

      {selectedInvoice && filteredCreditNoteInvoices.length !== 0 && (
        <CreditNoteTable filteredCreditNoteInvoices={filteredCreditNoteInvoices} selectedCreditNote={selectedCreditNote} handleCreditNoteSelection={handleCreditNoteSelection} />
      )}

      {selectedInvoice && selectedCreditNote && (
        <div className="pt-8">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleAssign}
          >
            Asignar
          </button>
        </div>
      )}

      {showModal && <Modal handleAssign={handleAssign} />}

    </div>
  );
}

export default InvoiceComponent;
