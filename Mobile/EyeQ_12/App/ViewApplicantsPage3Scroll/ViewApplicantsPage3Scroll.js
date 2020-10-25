//
//  ViewApplicantsPage3Scroll
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ViewApplicantsPage3ScrollStyleSheet"
import { Image, Text, View } from "react-native"


export default class ViewApplicantsPage3Scroll extends React.Component {

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
						left: -78,
						right: 0,
						top: 44,
						bottom: 44,
					}}>
					<View
						style={styles.component1433View}>
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
							height: 13,
							marginLeft: 113,
							marginRight: 37,
							marginTop: 56,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/my-arrow.png")}
							style={styles.myArrowImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/my-arrow-2.png")}
							style={styles.myArrowTwoImage}/>
					</View>
					<Text
						style={styles.jobOneText}>Job One</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 505,
							marginRight: 1,
							marginTop: 16,
						}}>
						<Image
							source={require("./../../assets/images/nopath---copy-15.png")}
							style={styles.nopathCopy15Image}/>
						<Image
							source={require("./../../assets/images/nopath---copy-15.png")}
							style={styles.nopathCopy14Image}/>
						<Image
							source={require("./../../assets/images/nopath---copy-3.png")}
							style={styles.nopathCopy3Image}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 109,
								right: 30,
								top: 246,
								height: 236,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 13,
									marginLeft: 3,
									marginRight: 5,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/ic-chevron-right-24px-2.png")}
									style={styles.icChevronRight24pImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/ic-chevron-right-24px.png")}
									style={styles.icChevronRight24pTwoImage}/>
							</View>
							<View
								style={styles.rectangle2080View}/>
						</View>
						<Image
							source={require("./../../assets/images/group-587.png")}
							style={styles.group587Image}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							alignSelf: "flex-start",
							width: 323,
							marginLeft: 104,
							marginTop: 33,
						}}>
						<Text
							style={styles.nameText}>Name</Text>
						<Text
							style={styles.descriptionLoremText}>Description:Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.{"\n"}Lorem ipsum dolor sit amet, consetetur</Text>
						<View
							style={styles.rectangle5View}/>
						<Text
							style={styles.interestedText}>Interested?</Text>
					</View>
				</View>
				<Text
					style={styles.projectInformationText}>Project information</Text>
			</View>
	}
}
