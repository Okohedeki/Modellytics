//
//  SignIn
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./SignInStyleSheet"
import { Image, Text, View, TextInput } from "react-native"
import MyModal from './../Modal/Modal.js'
import { Divider } from "react-native-elements"


export default class SignIn extends React.Component {

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
		this.state = {isModalVisible:false,
					  }
	}

	
	componentDidMount() {
	
	}


	loginclickSignUp = () => {
		this.props.navigation.navigate('SignUpAOrM')
	}

	AgencySignUp = () => {
		this.setState({ isModalVisible: false }),
		this.props.navigation.navigate('CompanySignUp1')
	}

	ModelSignUp = () => {
		this.setState({ isModalVisible: false }),
		this.props.navigation.navigate('ModalSignUp1')
	}


	renderSignUpView() {
		if (this.state.isModalVisible) {
			console.log('hi')

			return (
			<View> 
				<MyModal
				visible={this.state.isModalVisible}
				dismiss={this.hideModal}
			  >
				  
				<Text style = {styles.modelText}  onPress = {this.ModelSignUp}>Model </Text>
				<View style={styles.verticleLine}></View>
				<Text style = {styles.modelText} onPress = {this.AgencySignUp}> Agency </Text>

			  </MyModal>
			</View>

					)
		}
	}

	showModal = () => this.setState({ isModalVisible: true });
	hideModal = () => this.setState({ isModalVisible: false });

	//New Stuff


	render() {
		console.log(this.state.isModalVisible)

	
		return <View
				style={styles.viewView}>
				<Image
					source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\turned-on-silver-macbook-on-white-bed-916337.png")}
					style={styles.turnedOnSilverMacImage}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: -5,
						right: -5,
						top: 37,
						bottom: -187,
						alignItems: "center",
					}}>
					<Image
						source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\logo-transparent-background.png")}
						style={styles.logoTransparentBacImage}/>
					<Text
						style={styles.userSignInText}>User Sign In</Text>
						
					<View
						style={styles.rectangle1View}/>
					<View
						style={styles.rectangle2View}/>
					<View
						style={styles.rectangle5View}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.notAMemberSignText} onPress = {this.showModal}>Not a member? </Text>
						{this.renderSignUpView()}
					<View
						style={styles.group3View}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 5,
								right: 5,
								top: 0,
								height: 199,
							}}>
						
						</View>
						<View
							style={styles.rectangle9View}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 66,
						width: 62,
						top: 452,
						height: 71,
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.usernameText}>Username</Text>
					<Text
						style={styles.passwordText}>Password</Text>
				</View>
				<Text
					style={styles.signInText}>Sign In</Text>
			</View>
	}
}
