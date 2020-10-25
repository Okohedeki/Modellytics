//
//  AboutUs
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./AboutUsStyleSheet"
import { Image, Text, View } from "react-native"


export default class AboutUs extends React.Component {

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
					style={styles.component1442View}>
					<Image
						source={require("./../../assets/images/group-15.png")}
						style={styles.group15Image}/>
					<View
						style={styles.group9View}>
						<Image
							source={require("./../../assets/images/modellytics-logo300x.png")}
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
						flex: 1,
						marginTop: 1,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 15,
						}}>
						<Image
							source={require("./../../assets/images/nopath---copy-19.png")}
							style={styles.nopathCopy19Image}/>
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
					<View
						style={styles.nopathCopy17View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 22,
							right: 22,
							top: 31,
							height: 601,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 13,
								marginLeft: 13,
								marginRight: 15,
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
								source={require("./../../assets/images/my-arrow-2.png")}
								style={styles.myArrowTwoImage}/>
						</View>
						<Text
							style={styles.aboutUsText}>About Us</Text>
						<View
							style={styles.rectangle2092View}/>
					</View>
					<View
						style={styles.group603View}>
						<Text
							style={styles.introductionText}>Introduction</Text>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginTop: 2,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									width: 106,
									top: 100,
									height: 279,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.aimsGoalsText}>Aims & Goals</Text>
								<Text
									style={styles.motivationText}>Motivation</Text>
								<Text
									style={styles.purposeText}>Purpose</Text>
							</View>
							<Text
								style={styles.loremIpsumDolorSiText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Text>
							<Text
								style={styles.loremIpsumDolorSiTwoText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Text>
							<Text
								style={styles.loremIpsumDolorSiThreeText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Text>
							<Text
								style={styles.loremIpsumDolorSiFourText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Text>
						</View>
					</View>
				</View>
			</View>
	}
}
