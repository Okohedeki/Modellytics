//
//  NoPhoto
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./NoPhotoStyleSheet"
import { Image, Text, View } from "react-native"


export default class NoPhoto extends React.Component {

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
						left: -5,
						right: -5,
						top: 0,
						bottom: -1,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 5,
							right: 5,
							top: 44,
							bottom: 1,
						}}>
						<View
							style={styles.component1417View}>
							<Image
								source={require("./../../assets/images/group-15.png")}
								style={styles.group15Image}/>
							<View
								style={styles.group9View}>
								<Image
									source={require("./../../assets/images/modellytics-logo300x-2.png")}
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
						<Text
							style={styles.step3Text}>Step 3</Text>
						<Text
							style={styles.descriptionText}>Description</Text>
						<Text
							style={styles.loremIpsumDolorSiText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</Text>
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
						style={styles.rectangle5View}/>
					<Text
						style={styles.nextText}>Next</Text>
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
						<View
							style={styles.rectangle2011View}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 145,
							bottom: 0,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 13,
								marginLeft: 40,
								marginRight: 42,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/my-arrow-2.png")}
								style={styles.myArrowTwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/my-arrow.png")}
								style={styles.myArrowThreeImage}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group3View}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 5,
									right: 5,
									top: 0,
									bottom: 0,
								}}>
								<Text
									style={styles.notAMemberSignText}>Not a member? </Text>
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
									<View
										style={styles.rectangle8View}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 32,
										width: 312,
										top: 22,
										height: 155,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.confirmationText}>Confirmation</Text>
									<Text
										style={styles.bySelectingNoYouText}>By selecting no you will not be able to use{"\n"}our Facial Recoginition Search Engine. {"\n"}Do you WIsh to Continue?{"\n"}</Text>
								</View>
								<View
									style={styles.rectangle12View}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 77,
										right: 79,
										bottom: 37,
										height: 31,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.yesText}>Yes</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.noText}>No</Text>
								</View>
							</View>
							<View
								style={styles.rectangle9View}/>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 308,
						top: 139,
						height: 370,
						alignItems: "center",
					}}>
					<Text
						style={styles.projectInformationText}>Project information</Text>
					<View
						style={styles.rectangle2029View}/>
				</View>
			</View>
	}
}
