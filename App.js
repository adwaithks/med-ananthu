import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recharge from "./Recharge";
import PurchaseDetails from "./PurchaseDetails";
import Login from "./Login";
import React, { useState } from "react";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
	const [balance, setBalance] = useState(1000);

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="PurchaseDetails"
				children={() => (
					<PurchaseDetails
						balance={balance}
						setBalance={setBalance}
					/>
				)}
			/>
			<Tab.Screen
				name="Recharge"
				children={() => (
					<Recharge balance={balance} setBalance={setBalance} />
				)}
			/>
		</Tab.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen
					options={{
						headerShown: false,
					}}
					name="Home"
					component={Home}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
