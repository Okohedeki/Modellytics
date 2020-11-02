//
//  ViewJobsPage3
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ViewJobsPage3StyleSheet"
import { Image, Text, View } from "react-native"


export default class ViewJobsPage3 extends React.Component {

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
					}}>
					<View
						style={styles.component1416View}>
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
							marginLeft: 36,
							marginRight: 37,
							marginTop: 56,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow.png")}
							style={styles.myArrowImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow-2.png")}
							style={styles.myArrowTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 104,
							height: 56,
							marginLeft: 59,
							marginTop: 36,
						}}>
						<Text
							style={styles.jobOneText}>Job One</Text>
						<Text
							style={styles.jobTitleText}>Job Title</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 306,
							marginLeft: 44,
							marginRight: 43,
							marginTop: 13,
						}}>
						<View
							style={styles.rectangle22View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								width: 289,
								top: 0,
								height: 306,
								alignItems: "center",
							}}>
							<View
								style={styles.rectangle23View}/>
							<View
								style={styles.rectangle24View}/>
							<View
								style={styles.rectangle2035View}/>
							<View
								style={styles.rectangle2036View}/>
							<View
								style={styles.rectangle2037View}/>
							<View
								style={styles.rectangle2038View}/>
							<View
								style={styles.rectangle2039View}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 17,
								right: 55,
								top: 0,
								height: 306,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 91,
									height: 289,
									marginTop: 10,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.stateText}>State</Text>
								<Text
									style={styles.cityText}>City</Text>
								<Text
									style={styles.zipCodeText}>Zip Code</Text>
								<Text
									style={styles.categoryText}>Category</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 91,
										height: 121,
										marginTop: 11,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.approxJobLengthText}>Approx Job{"\n"}Length</Text>
									<View
										pointerEvents="box-none"
										style={{
											width: 87,
											height: 77,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.experienceLevelText}>Experience{"\n"}Level</Text>
										<Text
											style={styles.salaryText}>Salary</Text>
									</View>
								</View>
							</View>
							<View
								style={styles.rectangle29View}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 89,
									height: 284,
									marginTop: 11,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.albaniaText}>Albania</Text>
								<Text
									style={styles.loremIpsumText}>Lorem Ipsum</Text>
								<Text
									style={styles.textText}>40100</Text>
								<Text
									style={styles.loremIpsumTwoText}>Lorem Ipsum</Text>
								<Text
									style={styles.monthsText}>3 - 5 Months</Text>
								<Text
									style={styles.intermediateText}>Intermediate</Text>
								<Text
									style={styles.textTwoText}>$400</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
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
							style={styles.finishText}>Finish</Text>
					</View>
				</View>
				<Text
					style={styles.projectInformationText}>Project information</Text>
			</View>
	}
}
