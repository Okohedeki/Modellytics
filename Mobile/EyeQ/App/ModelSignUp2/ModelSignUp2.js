//
//  ModelSignUp2
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ModelSignUp2StyleSheet"
import { Image, Text, View } from "react-native"


export default class ModelSignUp2 extends React.Component {

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
						alignSelf: "stretch",
						height: 45,
						marginTop: 44,
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
							source={require("./../../assets/images/my-arrow-3.png")}
							style={styles.myArrowImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\modellytics-logo300x-2.png")}
							style={styles.modellyticsLogo300Image}/>
						<Text
							style={styles.modellyticsText}>Modellytics</Text>
					</View>
				</View>
				<Text
					style={styles.demographicInformatText}>Demographic Information</Text>
				<Text
					style={styles.birthdayDateText}>Birthday Date</Text>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 32,
						marginLeft: 37,
						marginRight: 36,
						marginTop: 15,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							width: 79,
							height: 32,
						}}>
						<View
							style={styles.rectangle14View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 14,
								width: 51,
								top: 6,
								height: 23,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.dateText}>Date</Text>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow.png")}
								style={styles.myArrowTwoImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							height: 32,
							marginLeft: 8,
							marginRight: 8,
						}}>
						<View
							style={styles.rectangle21View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 18,
								right: 19,
								top: 6,
								height: 23,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.monthText}>Month</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow.png")}
								style={styles.myArrowThreeImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 107,
							height: 32,
						}}>
						<View
							style={styles.rectangle22View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 29,
								width: 50,
								top: 6,
								height: 23,
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.yearText}>Year</Text>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow.png")}
								style={styles.myArrowFourImage}/>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						width: 104,
						height: 42,
						marginLeft: 30,
						marginTop: 19,
					}}>
					<Text
						style={styles.ethnicityText}>Ethnicity</Text>
					<Text
						style={styles.loremIpsumText}>Lorem ipsum</Text>
				</View>
				<View
					style={styles.lineView}/>
				<Text
					style={styles.heightText}>Height</Text>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 32,
						marginLeft: 55,
						marginRight: 55,
						marginTop: 9,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							width: 79,
							height: 32,
						}}>
						<View
							style={styles.rectangle2014View}/>
						<Text
							style={styles.textFourText}>0</Text>
					</View>
					<Text
						style={styles.ftText}>FT</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							width: 79,
							height: 32,
							marginRight: 9,
						}}>
						<View
							style={styles.rectangle2015View}/>
						<Text
							style={styles.textFiveText}>0</Text>
					</View>
					<Text
						style={styles.inchesText}>Inches</Text>
				</View>
				<Text
					style={styles.weightRangeText}>Weight Range</Text>
				<View
					style={styles.group6View}>
					<View
						style={styles.rectangle72View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 5,
							right: 3,
							top: 0,
							height: 17,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.textText}>0</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle73View}/>
						<Text
							style={styles.textTwoText}>120</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 81,
							right: 30,
							top: 7,
							height: 18,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.ellipse44View}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.ellipse32View}/>
					</View>
				</View>
				<Text
					style={styles.textThreeText}>43 - 60</Text>
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
						style={styles.nextText}>Next</Text>
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
	}
}
