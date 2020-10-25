//
//  CompanyProfilePage1Edit
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./CompanyProfilePage1EditStyleSheet"
import { Image, Text, View } from "react-native"


export default class CompanyProfilePage1Edit extends React.Component {

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
						alignItems: "center",
					}}>
					<View
						style={styles.component1437View}>
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
						style={styles.companyNameText}>Company Name</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 103,
							height: 42,
							marginLeft: 31,
							marginTop: 14,
						}}>
						<Text
							style={styles.mainContact1Text}>Main Contact 1</Text>
						<Text
							style={styles.textText}>+1 23 456789</Text>
					</View>
					<View
						style={styles.lineView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 103,
							height: 42,
							marginLeft: 31,
							marginTop: 27,
						}}>
						<Text
							style={styles.mainContact2Text}>Main Contact 2</Text>
						<Text
							style={styles.textTwoText}>+1 23 456789</Text>
					</View>
					<View
						style={styles.lineTwoView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 104,
							height: 42,
							marginLeft: 31,
							marginTop: 27,
						}}>
						<Text
							style={styles.cityText}>City</Text>
						<Text
							style={styles.loremIpsumText}>Lorem ipsum</Text>
					</View>
					<View
						style={styles.lineThreeView}/>
					<Text
						style={styles.loremIpsumTwoText}>Lorem ipsum</Text>
					<View
						style={styles.lineFourView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 104,
							height: 42,
							marginLeft: 31,
							marginTop: 27,
						}}>
						<Text
							style={styles.zipText}>Zip</Text>
						<Text
							style={styles.loremIpsumThreeText}>Lorem ipsum</Text>
					</View>
					<View
						style={styles.lineFiveView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 103,
							height: 42,
							marginLeft: 31,
							marginTop: 27,
						}}>
						<Text
							style={styles.phoneText}>Phone</Text>
						<Text
							style={styles.textThreeText}>+1 23 456789</Text>
					</View>
					<View
						style={styles.lineSixView}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 201,
							height: 42,
							marginLeft: 31,
						}}>
						<Text
							style={styles.emailText}>Email</Text>
						<Text
							style={styles.someoneExampleComText}>someone@example.com</Text>
					</View>
					<View
						style={styles.lineSevenView}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
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
							style={styles.saveChangesText}>Save changes</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Text
						style={styles.stateText}>State</Text>
				</View>
			</View>
	}
}
