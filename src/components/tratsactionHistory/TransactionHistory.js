import React from "react";
import styles from './Transaction.module.css';
const TransactionHistory = ({ transactions }) => {
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
    {transactions.map((trans) => (
     <tr className={styles.tbody}>
      <td>{trans.type}</td>
      <td className={styles.amount}>{trans.amount}</td>
      <td>{trans.currency}</td>
     </tr>
    ))}
   </tbody>
  </table>
 );
};

export default TransactionHistory;
