import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

const Login = ({ navigation }) => {
	const [pass, setPass] = useState("");

	return (
		<View style={{ padding: 20 }}>
			<View>
				<Text>MEDICINE DISPENSER</Text>
			</View>
			<View>
				<Picker selectedValue="admin">
					<Picker.Item label="Admin" value="admin" />
				</Picker>
			</View>
			<View
				style={{
					marginTop: 20,
					marginBottom: 10,
				}}
			>
				<TextInput
					cursorColor="black"
					style={{
						borderBottomColor: "black",
						height: 40,
						borderBottomWidth: 1,
					}}
					placeholder="Password"
					keyboardType="visible-password"
					value={pass}
					onChange={(txt) => {
						setPass(txt.nativeEvent.text);
					}}
				/>
			</View>
			<View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Home");
					}}
					style={{
						padding: 10,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "black",
					}}
				>
					<Text
						style={{
							color: "white",
						}}
					>
						Login
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;
