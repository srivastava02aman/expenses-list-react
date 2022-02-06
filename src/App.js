import React, { useState, useEffect } from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let DUMMY__EXPENSE = [
        
  

];




const App = () => {
      
    const [expenses, setExpenses] = useState(DUMMY__EXPENSE);

     
     //fetching the data from Api(get method).
     //created a function then fetch the data.
    function fetchData(){
      fetch('https://techgun.website/sample/api/read.php').then(
        response => {
          return response.json();
        }
      ).then(
        data => {
          // console.log(data);
          setExpenses(data);
        } 
      );

    };

 
  //useEffect is used to prevent the loop.
   useEffect(()=> {
    fetchData();
   },[]);

   
   //creating the object in database.
   //post method in api.
  const addExpenseHandler = (expense) => {
    fetch('https://techgun.website/sample/api/create.php',{
       method:'POST',
       //post via json string..
       body:JSON.stringify(expense),
       headers:{
         'content-Type': 'application/json'
       }
    }).then(
      response => {
        fetchData();
      }
    );
  }


    return (

        <div>

           <NewExpense onAddExpense = {addExpenseHandler} />
            <Expenses item={expenses}/>

        </div>
    );
}

export default App;