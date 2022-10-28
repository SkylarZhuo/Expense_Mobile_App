import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpenseOutput/ExpensesOutput'
import { ExpensesContext } from '../stores/expenses_context';
import { useState } from 'react';
import { useEffect } from 'react';
import {collection,onSnapshot} from 'firebase/firestore'
import {firestore} from "../firebase/firebase_setup"
export default function ImportantExpensesScreen() {

  const [expense, setExpense] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "Expense"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setExpense([]);
          return;
        }
        setExpense(
          querySnapshot.docs.map((snapDoc) => {
            let data = snapDoc.data();
            data = { ...data, key: snapDoc.id };
            return data;
          })
        );
      }
    );
    return unsubscribe;
  }, []);

  const importantExpenses = expense.filter((exp)=>{
    return exp.isImportant;
        
  })
  // const expensesCtx = useContext(ExpensesContext);

  // const importantExpenses = expensesCtx.expenses.filter((expense)=>{
  //   return expense.isImportant;
        
  // })
  return (
    <ExpensesOutput expenses={importantExpenses} expensesPeriod='Important expense' fallbackText='No important expense added!'/>
  )
}