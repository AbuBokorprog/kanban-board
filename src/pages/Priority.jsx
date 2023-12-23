import React from "react";
import NoPriority from "../component/Priority/NoPriority";
import Low from "../component/Priority/Low";
import Medium from "../component/Priority/Medium";
import High from "../component/Priority/High";
import Urgent from "../component/Priority/Urgent";

const Priority = ({ data, user }) => {
  const low = data.filter((d) => d.priority === 1);
  const medium = data.filter((d) => d.priority === 2);
  const high = data.filter((d) => d.priority === 3);
  const urgent = data.filter((d) => d.priority === 4);
  const no = data.filter((d) => d.priority === 0);

  return (
    <div className="flex items-start justify-between p-2">
      <NoPriority data={no} user={user} />
      <Low data={low} user={user} />
      <Medium data={medium} user={user} />
      <High data={high} user={user} />
      <Urgent data={urgent} user={user} />
    </div>
  );
};

export default Priority;
