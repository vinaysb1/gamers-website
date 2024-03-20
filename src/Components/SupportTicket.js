import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SupportTicket.css';
import axios from 'axios';

const SupportTicket = () => {
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/tickets');
        setTicketData(response.data);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
        // Handle error gracefully, e.g., show an error message to the user
      }
    };

    fetchTicketData();
  }, []);

  return (
    <div className="main-div2">
      <div className="upper-div">
        <div className="upper-left">
          <h2>Your Tickets</h2>
        </div>
        <div className="upper-right">
          <input type="text" placeholder="Search..." />
          <Link to="/settings/create-ticket">
          <button>Add Ticket</button>
          </Link>
        </div>
      </div>

      {/* Lower area */}
      <div className="lower-div">
        {/* Display table */}
        <table className="ticket-table">
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>Subject</th>
              <th>Submitted</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.title}</td>
                <td>{ticket.subject}</td>
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
