//
//  PhotosChoose
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./PhotosChooseStyleSheet"
import { Image, Text, View } from "react-native"


export default class PhotosChoose extends React.Component {

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
						style={styles.component1420View}>
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
							height: 123,
							marginLeft: 1,
							marginTop: 9,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/rectangle-2040.png")}
							style={styles.rectangle2040Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/rectangle-2042.png")}
							style={styles.rectangle2042Image}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 123,
							marginLeft: 1,
							marginTop: 2,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/rectangle-2043.png")}
							style={styles.rectangle2043Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/rectangle-2045.png")}
							style={styles.rectangle2045Image}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 123,
							marginLeft: 1,
							marginTop: 2,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/rectangle-2049.png")}
							style={styles.rectangle2049Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/rectangle-2051.png")}
							style={styles.rectangle2051Image}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 123,
							marginLeft: 1,
							marginTop: 2,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/rectangle-2046.png")}
							style={styles.rectangle2046Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/rectangle-2048.png")}
							style={styles.rectangle2048Image}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 214,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 1,
								right: 0,
								bottom: 0,
								height: 214,
								justifyContent: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 123,
									marginBottom: 47,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-2052.png")}
									style={styles.rectangle2052Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/rectangle-2054.png")}
									style={styles.rectangle2054Image}/>
							</View>
							<View
								style={styles.homeIndicatorView}>
								<View
									style={styles.homeIndicatorTwoView}/>
							</View>
						</View>
						<View
							style={styles.rectangle5View}/>
						<View
							style={styles.ellipse47View}/>
						<Text
							style={styles.textText}>1</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 123,
						top: 98,
						bottom: 58,
						alignItems: "center",
					}}>
					<Image
						source={require("./../../assets/images/rectangle-2041.png")}
						style={styles.rectangle2041Image}/>
					<Image
						source={require("./../../assets/images/rectangle-2044.png")}
						style={styles.rectangle2044Image}/>
					<Image
						source={require("./../../assets/images/rectangle-2050.png")}
						style={styles.rectangle2050Image}/>
					<Image
						source={require("./../../assets/images/rectangle-2047.png")}
						style={styles.rectangle2047Image}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/rectangle-2053.png")}
						style={styles.rectangle2053Image}/>
					<Text
						style={styles.selectText}>Select</Text>
				</View>
				<View
					style={styles.rectangle2044View}/>
				<Image
					source={require("./../../assets/images/group-544.png")}
					style={styles.group544Image}/>
			</View>
	}
}
