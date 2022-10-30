import { FlatList } from "react-native";
import React from "react";
import ExpensesItem from "./ExpensesItem";

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => {
        return <ExpensesItem item={item} />;
      }}
    />
  );
}
