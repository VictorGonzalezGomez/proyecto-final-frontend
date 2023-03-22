import React from "react";
import CardCharts from "../../components/dashboard/CardCharts";
import UserGroupCard from "../../components/dashboard/UserGroupCard";
export default function Summary () {
  return(
    <div className="gallery-charts d-flex flex-wrap">
      <CardCharts/>
      <UserGroupCard/>
    </div>
  );
}
