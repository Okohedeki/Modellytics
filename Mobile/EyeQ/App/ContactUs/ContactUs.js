//
//  ContactUs
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ContactUsStyleSheet"
import { Image, Text, View } from "react-native"


export default class ContactUs extends React.Component {

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
					style={styles.component1444View}>
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
						source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-forum-24px.png")}
						style={styles.icForum24pxImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 279,
						marginTop: 1,
					}}>
					<Image
						source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\nopath---copy-19.png")}
						style={styles.nopathCopy19Image}/>
					<View
						style={styles.nopathCopy17View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 22,
							right: 22,
							top: 31,
							height: 248,
							alignItems: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 13,
								marginLeft: 13,
								marginRight: 15,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow-3.png")}
								style={styles.myArrowImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow-2.png")}
								style={styles.myArrowTwoImage}/>
						</View>
						<Text
							style={styles.contactUsText}>Contact Us</Text>
						<View
							style={styles.rectangle2092View}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 59,
							right: 75,
							top: 134,
							height: 112,
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 25,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-604.png")}
								style={styles.group604Image}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.someoneExampleComText}>Someone@example.com</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 139,
								height: 27,
								marginLeft: 3,
								marginTop: 17,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-606.png")}
								style={styles.group606Image}/>
							<Text
								style={styles.textText}>+1 234 56789</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 208,
								height: 26,
								marginLeft: 1,
								marginTop: 17,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\globe.png")}
								style={styles.globeImage}/>
							<Text
								style={styles.wwwMywebsiteComText}>www.mywebsite.com</Text>
						</View>
					</View>
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
