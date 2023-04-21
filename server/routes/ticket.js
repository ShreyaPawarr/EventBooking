import Ticket from '../model/ticket.js';


export const getTicket = async (id) => {
    Ticket.getTickets(id).then(result => result).catch(err => "Error Receiving Tickets")
}

export const addTicket = async (ticket) => {
    const newTicket = new Ticket(ticket);
    return newTicket.save()
    .then(result => {
        // console.log("third");
        // console.log(result);
        return result
    })
    .catch(err => "Coudn't upload ticket");
}
