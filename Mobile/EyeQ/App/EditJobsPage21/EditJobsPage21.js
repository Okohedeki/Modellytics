//
//  EditJobsPage21
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./EditJobsPage21StyleSheet"
import { Image, Text, View } from "react-native"


export default class EditJobsPage21 extends React.Component {

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
						style={styles.component1427View}>
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
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow-2.png")}
							style={styles.myArrowThreeImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\my-arrow.png")}
							style={styles.myArrowFourImage}/>
					</View>
					<Text
						style={styles.selectAProjectFroText}>Select a project from{"\n"}the drop down below</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 42,
							marginLeft: 34,
							marginRight: 34,
							marginTop: 31,
						}}>
						<Text
							style={styles.projectNameText}>Project Name</Text>
						<View
							style={styles.rectangle2033View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 17,
								height: 25,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.listEntry1Text}>List Entry # 1</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/my-arrow-3.png")}
								style={styles.myArrowImage}/>
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
					</View>
					<View
						style={styles.lineView}/>
					<Text
						style={styles.selectAJobFromThText}>Select a job from{"\n"}the drop down below</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 42,
							marginLeft: 34,
							marginRight: 34,
							marginTop: 50,
						}}>
						<Text
							style={styles.jobNamesText}>Job Names</Text>
						<View
							style={styles.rectangle2034View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 17,
								height: 25,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.listEntry1TwoText}>List Entry # 1</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/my-arrow-3.png")}
								style={styles.myArrowTwoImage}/>
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
					</View>
					<View
						style={styles.lineTwoView}/>
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
