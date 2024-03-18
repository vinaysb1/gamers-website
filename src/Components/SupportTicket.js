// SupportTicket.js
import React from 'react';
import './SupportTicket.css'; // Make sure to create SupportTicket.css for styling
import { Link } from 'react-router-dom';

const SupportTicket = () => {
  // Generate random ticket data
  const ticketData = [
    { id: 1, subject: "Issue with login", category: "Technical", submitted: "2024-03-18", status: "Open" },
    { id: 2, subject: "Payment query", category: "Billing", submitted: "2024-03-16", status: "Closed" },
    // Add more ticket data as needed
  ];

  return (
    <div className="main-div2">
      {/* Upper area */}
      <div className="upper-div">
        <div className="upper-left">
          <h2>Your Tickets</h2>
        </div>
        <div className="upper-right">
          <input type="text" placeholder="Search..." />
          <button>Add Ticket</button>
        </div>
      </div>

      {/* Lower area */}
      <div className="lower-div">
        {/* Display table */}
        <table className="ticket-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Submitted</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.category}</td>
                <td>{ticket.submitted}</td>
                <td>{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTicket;
