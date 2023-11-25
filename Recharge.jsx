import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Recharge = ({ balance, setBalance }) => {
	const [info, setInfo] = useState([
		{
			key: "Name",
			value: "Adwaith",
		},
		{
			key: "Mobile Number",
			value: "xxxxxxx660",
		},
		{
			key: "Balance",
			value: balance,
		},
	]);

	const [amount, setAmount] = useState(0);

	return (
		<View style={{ padding: 10 }}>
			<View>
				{info.map((pair, index) => {
					return (
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
							key={index}
						>
							<Text>{pair.key}</Text>
							<Text>
								{pair.key === "Balance"
									? `Rs. ${pair.value}`
									: pair.value}
							</Text>
						</View>
					);
				})}
			</View>
			<View
				style={{
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				<TextInput
					style={{
						borderBottomColor: "black",
						height: 40,
						borderBottomWidth: 1,
					}}
					placeholder="Enter amount to add"
					keyboardType="number-pad"
					value={amount.toString()}
					onChange={(txt) => {
						setAmount(txt.nativeEvent.text);
					}}
				/>
			</View>

			<View>
				<TouchableOpacity
					onPress={() => {
						let t = 0;
						const cl = JSON.parse(JSON.stringify(info));
						const temp = cl.map((info_) => {
							if (info_.key === "Balance") {
								t = Number(info_.value) + Number(amount);
								info_.value =
									Number(info_.value) + Number(amount);
								return info_;
							}
							return info_;
						});
						console.log(t, temp);
						setBalance(t);
						setInfo(temp);
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
					<Text style={{ color: "white" }}>Recharge</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Recharge;
