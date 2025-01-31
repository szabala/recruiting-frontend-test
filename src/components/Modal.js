import calculateDifference from "../middleware/calculateDifference";

function Modal({ handleAssign, selectedInvoice, selectedCreditNote }) {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
                <div className="fixed inset-0 bg-gray-500 opacity-75"></div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="p-4 md:p-5 flex flex-col items-center bg-white rounded-lg shadow dark:bg-gray-700">
                        <img src="greencheck.svg" alt="green check" className="w-20 p-2" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Nota de crédito asignada correctamente
                        </h3>
                        <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-medium">Factura:</span> {selectedInvoice.id} ({selectedInvoice.organization_id})
                        </p>
                        <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-medium">Nota de crédito:</span> {selectedCreditNote.id} ({selectedCreditNote.organization_id})
                        </p>

                        <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                            {calculateDifference(selectedInvoice, selectedCreditNote)}
                        </p>

                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleAssign}
                        >
                            Seguir Asignando
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;