import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
 return (
  <section className={styles.statistics}>
   <h2 className={styles.title}>{title}</h2>

   <ul className={styles.stat_list}>
    {stats.map((stat) => (
     <li className={styles.item} key={stat.id}>
      <span className={styles.label}>{stat.label}</span>
      <span className="percentage"> {stat.percentage}%</span>
     </li>
    ))}
   </ul>
  </section>
 );
 };

Statistics.defaultProps = {
 title: "",
};

Statistics.propTypes = {
 title: PropTypes.string,
 stats: PropTypes.arrayOf(PropTypes.object),
};
export default Statistics;
