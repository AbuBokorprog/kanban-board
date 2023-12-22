import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Default from "./component/DefaultBoard/Default";

const App = () => {
  const [ticket, setTicket] = useState([]);
  const [user, setUser] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("priority");

  useEffect(() => {
    fetch(
      "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
        setTicket(data.tickets);
      });
  }, []);

  const handleSorting = (order) => {
    setSortingOrder(order);
  };

  // Function to sort tickets based on the selected order
  const sortTickets = (a, b) => {
    if (sortingOrder == "priority") {
      return b.priority - a.priority;
    } else if (sortingOrder == "title") {
      return b.title.localeCompare(a.title);
    } else {
      return 0;
    }
  };

  return (
    <div>
      <Navbar onSorting={handleSorting} />
      <Default data={ticket.sort(sortTickets)} />
    </div>
  );
};

export default App;
