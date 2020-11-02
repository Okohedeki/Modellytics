//
//  SignInMOrA1
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./SignInMOrA1StyleSheet"
import { Image, Text, View } from "react-native"


export default class SignInMOrA1 extends React.Component {

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
				<Image
					source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\turned-on-silver-macbook-on-white-bed-916337.png")}
					style={styles.turnedOnSilverMacImage}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 305,
						top: 287,
						bottom: 102,
						alignItems: "center",
					}}>
					<View
						style={styles.rectangle5View}/>
					<View
						style={styles.rectangle2093View}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.notAMemberSignText}>Not a member? </Text>
				</View>
				<Text
					style={styles.userSignInText}>User Sign In</Text>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: -89,
						width: 429,
						top: -59,
						height: 670,
						alignItems: "flex-start",
					}}>
					<Image
						source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\logo-transparent-background.png")}
						style={styles.logoTransparentBacImage}/>
					<Text
						style={styles.agencySignInText}>Agency Sign In{"\n"}</Text>
				</View>
			</View>
	}
}
