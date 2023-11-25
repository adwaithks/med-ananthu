import { View, Text, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const PurchaseDetails = ({ balance, setBalance }) => {
	const [medicine, setMedicine] = useState({
		name: "Dolo",
		price: 300,
	});
	const [modalVisible, setModalVisible] = useState(false);

	const prices = {
		Paracetamol: 200,
		Dolo: 300,
	};

	const [purchased, setPurchased] = useState([]);

	const [quantity, setQuantity] = useState(1);

	return (
		<ScrollView style={{ padding: 20 }}>
			<Modal
				animationType="slide"
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={{ padding: 20 }}>
					<View style={{ marginBottom: 20 }}>
						<Text>
							Are you sure you want to purchase {medicine.name} of
							quantity {quantity} ?{" "}
						</Text>
						<Text>Total Amount: {medicine.price * quantity}</Text>
					</View>

					<View
						style={{
							display: "flex",
							width: "100%",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Pressable
							onPress={() => {
								setModalVisible(false);

								if (balance > medicine.price * quantity) {
									setBalance(
										(bal) => bal - medicine.price * quantity
									);
									setPurchased((prev) => [
										...prev,
										{
											name: medicine.name,
											quantity: quantity,
											total: medicine.price * quantity,
										},
									]);
								}
							}}
							style={{
								flex: 1,
								padding: 10,
								marginRight: 2,
								backgroundColor: "black",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Text style={{ color: "white" }}>Confirm</Text>
						</Pressable>
						<Pressable
							onPress={() => setModalVisible(false)}
							style={{
								flex: 1,
								marginLeft: 2,
								padding: 10,
								backgroundColor: "black",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Text style={{ color: "white" }}>Cancel</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<View
				style={{
					marginBottom: 20,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>Name</Text>
				<Text>Adwaith KS</Text>
			</View>

			<View
				style={{
					display: "flex",
					marginBottom: 20,

					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>
					Mobile Number
				</Text>
				<Text>xxxxxxx660</Text>
			</View>

			<View
				style={{
					marginBottom: 20,

					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>
					Balance
				</Text>
				<Text>Rs.{balance}</Text>
			</View>

			<View style={{ marginBottom: 20 }}>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>
					Medicine
				</Text>
				<Picker
					selectedValue={medicine.name}
					onValueChange={(itemValue, itemIndex) => {
						const price = prices[itemValue];
						setMedicine({
							name: itemValue,
							price,
						});
					}}
				>
					<Picker.Item label="Paracetamol" value="Paracetamol" />
					<Picker.Item label="Dolo" value="Dolo" />
				</Picker>
			</View>

			<View
				style={{
					marginBottom: 20,

					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>Rate</Text>
				<Text>{medicine.price}</Text>
			</View>
			<View
				style={{
					marginBottom: 20,
				}}
			>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>
					Quantity
				</Text>
				<Picker
					selectedValue={quantity}
					onValueChange={(itemValue, itemIndex) =>
						setQuantity(itemValue)
					}
				>
					<Picker.Item label="1" value={1} />
					<Picker.Item label="2" value={2} />
				</Picker>
			</View>
			<View
				style={{
					display: "flex",
					marginBottom: 20,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>
					Total Amount
				</Text>
				<Text>{medicine.price * quantity}</Text>
			</View>

			<View>
				<TouchableOpacity
					onPress={() => {
						setModalVisible(true);
					}}
					style={{
						padding: 10,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "black",
					}}
				>
					<Text style={{ color: "white" }}>Purchase</Text>
				</TouchableOpacity>
			</View>

			<View style={{ marginTop: 20, marginBottom: 50 }}>
				<Text>Purchases</Text>
				{purchased.map((p, i) => {
					return (
						<View
							style={{
								padding: 10,
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-evenly",
								backgroundColor: "rgba(0,0,0,0.2)",
							}}
							key={i}
						>
							<Text>
								{p.name} x {p.quantity || 1}
							</Text>
							<Text>Rs.{p.total}</Text>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default PurchaseDetails;
