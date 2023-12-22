import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Default from "./pages/Default";
import UserTodo from "./pages/UserTodo";
import Priority from "./pages/Priority";

const App = () => {
  const [ticket, setTicket] = useState([]);
  const [user, setUser] = useState([]);
  const [grouping, setGrouping] = useState("status");
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

  const sortTickets = (a, b) => {
    if (sortingOrder === "priority") {
      return b.priority - a.priority;
    } else if (sortingOrder === "title") {
      return a.title.localeCompare(b.title);
    } else {
      return 0;
    }
  };

  const handleGrouping = (value) => {
    setGrouping(value);
  };

  return (
    <div>
      <Navbar onSorting={handleSorting} onGrouping={handleGrouping} />
      {grouping == "status" ? (
        <Default data={ticket.sort(sortTickets)} user={user} />
      ) : grouping == "user" ? (
        <UserTodo user={user} data={ticket.sort(sortTickets)} />
      ) : grouping === "priority" ? (
        <Priority />
      ) : (
        <p>NOT FOUND</p>
      )}
    </div>
  );
};

export default App;
