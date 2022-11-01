import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EditExpenseScreen from "./screens/EditExpenseScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import ImportantExpensesScreen from "./screens/ImportantExpensesScreen";
import { GlobalStyles } from "./constants/color";
import { Ionicons } from "@expo/vector-icons";
import AddButton from "./components/UI/AddButton";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import ExpensesContextProvider from "./stores/expenses_context";
import React from 'react';
// import AddExpenseScreen from "./screens/AddExpenseScreen"

const Stack = createNativeStackNavigator();
const ButtomTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <ButtomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.LightBlue },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.LightBlue },
        tabBarActiveTintColor: GlobalStyles.colors.LightColor20,
        headerRight: () => (
          <AddButton
            icon="add"
            size={30}
            color={"white"}
            onPress={() => {
              navigation.navigate("AddExpenseScreen");
            }}
          />
        ),
      })}
    >
      <ButtomTabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="home" color={color} />
          ),
        }}
      />
      <ButtomTabs.Screen
        name="ImportantExpenses"
        component={ImportantExpensesScreen}
        options={{
          title: "Important Expenses",
          tabBarLabel: "Important",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="alert-outline" color={color} />
          ),
        }}
      />
    </ButtomTabs.Navigator>
  );
}
export default function App() {
  return (
    // <SafeAreaView>
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.LightBlue },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpenseOverview"
              component={ExpenseOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditExpenseScreen"
              component={EditExpenseScreen}
            />

            <Stack.Screen
              name="AddExpenseScreen"
              component={AddExpenseScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
