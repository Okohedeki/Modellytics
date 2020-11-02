//
//  ViewApplicantsPage3
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ViewApplicantsPage3StyleSheet"
import { Image, Text, View } from "react-native"


export default class ViewApplicantsPage3 extends React.Component {

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
						style={styles.component1431View}>
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
							marginLeft: 35,
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
						style={styles.jobOneText}>Job One</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 163,
							marginLeft: 13,
							marginRight: 13,
							marginTop: 3,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 113,
								height: 163,
							}}>
							<View
								style={styles.rectangle2056View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									width: 113,
									top: 0,
									height: 153,
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-2057.png")}
									style={styles.rectangle2057Image}/>
								<Text
									style={styles.avidloveText}>AVIDLOVE</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 6,
									width: 102,
									top: 108,
									height: 55,
									alignItems: "flex-start",
								}}>
								<View
									style={styles.ellipse77View}/>
								<Text
									style={styles.шубаИзМехаНоркиText}>шуба из меха норки</Text>
							</View>
							<View
								style={styles.ellipse78View}/>
							<Text
								style={styles.textText}>200 000</Text>
							<Text
								style={styles.рублеиText}>рублей</Text>
						</View>
						<Text
							style={styles.avidloveFourText}>AVIDLOVE</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 38,
								height: 38,
								marginRight: 10,
								marginTop: 107,
							}}>
							<View
								style={styles.ellipse79View}/>
							<View
								style={styles.ellipse80View}/>
							<Text
								style={styles.textFourText}>200 000</Text>
							<Text
								style={styles.рублеиFourText}>рублей</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 113,
								height: 163,
							}}>
							<View
								style={styles.rectangle2060View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									width: 113,
									top: 0,
									height: 153,
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-2067.png")}
									style={styles.rectangle2061Image}/>
								<Text
									style={styles.avidloveSevenText}>AVIDLOVE</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 5,
									width: 102,
									top: 108,
									height: 55,
									alignItems: "flex-end",
								}}>
								<View
									style={styles.ellipse81View}/>
								<Text
									style={styles.шубаИзМехаНоркиSevenText}>шуба из меха норки</Text>
							</View>
							<View
								style={styles.ellipse82View}/>
							<Text
								style={styles.textSevenText}>200 000</Text>
							<Text
								style={styles.рублеиSevenText}>рублей</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 163,
							marginLeft: 13,
							marginRight: 13,
							marginTop: 14,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 113,
								height: 163,
							}}>
							<View
								style={styles.rectangle2066View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									width: 113,
									top: 0,
									height: 153,
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-2067.png")}
									style={styles.rectangle2067Image}/>
								<Text
									style={styles.avidloveTwoText}>AVIDLOVE</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 6,
									width: 102,
									top: 108,
									height: 55,
									alignItems: "flex-start",
								}}>
								<View
									style={styles.ellipse87View}/>
								<Text
									style={styles.шубаИзМехаНоркиTwoText}>шуба из меха норки</Text>
							</View>
							<View
								style={styles.ellipse88View}/>
							<Text
								style={styles.textTwoText}>200 000</Text>
							<Text
								style={styles.рублеиTwoText}>рублей</Text>
						</View>
						<Text
							style={styles.avidloveFiveText}>AVIDLOVE</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 38,
								height: 38,
								marginRight: 10,
								marginTop: 107,
							}}>
							<View
								style={styles.ellipse85View}/>
							<View
								style={styles.ellipse86View}/>
							<Text
								style={styles.textFiveText}>200 000</Text>
							<Text
								style={styles.рублеиFiveText}>рублей</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 113,
								height: 163,
							}}>
							<View
								style={styles.rectangle2062View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									width: 113,
									top: 0,
									height: 153,
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-2067.png")}
									style={styles.rectangle2063Image}/>
								<Text
									style={styles.avidloveEightText}>AVIDLOVE</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 5,
									width: 102,
									top: 108,
									height: 55,
									alignItems: "flex-end",
								}}>
								<View
									style={styles.ellipse84View}/>
								<Text
									style={styles.шубаИзМехаНоркиEightText}>шуба из меха норки</Text>
							</View>
							<View
								style={styles.ellipse83View}/>
							<Text
								style={styles.textEightText}>200 000</Text>
							<Text
								style={styles.рублеиEightText}>рублей</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 163,
							marginLeft: 13,
							marginRight: 13,
							marginBottom: 35,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 113,
								height: 163,
							}}>
							<View
								style={styles.rectangle2072View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									width: 113,
									bottom: 10,
									height: 153,
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-2067.png")}
									style={styles.rectangle2073Image}/>
								<Text
									style={styles.avidloveThreeText}>AVIDLOVE</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 6,
									width: 102,
									bottom: 0,
									height: 55,
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.ellipse93View}/>
								<Text
									style={styles.шубаИзМехаНоркиThreeText}>шуба из меха норки</Text>
							</View>
							<View
								style={styles.ellipse94View}/>
							<Text
								style={styles.textThreeText}>200 000</Text>
							<Text
								style={styles.рублеиThreeText}>рублей</Text>
						</View>
						<Text
							style={styles.avidloveSixText}>AVIDLOVE</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 38,
								height: 38,
								marginRight: 10,
								marginBottom: 18,
							}}>
							<View
								style={styles.ellipse91View}/>
							<View
								style={styles.ellipse92View}/>
							<Text
								style={styles.textSixText}>200 000</Text>
							<Text
								style={styles.рублеиSixText}>рублей</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 113,
								height: 163,
							}}>
							<View
								style={styles.rectangle2068View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									width: 113,
									bottom: 10,
									height: 153,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-2067.png")}
									style={styles.rectangle2069Image}/>
								<Text
									style={styles.avidloveNineText}>AVIDLOVE</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 5,
									width: 102,
									bottom: 0,
									height: 55,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<View
									style={styles.ellipse90View}/>
								<Text
									style={styles.шубаИзМехаНоркиNineText}>шуба из меха норки</Text>
							</View>
							<View
								style={styles.ellipse89View}/>
							<Text
								style={styles.textNineText}>200 000</Text>
							<Text
								style={styles.рублеиNineText}>рублей</Text>
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
						width: 191,
						top: 139,
						bottom: 80,
						alignItems: "center",
					}}>
					<Text
						style={styles.projectInformationText}>Project information</Text>
					<View
						style={styles.rectangle2058View}/>
					<View
						style={styles.rectangle2064View}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.rectangle2070View}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 113,
						top: 216,
						bottom: 79,
						alignItems: "center",
					}}>
					<Image
						source={require("./../../assets/images/rectangle-2067.png")}
						style={styles.rectangle2059Image}/>
					<Text
						style={styles.шубаИзМехаНоркиFourText}>шуба из меха норки</Text>
					<Image
						source={require("./../../assets/images/rectangle-2067.png")}
						style={styles.rectangle2065Image}/>
					<Text
						style={styles.шубаИзМехаНоркиFiveText}>шуба из меха норки</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/rectangle-2067.png")}
						style={styles.rectangle2071Image}/>
					<Text
						style={styles.шубаИзМехаНоркиSixText}>шуба из меха норки</Text>
				</View>
			</View>
	}
}
