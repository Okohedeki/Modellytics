//
//  ModelSignUp3
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ModelSignUp3StyleSheet"
import { Image, Text, View } from "react-native"


export default class ModelSignUp3 extends React.Component {

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
						left: -1,
						right: 0,
						top: 44,
						bottom: 0,
						alignItems: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 45,
							marginLeft: 1,
						}}>
						<View
							style={styles.rectangle2009View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 26,
								right: 28,
								top: 12,
								height: 20,
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
								source={require("./../../assets/images/modellytics-logo300x.png")}
								style={styles.modellyticsLogo300Image}/>
							<Text
								style={styles.modellyticsText}>Modellytics</Text>
						</View>
					</View>
					<Text
						style={styles.demographicInformatText}>Demographic Information</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 104,
							height: 42,
							marginLeft: 31,
							marginTop: 77,
						}}>
						<Text
							style={styles.cityText}>City</Text>
						<Text
							style={styles.loremIpsumText}>Lorem ipsum</Text>
					</View>
					<View
						style={styles.lineView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 104,
							height: 42,
							marginLeft: 31,
							marginTop: 27,
						}}>
						<Text
							style={styles.stateText}>State</Text>
						<Text
							style={styles.loremIpsumTwoText}>Lorem ipsum</Text>
					</View>
					<View
						style={styles.lineTwoView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 104,
							height: 42,
							marginLeft: 31,
							marginTop: 27,
						}}>
						<Text
							style={styles.zipText}>ZIP</Text>
						<Text
							style={styles.loremIpsumThreeText}>Lorem ipsum</Text>
					</View>
					<View
						style={styles.lineThreeView}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 57,
							marginBottom: 10,
						}}>
						<View
							style={styles.rectangle5View}/>
						<Text
							style={styles.finishText}>Finish</Text>
					</View>
					<Text
						style={styles.alreadyAMemberSText}>Already a member?  </Text>
					<Text
						style={styles.copyright2015201Text}>Copyright © 2015–2016 LAMODA inc</Text>
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
						alignSelf: "center",
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						style={styles.group7View}>
						<Image
							source={require("./../../assets/images/background.png")}
							style={styles.backgroundImage}/>
						<Image
							source={require("./../../assets/images/objects.png")}
							style={styles.objectsImage}/>
					</View>
				</View>
			</View>
	}
}
