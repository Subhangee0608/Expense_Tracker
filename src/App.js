import React,{useState} from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [    {id: 'e1', title: 'toilet Paper', amount: 94.52, date: new Date(2021, 4, 15) },

{id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },

{id: 'e3', title: 'Sofa', amount: 521.32, date: new Date(2021, 5, 17) },

{id: 'e4', title: 'Phone', amount: 938.94, date: new Date(2021, 1, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
 

  const addExpenseHandler = expense => {
    console.log(expenses);
    setExpenses(prevExpense =>{
      return [expense, ...expenses];
      }
    )
  };
  console.log(expenses)


  //return React.createElement(
  //  'div',
  //  {},
  //  React.createElement('h2', {} , "Let's get started!"),
  //  React.createElement(Expenses, {items:expenses})

  //);



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
     
    </div>
  );
}

export default App;
