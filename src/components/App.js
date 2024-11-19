import React from "react";
import AccountContainer from "./AccountContainer";
import AddTransactionForm from "./AddTransactionForm";
import TransactionsList from "./TransactionsList";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
      <AddTransactionForm/>
      <TransactionsList/>
    </div>
  );
}

export default App;
