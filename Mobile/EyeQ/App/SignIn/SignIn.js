//
//  SignIn
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./SignInStyleSheet"
import { Image, Text, View } from "react-native"


export default class SignIn extends React.Component {

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

	loginclickSignUp = () => {
		this.props.navigation.navigate('SignUpAOrM')
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
						left: -5,
						right: -5,
						top: 37,
						bottom: -187,
						alignItems: "center",
					}}>
					<Image
						source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\logo-transparent-background.png")}
						style={styles.logoTransparentBacImage}/>
					<Text
						style={styles.userSignInText}>User Sign In</Text>
					<View
						style={styles.rectangle1View}/>
					<View
						style={styles.rectangle2View}/>
					<View
						style={styles.rectangle5View}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.notAMemberSignText} onPress = {this.loginclickSignUp}>Not a member? </Text>
					<View
						style={styles.group3View}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 5,
								right: 5,
								top: 0,
								height: 199,
							}}>
							<Text
								style={styles.notAMemberSignTwoText}>Not a member? </Text>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.rectangle8View}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 27,
									height: 140,
								}}>
								<Text
									style={styles.signUpAsText}>Sign Up As</Text>
								<View
									style={styles.rectangle12View}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 64,
									right: 54,
									top: 120,
									height: 31,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.modelText}>Model</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.agencyText}>Agency</Text>
							</View>
						</View>
						<View
							style={styles.rectangle9View}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 66,
						width: 62,
						top: 452,
						height: 71,
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.usernameText}>Username</Text>
					<Text
						style={styles.passwordText}>Password</Text>
				</View>
				<Text
					style={styles.signInText}>Sign In</Text>
			</View>
	}
}
