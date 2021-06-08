import React from "react";
import styles from "./Statistics.module.css"

const Statistics = ({ title, statistika }) => {
 return (
  <section className={styles.statistics}>
   <h2 className={styles.title}>{title}</h2>

   <ul className={styles.stat_list}>
    {statistika.map((stat) => (
     <li className={styles.item} key={stat.id}>
      <span className={styles.label}>{stat.label}</span>
      <span class="percentage"> {stat.percentage}%</span>
     </li>
    ))}
   </ul>
  </section>
 );
};
export default Statistics;
