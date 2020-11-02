//
//  Chat1
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./Chat1StyleSheet"
import { Image, Text, View } from "react-native"


export default class Chat1 extends React.Component {

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
						height: 54,
						marginTop: 44,
					}}>
					<View
						style={styles.group110View}>
						<Text
							style={styles.phoneVideoText}>Phone Video</Text>
						<Text
							style={styles.groupVideoText}>Group Video</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.liveVideoText}>Live Video</Text>
						<View
							style={styles.group43View}>
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
									source={require("./../../assets/images/film-2@2x.png")}
									style={styles.filmImage}/>
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
									style={styles.rectangle45View}/>
							</View>
						</View>
						<View
							style={styles.rectangle58View}/>
						<Image
							source={require("./../../assets/images/film@2x.png")}
							style={styles.filmTwoImage}/>
					</View>
					<View
						style={styles.rectangle31View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 42,
							right: 41,
							top: 9,
							height: 35,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-23@2x.png")}
							style={styles.group23Image}/>
						<Text
							style={styles.alexSemeulText}>Alex Semeul</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/group-32@2x.png")}
							style={styles.group32Image}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-end",
						width: 102,
						height: 34,
						marginRight: 28,
						marginTop: 51,
					}}>
					<View
						style={styles.rectangle32View}/>
					<Text
						style={styles.helloJohnText}>Hello John!</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-end",
						width: 191,
						height: 34,
						marginRight: 28,
						marginTop: 3,
					}}>
					<View
						style={styles.rectangle33View}/>
					<Text
						style={styles.iSeeYouAreFromSText}>I see you are from Spain! </Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-end",
						width: 160,
						height: 34,
						marginRight: 28,
						marginTop: 3,
					}}>
					<View
						style={styles.rectangle34View}/>
					<Text
						style={styles.upForAVideoChatText}>Up for a video chat?</Text>
				</View>
				<Text
					style={styles.helloThereText}>Hello There!</Text>
				<Text
					style={styles.iMWalkingHomeText}>I'm walking home</Text>
				<View
					pointerEvents="box-none"
					style={{
						width: 244,
						height: 35,
						marginLeft: 21,
						marginTop: 7,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("./../../assets/images/group-32@2x.png")}
						style={styles.group599Image}/>
					<Text
						style={styles.catchYouBackIn5Text}>Catch you back in 5! Cheers!</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-end",
						width: 122,
						height: 34,
						marginRight: 28,
						marginTop: 13,
					}}>
					<View
						style={styles.rectangle40View}/>
					<Text
						style={styles.sureBeSafeText}>Sure. Be safe!</Text>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("./../../assets/images/group-32@2x.png")}
					style={styles.group600Image}/>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 46,
					}}>
					<View
						style={styles.rectangle29View}/>
					<View
						style={styles.rectangle30View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 35,
							right: 32,
							bottom: 12,
							height: 22,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.typeHereText}>Type here</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/smiling@2x.png")}
							style={styles.smilingImage}/>
					</View>
				</View>
				<View
					style={styles.homeIndicatorView}>
					<View
						style={styles.homeIndicatorTwoView}/>
				</View>
			</View>
	}
}
