import React from "react";
const TransactionHistory = ({ transactions }) => {
 return (
  <table class="transaction-history">
   <thead>
    <tr>
     <th>Type</th>
     <th>Amount</th>
     <th>Currency</th>
    </tr>
   </thead>

   <tbody>
    {transactions.map((trans) => (
     <tr>
      <td>{trans.type}</td>
      <td>{trans.amount}</td>
      <td>{trans.currency}</td>
     </tr>
    ))}
   </tbody>
  </table>
 );
};

export default TransactionHistory;
