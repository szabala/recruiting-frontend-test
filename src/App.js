import React, { useState, useEffect } from 'react';
import './App.css';
import InvoiceSelectList from './components/InvoiceSelectList';

function GetInvoices() {
  return fetch('https://recruiting.api.bemmbo.com/invoices/pending', {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function App() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetInvoices();
        setInvoices(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <body className="App-body">
      {loading ? (
          <p>Loading...</p>
        ) : (
          <InvoiceSelectList invoices={invoices} />
        )}
      </body>
    </div>
  );
}

export default App;
