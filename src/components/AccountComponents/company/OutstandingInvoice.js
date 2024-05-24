import React , {useState, useEffect} from 'react'

export default function OutstandingInvoice() {
    const hasOutstandingInvoices = false;
    const hasPaidInvoices = false;

    const [outstandingInvoices,setOutstandingInvoices] = useState([])
    const [paidInvoices,setPaidInvoices] = useState([])

    useEffect(() => {
        setOutstandingInvoices([])
        setPaidInvoices([])
      },[]);

    return (
        <div>
            <div className="container mt-3">
      <h2>Invoices</h2>
      <hr />
      <h3>Outstanding Invoices</h3>
      {hasOutstandingInvoices ? (
        // Map over outstanding invoices and display them here
        outstandingInvoices.map((invoice, index) => (
          <div key={index}>
            {/* Render each outstanding invoice */}
          </div>
        ))
      ) : (
        <p className='text-center'>You have no outstanding invoices.</p>
      )}
      <hr />
      <h3>Invoice History</h3>
      {hasPaidInvoices ? (
        // Map over paid invoices and display them here
        paidInvoices.map((invoice, index) => (
          <div key={index}>
            {/* Render each paid invoice */}
          </div>
        ))
      ) : (
        <p className='text-center' >You have no paid invoices.</p>
      )}
    </div>
        </div>
    )
}
