//
//  MeetTheTeam
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./MeetTheTeamStyleSheet"
import { Image, Text, View } from "react-native"


export default class MeetTheTeam extends React.Component {

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
						style={styles.component1443View}>
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
							height: 393,
							marginTop: 1,
						}}>
						<Image
							source={require("./../../assets/images/nopath---copy-19.png")}
							style={styles.nopathCopy19Image}/>
						<View
							style={styles.nopathCopy17View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 35,
								right: 34,
								top: 31,
								height: 362,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 13,
									marginRight: 3,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/my-arrow-2.png")}
									style={styles.myArrowImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/my-arrow.png")}
									style={styles.myArrowTwoImage}/>
							</View>
							<Text
								style={styles.meetTheTeamText}>Meet the Team</Text>
							<View
								style={styles.rectangle2091View}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 53,
								right: 53,
								top: 123,
								height: 248,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 83,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/nopath---copy-20.png")}
									style={styles.nopathCopy20Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/nopath---copy-24.png")}
									style={styles.nopathCopy24Image}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 22,
									marginLeft: 15,
									marginRight: 3,
									marginTop: 3,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.andrewText}>Andrew</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.samanthaText}>Samantha</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 83,
									marginTop: 32,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/nopath---copy-22-4.png")}
									style={styles.nopathCopy22Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/nopath---copy-23.png")}
									style={styles.nopathCopy23Image}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 22,
									marginLeft: 3,
									marginRight: 12,
									marginTop: 3,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.davidPekaText}>David Peka</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.khalidPText}>Khalid P</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 58,
								right: 59,
								top: 228,
								height: 152,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 12,
									marginLeft: 3,
									marginRight: 12,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.ceoAndDirectorText}>CEO and Director</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.artDirectorText}>Art Director</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 12,
									marginTop: 128,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.headOfMarketingText}>Head of Marketing</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.realEstateHeadText}>Real Estate Head</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 42,
							marginLeft: 52,
							marginRight: 73,
							marginTop: 35,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/nopath---copy-22-5.png")}
							style={styles.nopathCopy22TwoImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 41,
								height: 29,
								marginLeft: 8,
								marginTop: 1,
							}}>
							<Text
								style={styles.davidText}>David</Text>
							<Text
								style={styles.cfoText}>CFO</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/nopath---copy-22-2.png")}
							style={styles.nopathCopy22FiveImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 38,
								height: 29,
								marginTop: 1,
							}}>
							<Text
								style={styles.alexaText}>Alexa</Text>
							<Text
								style={styles.logisticsText}>Logistics</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 42,
							marginLeft: 52,
							marginRight: 57,
							marginTop: 11,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/nopath---copy-22-6.png")}
							style={styles.nopathCopy22ThreeImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 77,
								height: 29,
								marginLeft: 8,
								marginTop: 1,
							}}>
							<Text
								style={styles.shingMauText}>Shing Mau</Text>
							<Text
								style={styles.technicalManagerText}>Technical Manager</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/nopath---copy-22.png")}
							style={styles.nopathCopy22FourImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 54,
								height: 29,
								marginTop: 1,
							}}>
							<Text
								style={styles.jivDiyaText}>Jiv Diya</Text>
							<Text
								style={styles.hrManagerText}>HR Manager</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 42,
							marginLeft: 119,
							marginRight: 119,
							marginBottom: 77,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/nopath---copy-22-3.png")}
							style={styles.nopathCopy22SixImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 89,
								height: 29,
								marginBottom: 12,
							}}>
							<Text
								style={styles.vikramKabirText}>Vikram Kabir</Text>
							<Text
								style={styles.publicationsHeadText}>Publications Head</Text>
						</View>
					</View>
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
						width: 83,
						top: 213,
						height: 248,
						alignItems: "center",
					}}>
					<Image
						source={require("./../../assets/images/nopath---copy-21.png")}
						style={styles.nopathCopy21Image}/>
					<Text
						style={styles.alexPText}>Alex P.</Text>
					<Image
						source={require("./../../assets/images/nopath---copy-25.png")}
						style={styles.nopathCopy25Image}/>
					<Text
						style={styles.michelleText}>Michelle</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 65,
						top: 318,
						height: 152,
						alignItems: "center",
					}}>
					<Text
						style={styles.coFounderText}>Co Founder</Text>
					<Text
						style={styles.headOfFinanceText}>Head of Finance</Text>
				</View>
			</View>
	}
}
