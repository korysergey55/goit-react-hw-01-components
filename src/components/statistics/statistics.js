import React from "react";

const Statistics = ({ title, statistika }) => {
 return (
  <section class="statistics">
   <h2 class="title">{title}</h2>

   <ul class="stat-list">
    {statistika.map((stat) => (
     <li class="item" key={stat.id}>
      <span class="label">{stat.label}</span>
      <span class="percentage"> {stat.percentage}%</span>
     </li>
    ))}
   </ul>
  </section>
 );
};
export default Statistics;
