import React, { useReducer } from 'react'
import { createContext } from 'react'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    isImportant: false
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    isImportant: false
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    isImportant: false
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    isImportant: false
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    isImportant: false
  },
  {
    id: 'e6',
    description: 'A pair of trousers',
    amount: 89.29,
    isImportant: false
  },
  {
    id: 'e7',
    description: 'Some bananas',
    amount: 5.99,
    isImportant: false
  },
  {
    id: 'e8',
    description: 'A book',
    amount: 14.99,
    isImportant: true
  },
  {
    id: 'e9',
    description: 'Another book',
    amount: 18.59,
    isImportant: true
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
