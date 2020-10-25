//
//  FaceSelectionPage1
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./FaceSelectionPage1StyleSheet"
import { Image, Text, View } from "react-native"


export default class FaceSelectionPage1 extends React.Component {

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
						top: 0,
						bottom: 0,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 1,
							right: 0,
							top: 44,
							bottom: 0,
						}}>
						<View
							style={styles.component148View}>
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
							left: 21,
							right: 37,
							top: 145,
							height: 354,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 13,
								marginLeft: 15,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/my-arrow.png")}
								style={styles.myArrowTwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/my-arrow-3.png")}
								style={styles.myArrowThreeImage}/>
						</View>
						<Text
							style={styles.notAMemberSignText}>Not a member? </Text>
						<Text
							style={styles.doYouHaveYourOwnText}>Do you have your own photo or would{"\n"}you like to use our catalog?</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 62,
								marginRight: 4,
								marginTop: 2,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle2030View}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.useCatalogText}>Use Catalog</Text>
						</View>
					</View>
					<Text
						style={styles.faceInformationText}>Face Information</Text>
					<Text
						style={styles.uploadText}>Upload</Text>
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
			</View>
	}
}
