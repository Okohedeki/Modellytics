//
//  SignUpSuccessfulCopy
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./SignUpSuccessfulCopyStyleSheet"
import { Image, Text, View } from "react-native"


export default class SignUpSuccessfulCopy extends React.Component {

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
							source={require("./../../assets/images/my-arrow.png")}
							style={styles.myArrowImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/modellytics-logo300x.png")}
							style={styles.modellyticsLogo300Image}/>
						<Text
							style={styles.modellyticsText}>Modellytics</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-end",
						width: 285,
						height: 332,
						marginRight: 18,
						marginTop: 119,
					}}>
					<Text
						style={styles.successText}>Success</Text>
					<View
						style={styles.group7View}>
						<Image
							source={require("./../../assets/images/background.png")}
							style={styles.backgroundImage}/>
						<Image
							source={require("./../../assets/images/objects.png")}
							style={styles.objectsImage}/>
					</View>
				</View>
				<Text
					style={styles.youHaveSignedUpSText}>You have signed up successfully.{"\n"}Please proceed to the Sign In Page.</Text>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 57,
						marginBottom: 11,
					}}>
					<View
						style={styles.rectangle5View}/>
					<Text
						style={styles.signInText}>Sign In</Text>
				</View>
				<View
					style={styles.homeIndicatorView}>
					<View
						style={styles.homeIndicatorTwoView}/>
				</View>
			</View>
	}
}
