//
//  Complete
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./CompleteStyleSheet"
import { Image, Text, View } from "react-native"


export default class Complete extends React.Component {

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
					style={styles.component1412View}>
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
					style={styles.group7View}>
					<Image
						source={require("./../../assets/images/background.png")}
						style={styles.backgroundImage}/>
					<Image
						source={require("./../../assets/images/objects-2.png")}
						style={styles.objectsImage}/>
					<Image
						source={require("./../../assets/images/objects.png")}
						style={styles.objectsTwoImage}/>
				</View>
				<Text
					style={styles.thankYouText}>Thank You</Text>
				<Text
					style={styles.yourJobHasBeenPoText}>Your job has been posted. Click the button below to go back{"\n"}to the main page.</Text>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 57,
						marginBottom: 11,
					}}>
					<View
						style={styles.rectangle5View}/>
					<Text
						style={styles.signInText}>Sign In</Text>
				</View>
				<View
					style={styles.homeIndicatorView}>
					<View
						style={styles.homeIndicatorTwoView}/>
				</View>
			</View>
	}
}
