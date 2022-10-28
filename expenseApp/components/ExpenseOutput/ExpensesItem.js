import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";

export default function ExpensesItem({ item }) {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate("EditExpenseScreen", {
      expenseId: item.key,
      amount: item.amount,
      description: item.description,
      isImportant: item.isImportant,
    });
  };

  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => pressed && styles.itemPressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textContainer, styles.descriptionContainer]}>
            {item.description}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 12,
    backgroundColor: GlobalStyles.colors.backgroundColor5,

    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.DarkGray1,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textContainer: {
    color:'white'
  },
  descriptionContainer: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    width: 80,
  },
  amount: {
    color: GlobalStyles.colors.DarkBlue,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemPressed: {
    opacity: 0.7,
  },
});
