import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import AddButton from "../components/UI/AddButton";
import { GlobalStyles } from "../constants/color";
import EditButton from "../components/UI/EditButton";
import { ExpensesContext } from "../stores/expenses_context";
import { deleteFromDb, updateToDb } from "../firebase/firestore";
import { Alert } from "react-native";

export default function EditExpenseScreen({ route, navigation }) {
  const { expenseId, isImportant, description, amount } = route.params;

  const editedExpenseId = route.params?.expenseId;
  const expensesCtx = useContext(ExpensesContext);

  async function onDeleteHandler(deletedKey) {
    // setGoals(
    //   goals.filter((goal) => {
    //     return goal.key != deletedKey;
    //   })
    // );
    // await deleteFromDb(editedExpenseId);
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  const onImportantHandler = () => {
    navigation.navigate("ImportantExpenses");
  };

  // const onComfirmHandler = (expenseData) => {
  //   expensesCtx.addExpense(expenseData);
  //   navigation.goBack();
  // };

  function onDeleteHandler() {
    Alert.alert("Delete this expense", "Are you sure to delete this expense?", [
      { text: "No", style: "cancel", onPress: () => {} },
      { text: "Yes", style: "destructive", onPress: onDelete },
    ]);
    return;
  }

  function onDelete() {
    deleteFromDb(expenseId);
    navigation.goBack();
  }

  function onAddImportantHandler() {
    updateToDb(expenseId, !isImportant);
    navigation.navigate("ImportantExpenses");
  }

  // async function onDelete1() {
  //   await deleteFromDb(expenseId);
  //   navigation.goBack();
  // }

  let importantLabel = isImportant ? '❤Already added to Important!Remove it' : '🤍Mark As Important'
  
  return (
    <View style={styles.container}>
      <View>
        <EditButton
          content={importantLabel}
          onPress={onAddImportantHandler}
          style={styles.button}
        />
      </View>
      <View>
        <EditButton
          content={"Delete"}
          onPress={onDeleteHandler}
          style={styles.button}
        />
      </View>

      {/* <AddButton
        icon="trash"
        color={GlobalStyles.colors.DarkGray1}
        size={38}
        onPress={onComfirmHandler}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.LightColor20,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    alignItems: "center",
  },
  button: {
    minWidth: 20,
    marginHorizontal: 8,
  },
});
