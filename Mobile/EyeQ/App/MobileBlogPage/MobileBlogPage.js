//
//  MobileBlogPage
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./MobileBlogPageStyleSheet"
import { Image, Text, View } from "react-native"


export default class MobileBlogPage extends React.Component {

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
					style={styles.component1441View}>
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
						height: 363,
						marginTop: 1,
					}}>
					<Image
						source={require("./../../assets/images/nopath---copy-16.png")}
						style={styles.nopathCopy16Image}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 35,
							right: 37,
							top: 31,
							height: 13,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/my-arrow-3.png")}
							style={styles.myArrowImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow.png")}
							style={styles.myArrowTwoImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 282,
						height: 67,
						marginLeft: 30,
						marginTop: 20,
					}}>
					<Text
						style={styles.july12020Text}>July 1, 2020</Text>
					<Text
						style={styles.areYouWorkingInAText}>Are you working in a Restaurant?Here are a few tips during this time.</Text>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 272,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							bottom: 0,
							height: 272,
							justifyContent: "flex-end",
						}}>
						<Text
							style={styles.loremIpsumDolorSiText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Text>
						<View
							style={styles.homeIndicatorView}>
							<View
								style={styles.homeIndicatorTwoView}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 30,
							right: 45,
							bottom: 42,
							height: 79,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.textText}>"</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.loremIpsumDolorSiTwoText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut {"\n"}labore et dolore </Text>
					</View>
					<Text
						style={styles.textTwoText}>"</Text>
				</View>
			</View>
	}
}
