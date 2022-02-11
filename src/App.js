import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import './App.css';
import { IncomeExpenses } from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

const title = "Expense tracker"

function App() {
  return (
    <div className="">
      <Header title= {title}/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
