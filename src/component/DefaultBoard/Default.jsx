import React from "react";
import Backlog from "./Backlog/Backlog";
import Todo from "./Todo/Todo";
import Inprogress from "./Inprogress/Inprogress";
import Done from "./Done/Done";
import Cancelled from "./Cancelled/Cancelled";

const Default = (props) => {
  const { data } = props;
  const todo = data.filter((t) => t.status === "Todo");
  const backlog = data.filter((t) => t.status === "Backlog");
  const inProgress = data.filter((t) => t.status === "In progress");
  const done = data.filter((t) => t.status === "Done");
  const cancelled = data.filter((t) => t.status === "Cancelled");

  return (
    <div className="flex items-start justify-between p-4">
      <Backlog backlog={backlog} />
      <Todo todo={todo} />
      <Inprogress inProgress={inProgress} />
      <Done done={done} />
      <Cancelled cancelled={cancelled} />
    </div>
  );
};

export default Default;
