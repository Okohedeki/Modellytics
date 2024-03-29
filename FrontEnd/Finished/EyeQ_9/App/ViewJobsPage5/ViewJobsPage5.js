//
//  ViewJobsPage5
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ViewJobsPage5StyleSheet"
import { Image, Text, View } from "react-native"


export default class ViewJobsPage5 extends React.Component {

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
						position: "absolute",
						left: 0,
						right: 0,
						top: 44,
						bottom: 0,
					}}>
					<View
						style={styles.component1424View}>
						<Image
							source={require("C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ\assets\images\group-15@2x copy 2@2x.png")}
							style={styles.group15Image}/>
						<View
							style={styles.group9View}>
							<Image
								source={require("C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ\assets\images\modellytics-logo300x-2@2x.png")}
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
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-forum-24px@2x.png")}
							style={styles.icForum24pxImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 13,
							marginLeft: 35,
							marginRight: 37,
							marginTop: 56,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ\assets\images\my-arrow-2@2x.png")}
							style={styles.myArrowImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow-3@2x.png")}
							style={styles.myArrowTwoImage}/>
					</View>
					<Text
						style={styles.step2Text}>Step 2</Text>
					<Text
						style={styles.pleaseChooseYourFText}>Please Choose Your Facial Attributes</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 341,
							marginLeft: 8,
							marginRight: 7,
							marginTop: 46,
						}}>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\union-2@2x.png")}
							style={styles.union2Image}/>
						<View
							style={styles.ellipse48View}/>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ellipse-49@2x.png")}
							style={styles.ellipse49Image}/>
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
				<Text
					style={styles.projectInformationText}>Project information</Text>
			</View>
	}
}
