//
//  EditJobsPage33
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./EditJobsPage33StyleSheet"
import { Image, Text, View } from "react-native"


export default class EditJobsPage33 extends React.Component {

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
						style={styles.component1434View}>
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
							height: 13,
							marginLeft: 35,
							marginRight: 37,
							marginTop: 56,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow-2.png")}
							style={styles.myArrowImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/my-arrow-4.png")}
							style={styles.myArrowTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 104,
							height: 56,
							marginLeft: 58,
							marginTop: 36,
						}}>
						<Text
							style={styles.jobOneText}>Job One</Text>
						<Text
							style={styles.jobTitleText}>Job Title</Text>
					</View>
					<Text
						style={styles.descriptionText}>Description</Text>
					<View
						style={styles.rectangle22View}/>
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
