//
//  DemographicDetails
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./DemographicDetailsStyleSheet"
import { Image, Text, View } from "react-native"


export default class DemographicDetails extends React.Component {

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
						style={styles.component1411View}>
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
					<Text
						style={styles.step5Text}>Step 5</Text>
					<Text
						style={styles.pleaseChooseYourFText}>Please Choose Your Facial Attributes</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 42,
							marginLeft: 34,
							marginRight: 34,
							marginTop: 87,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 96,
								height: 42,
							}}>
							<Text
								style={styles.heightText}>Height</Text>
							<Text
								style={styles.listEntry1Text}>List Entry # 1</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/my-arrow-3.png")}
							style={styles.myArrowThreeImage}/>
						<View
							style={styles.circleView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									bottom: 0,
									height: 19,
								}}>
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
										source={require("./../../assets/images/group-531.png")}
										style={styles.group531Image}/>
								</View>
								<Image
									source={require("./../../assets/images/group-535.png")}
									style={styles.group535Image}/>
							</View>
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
									source={require("./../../assets/images/group-533.png")}
									style={styles.group533Image}/>
							</View>
						</View>
					</View>
					<View
						style={styles.lineView}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 42,
							marginLeft: 34,
							marginRight: 34,
							marginTop: 27,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 96,
								height: 42,
							}}>
							<Text
								style={styles.weightRangeText}>Weight Range</Text>
							<Text
								style={styles.listEntry1TwoText}>List Entry # 1</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/my-arrow-3.png")}
							style={styles.myArrowFourImage}/>
						<View
							style={styles.circleTwoView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									bottom: 0,
									height: 19,
								}}>
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
										source={require("./../../assets/images/group-531.png")}
										style={styles.group531TwoImage}/>
								</View>
								<Image
									source={require("./../../assets/images/group-535.png")}
									style={styles.group535TwoImage}/>
							</View>
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
									source={require("./../../assets/images/group-533.png")}
									style={styles.group533TwoImage}/>
							</View>
						</View>
					</View>
					<View
						style={styles.lineTwoView}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 42,
							marginLeft: 34,
							marginRight: 34,
							marginTop: 27,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 96,
								height: 42,
							}}>
							<Text
								style={styles.bodyTypeText}>Body Type</Text>
							<Text
								style={styles.listEntry1ThreeText}>List Entry # 1</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/my-arrow-3.png")}
							style={styles.myArrowFiveImage}/>
						<View
							style={styles.circleThreeView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									bottom: 0,
									height: 19,
								}}>
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
										source={require("./../../assets/images/group-531.png")}
										style={styles.group531ThreeImage}/>
								</View>
								<Image
									source={require("./../../assets/images/group-535.png")}
									style={styles.group535ThreeImage}/>
							</View>
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
									source={require("./../../assets/images/group-533.png")}
									style={styles.group533ThreeImage}/>
							</View>
						</View>
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
							style={styles.nextText}>Next</Text>
					</View>
				</View>
				<Text
					style={styles.projectInformationText}>Project information</Text>
			</View>
	}
}
