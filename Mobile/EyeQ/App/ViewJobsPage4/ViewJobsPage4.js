//
//  ViewJobsPage4
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ViewJobsPage4StyleSheet"
import { Image, Text, View } from "react-native"


export default class ViewJobsPage4 extends React.Component {

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
						alignItems: "center",
					}}>
					<View
						style={styles.component1423View}>
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
							alignSelf: "stretch",
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
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow.png")}
							style={styles.myArrowTwoImage}/>
					</View>
					<Text
						style={styles.step2Text}>Step 2</Text>
					<Text
						style={styles.pleaseChooseYourFText}>Please Choose Your Facial Attributes</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 96,
							height: 42,
							marginLeft: 33,
							marginTop: 52,
						}}>
						<Text
							style={styles.sexText}>Sex</Text>
						<Text
							style={styles.listEntry1Text}>List Entry # 1</Text>
					</View>
					<View
						style={styles.lineView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 96,
							height: 42,
							marginLeft: 33,
							marginTop: 27,
						}}>
						<Text
							style={styles.ageText}>Age</Text>
						<Text
							style={styles.listEntry1TwoText}>List Entry # 1</Text>
					</View>
					<View
						style={styles.lineTwoView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 96,
							height: 42,
							marginLeft: 33,
							marginTop: 27,
						}}>
						<Text
							style={styles.ehtnicityText}>Ehtnicity</Text>
						<Text
							style={styles.listEntry1ThreeText}>List Entry # 1</Text>
					</View>
					<View
						style={styles.lineThreeView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 96,
							height: 42,
							marginLeft: 33,
							marginTop: 27,
						}}>
						<Text
							style={styles.hairLengthText}>Hair Length</Text>
						<Text
							style={styles.listEntry1FourText}>List Entry # 1</Text>
					</View>
					<View
						style={styles.lineFourView}/>
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
