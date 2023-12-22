import React from "react";
import AS from "../component/UserBoard/AS";
import Y from "../component/UserBoard/Y";
import SK from "../component/UserBoard/SK";
import Ramesh from "../component/UserBoard/Ramesh";
import Suresh from "../component/UserBoard/Suresh";

const UserTodo = ({ data, user }) => {
  // userId
  // id
  const anoopSharma = data.filter((d) => d.userId === user[0].id);
  const yogesh = data.filter((d) => d.userId === user[1].id);
  const shankarK = data.filter((d) => d.userId === user[2].id);
  const ramesh = data.filter((d) => d.userId === user[3].id);
  const suresh = data.filter((d) => d.userId === user[4].id);

  return (
    <div className="flex items-start justify-between p-4">
      <AS data={anoopSharma} user={user} />
      <Y data={yogesh} user={user} />
      <Suresh data={suresh} user={user} />
      <SK data={shankarK} user={user} />
      <Ramesh data={ramesh} user={user} />
    </div>
  );
};

export default UserTodo;
