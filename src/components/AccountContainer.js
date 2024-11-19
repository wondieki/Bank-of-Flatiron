import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

export const baseUrl = "http://localhost:8001/transactions";

function AccountContainer() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Search onSearch={setSearchQuery} />
      <AddTransactionForm />
      <TransactionsList searchQuery={searchQuery} />
    </div>
  );
}

export default AccountContainer;


