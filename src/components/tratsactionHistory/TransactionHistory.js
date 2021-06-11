import React from "react";
import styles from './Transaction.module.css';
import PropTypes from "prop-types";

const TransactionHistory = ({  items }) => {
 return (
  <table className={styles.transaction_history}>
   <thead>
    <tr className={styles.title}>
     <th>Type</th>
     <th>Amount</th>
     <th>Currency</th>
    </tr>
   </thead>
   <tbody>
    { items.map((trans) => (
     <tr className={styles.tbody} key={trans.id}>
      <td>{trans.type}</td>
      <td className={styles.amount}>{trans.amount}</td>
      <td>{trans.currency}</td>
     </tr>
    ))}
   </tbody>
  </table>
 );
};

TransactionHistory.prototype = {
 items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TransactionHistory;
