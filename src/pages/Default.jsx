import React from "react";
import Backlog from "../component/DefaultBoard/Backlog/Backlog";
import Todo from "../component/DefaultBoard/Todo/Todo";
import Inprogress from "../component/DefaultBoard/Inprogress/Inprogress";
import Done from "../component/DefaultBoard/Done/Done";
import Cancelled from "../component/DefaultBoard/Cancelled/Cancelled";

const Default = ({ data, user }) => {
  const todo = data.filter((t) => t.status === "Todo");
  const backlog = data.filter((t) => t.status === "Backlog");
  const inProgress = data.filter((t) => t.status === "In progress");
  const done = data.filter((t) => t.status === "Done");
  const cancelled = data.filter((t) => t.status === "Cancelled");

  return (
    <div className="flex items-start justify-between p-4">
      <Backlog backlog={backlog} user={user} />
      <Todo todo={todo} user={user} />
      <Inprogress inProgress={inProgress} user={user} />
      <Done done={done} user={user} />
      <Cancelled cancelled={cancelled} user={user} />
    </div>
  );
};

export default Default;
