//
//  CompanyProfilePage1
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./CompanyProfilePage1StyleSheet"
import { Image, Text, View } from "react-native"


export default class CompanyProfilePage1 extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					style={styles.component1436View}>
					<Image
						source={require("./../../assets/images/group-15.png")}
						style={styles.group15Image}/>
					<View
						style={styles.group9View}>
						<Image
							source={require("./../../assets/images/modellytics-logo300x-2.png")}
							style={styles.modellyticsLogo300Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.modellyticsText}>Modellytics</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/ic-forum-24px.png")}
						style={styles.icForum24pxImage}/>
				</View>
				<Image
					source={require("./../../assets/images/-1.png")}
					style={styles.слои1Image}/>
				<Text
					style={styles.companyNameText}>Company Name</Text>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						alignSelf: "flex-start",
						width: 287,
						marginLeft: 42,
						marginTop: 5,
						marginBottom: 17,
					}}>
					<View
						style={styles.rectangle2090View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 15,
							width: 203,
							top: 13,
							bottom: 15,
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 134,
								height: 25,
								marginLeft: 1,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.ellipse109View}/>
							<Text
								style={styles.mainContactText}>Main Contact</Text>
						</View>
						<Text
							style={styles.textText}>+1 23 456789</Text>
						<Text
							style={styles.cityText}>CITY </Text>
						<Text
							style={styles.stateText}>State </Text>
						<Text
							style={styles.zipText}>Zip</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 75,
								height: 25,
								marginLeft: 1,
								marginTop: 32,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.ellipse110View}/>
							<Text
								style={styles.phoneText}>Phone</Text>
						</View>
						<Text
							style={styles.textTwoText}>+1 23 456789</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 68,
								height: 25,
								marginBottom: 2,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/group-589.png")}
								style={styles.group589Image}/>
							<Text
								style={styles.emailText}>Email</Text>
						</View>
						<Text
							style={styles.someoneExampleComText}>someone@example.com</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 19,
							width: 10,
							top: 18,
							height: 243,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-588.png")}
							style={styles.group588Image}/>
						<Image
							source={require("./../../assets/images/group-588.png")}
							style={styles.group588TwoImage}/>
					</View>
					<Text
						style={styles.textThreeText}>+1 23 456789</Text>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 25,
							width: 104,
							top: 114,
							height: 123,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.loremIpsumText}>Lorem ipsum</Text>
						<Text
							style={styles.loremIpsumTwoText}>Lorem ipsum</Text>
						<Text
							style={styles.loremIpsumThreeText}>Lorem ipsum</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 57,
						marginLeft: 35,
						marginRight: 35,
						marginBottom: 9,
					}}>
					<View
						style={styles.rectangle7View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 71,
							right: 78,
							bottom: 14,
							height: 24,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/edit.png")}
							style={styles.editImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.editInformationText}>Edit information</Text>
					</View>
				</View>
				<View
					style={styles.homeIndicatorView}>
					<View
						style={styles.homeIndicatorTwoView}/>
				</View>
			</View>
	}
}
