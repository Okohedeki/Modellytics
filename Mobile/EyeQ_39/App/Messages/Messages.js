//
//  Messages
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./MessagesStyleSheet"
import { Image, Text, View } from "react-native"


export default class Messages extends React.Component {

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
					}}>
					<View
						style={styles.component1439View}>
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
							source={require("./../../assets/images/edit-2.png")}
							style={styles.editImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 260,
							height: 32,
							marginLeft: 58,
							marginTop: 23,
						}}>
						<View
							style={styles.rectangle11View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 16,
								width: 73,
								top: 7,
								height: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-1.png")}
								style={styles.group1Image}/>
							<Text
								style={styles.searchText}>Search</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 65,
							marginLeft: 23,
							marginRight: 35,
							marginTop: 27,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/ellipse-13.png")}
							style={styles.ellipse13Image}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 62,
								marginLeft: 11,
								marginRight: 16,
								marginTop: 3,
							}}>
							<Text
								style={styles.alexSemeulText}>Alex Semeul</Text>
							<Text
								style={styles.loremIpsumDolorSiText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
						</View>
						<Image
							source={require("./../../assets/images/trash.png")}
							style={styles.trashImage}/>
					</View>
					<View
						style={styles.rectangle70View}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 65,
							marginLeft: 23,
							marginRight: 35,
							marginTop: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/ellipse-14.png")}
							style={styles.ellipse14Image}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 62,
								marginLeft: 11,
								marginRight: 16,
								marginTop: 3,
							}}>
							<Text
								style={styles.peterPText}>Peter P.</Text>
							<Text
								style={styles.loremIpsumDolorSiTwoText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
						</View>
						<Image
							source={require("./../../assets/images/trash.png")}
							style={styles.trashTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 155,
							height: 20,
							marginLeft: 110,
							marginTop: 8,
						}}>
						<Text
							style={styles.textText}> </Text>
						<View
							style={styles.rectangle71View}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 62,
							marginLeft: 86,
							marginRight: 69,
							marginTop: 16,
						}}>
						<Text
							style={styles.dwayenText}>Dwayen</Text>
						<Text
							style={styles.loremIpsumDolorSiThreeText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
					</View>
					<View
						style={styles.rectangle72View}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 65,
							marginLeft: 23,
							marginRight: 35,
							marginTop: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/ellipse-16.png")}
							style={styles.ellipse16Image}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 62,
								marginLeft: 11,
								marginRight: 16,
								marginTop: 3,
							}}>
							<Text
								style={styles.lisaSaltText}>Lisa Salt</Text>
							<Text
								style={styles.loremIpsumDolorSiFourText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
						</View>
						<Image
							source={require("./../../assets/images/trash.png")}
							style={styles.trashFourImage}/>
					</View>
					<View
						style={styles.rectangle73View}/>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							marginLeft: 23,
							marginRight: 35,
							marginTop: 26,
							marginBottom: 9,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/ellipse-17.png")}
							style={styles.ellipse17Image}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								alignSelf: "stretch",
								marginLeft: 11,
								marginRight: 16,
								marginTop: 3,
							}}>
							<Text
								style={styles.rabiAurushText}>Rabi Aurush</Text>
							<Text
								style={styles.loremIpsumDolorSiFiveText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
						</View>
						<Image
							source={require("./../../assets/images/trash.png")}
							style={styles.trashFiveImage}/>
					</View>
					<View
						style={styles.rectangle74View}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 65,
							marginLeft: 23,
							marginRight: 35,
							marginBottom: 9,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/ellipse-18.png")}
							style={styles.ellipse18Image}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 62,
								marginLeft: 11,
								marginRight: 16,
							}}>
							<Text
								style={styles.kimMorganText}>Kim Morgan</Text>
							<Text
								style={styles.loremIpsumDolorSiSixText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
						</View>
						<Image
							source={require("./../../assets/images/trash.png")}
							style={styles.trashSixImage}/>
					</View>
					<View
						style={styles.rectangle130View}/>
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
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 52,
							marginLeft: 23,
							marginRight: 35,
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/ellipse-15.png")}
							style={styles.ellipse15Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/trash.png")}
							style={styles.trashThreeImage}/>
					</View>
				</View>
			</View>
	}
}
