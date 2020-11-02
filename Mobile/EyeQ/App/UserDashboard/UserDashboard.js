//
//  UserDashboard
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./UserDashboardStyleSheet"
import { Image, Text, View } from "react-native"


export default class UserDashboard extends React.Component {

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
					style={styles.component1445View}>
					<Image
						source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-15.png")}
						style={styles.group15Image}/>
					<View
						style={styles.group9View}>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\modellytics-logo300x-2.png")}
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
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-end",
						width: 124,
						height: 122,
						marginRight: 124,
						marginTop: 41,
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
					style={styles.userInformationText}>User Information</Text>
				<View
					pointerEvents="box-none"
					style={{
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
						height: 100,
					}}>
					<View
						style={styles.homeIndicatorView}>
						<View
							style={styles.homeIndicatorTwoView}/>
					</View>
					<View
						style={styles.rectangle5View}/>
					<Text
						style={styles.saveChangesText}>Save changes</Text>
				</View>
			</View>
	}
}
