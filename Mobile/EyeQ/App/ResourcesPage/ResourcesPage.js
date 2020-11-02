//
//  ResourcesPage
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./ResourcesPageStyleSheet"
import { Image, Text, View } from "react-native"


export default class ResourcesPage extends React.Component {

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
					style={styles.component1440View}>
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
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.homeIndicatorView}>
					<View
						style={styles.homeIndicatorTwoView}/>
				</View>
			</View>
	}
}
