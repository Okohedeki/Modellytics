//
//  ModelSignUp1
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ModelSignUp1StyleSheet"
import { Image, Text, View } from "react-native"


export default class ModelSignUp1 extends React.Component {

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
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 45,
						marginTop: 44,
					}}>
					<View
						style={styles.rectangle2009View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 26,
							right: 28,
							top: 12,
							height: 20,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow.png")}
							style={styles.myArrowImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/modellytics-logo300x-3.png")}
							style={styles.modellyticsLogo300Image}/>
						<Text
							style={styles.modellyticsText}>Modellytics</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-end",
						width: 124,
						height: 122,
						marginRight: 124,
						marginTop: 29,
					}}>
					<Image
						source={require("./../../assets/images/ellipse-2.png")}
						style={styles.ellipse2Image}/>
					<Image
						source={require("./../../assets/images/ellipse-3.png")}
						style={styles.ellipse3Image}/>
					<Image
						source={require("./../../assets/images/group-4.png")}
						style={styles.group4Image}/>
				</View>
				<Text
					style={styles.basicInformationText}>Basic Information</Text>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 99,
						height: 42,
						marginLeft: 30,
						marginTop: 23,
					}}>
					<Text
						style={styles.aaronSmithText}>Aaron Smith</Text>
					<Text
						style={styles.usernameText}>Username</Text>
				</View>
				<View
					style={styles.lineView}/>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 202,
						height: 42,
						marginLeft: 30,
						marginTop: 27,
					}}>
					<Text
						style={styles.someoneExampleComText}>Someone@example.com</Text>
					<Text
						style={styles.emailText}>Email</Text>
				</View>
				<View
					style={styles.lineTwoView}/>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 60,
						height: 42,
						marginLeft: 30,
						marginTop: 27,
					}}>
					<Text
						style={styles.textText}>•••••••••</Text>
					<Text
						style={styles.passwordText}>Password</Text>
				</View>
				<View
					style={styles.lineThreeView}/>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 110,
						height: 42,
						marginLeft: 30,
						marginTop: 27,
					}}>
					<Text
						style={styles.textTwoText}>•••••••••</Text>
					<Text
						style={styles.confirmPasswordText}>Confirm Password</Text>
				</View>
				<View
					style={styles.lineFourView}/>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 57,
						marginBottom: 10,
					}}>
					<View
						style={styles.rectangle5View}/>
					<Text
						style={styles.nextText}>Next</Text>
				</View>
				<Text
					style={styles.alreadyAMemberSText}>Already a member?  </Text>
				<Text
					style={styles.copyright2015201Text}>Copyright © 2015–2016 LAMODA inc</Text>
				<View
					style={styles.homeIndicatorView}>
					<View
						style={styles.homeIndicatorTwoView}/>
				</View>
			</View>
	}
}
