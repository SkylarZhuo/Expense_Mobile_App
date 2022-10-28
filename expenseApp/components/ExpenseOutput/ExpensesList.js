import { FlatList } from "react-native";
import React from "react";
import ExpensesItem from "./ExpensesItem";

// function renderExpenseItem(item) {
//   return <ExpensesItem item={item} />;
// }

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => {
        return <ExpensesItem item={item} />;
      }}
      // keyExtractor={(item) => item.id}
    />
  );
}

// export default function ExpensesList({ expenses }) {
//   return (
//     <FlatList
//       data={expenses}
//       renderItem={({item}) =>{
//         return <ExpensesItem expense = {item}/>
//       }}
//       keyExtractor={(item) => item.id}
//     />
//   );
// }
