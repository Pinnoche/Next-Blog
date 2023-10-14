import TicketList from "./TicketList";

export default function Ticket() {
  return (
    <main>
      <nav>
      <div>
          <h2>Tickets</h2>
          <p><small>Current Open Tickets</small></p>
        </div>
      </nav>
      
      <TicketList />
    </main>
  )
}
