//
//  Settings
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./SettingsStyleSheet"
import { Image, Text, View } from "react-native"


export default class Settings extends React.Component {

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
					style={styles.component1438View}>
					<Image
						source={require("./../../assets/images/group-15.png")}
						style={styles.group15Image}/>
					<View
						style={styles.group9View}>
						<Image
							source={require("./../../assets/images/modellytics-logo300x-3.png")}
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
						width: 201,
						height: 27,
						marginLeft: 46,
						marginTop: 48,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("./../../assets/images/group-591.png")}
						style={styles.group591Image}/>
					<Text
						style={styles.membershipDetailsText}>Membership Details</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						width: 107,
						height: 25,
						marginLeft: 48,
						marginTop: 13,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("./../../assets/images/user-1.png")}
						style={styles.user1Image}/>
					<Text
						style={styles.accountText}>Account</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						width: 140,
						height: 26,
						marginLeft: 48,
						marginTop: 14,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.bellView}>
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
							<Image
								source={require("./../../assets/images/group-593.png")}
								style={styles.group593Image}/>
						</View>
						<Image
							source={require("./../../assets/images/group-595.png")}
							style={styles.group595Image}/>
					</View>
					<Text
						style={styles.notificationsText}>Notifications</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						width: 95,
						height: 25,
						marginLeft: 48,
						marginTop: 14,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("./../../assets/images/group-597.png")}
						style={styles.group597Image}/>
					<Text
						style={styles.logoutText}>Logout</Text>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.homeIndicatorView}>
					<View
						style={styles.homeIndicatorTwoView}/>
				</View>
			</View>
	}
}
