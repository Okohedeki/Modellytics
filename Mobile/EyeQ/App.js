//
//  App.js
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
//import NoPhoto from "./App/NoPhoto/NoPhoto"
import React from "react"
import SignIn from "./App/SignIn/SignIn"
import CompanySignUp1 from "./App/CompanySignUp1/CompanySignUp1"
import ModalSignUp1 from "./App/ModelSignUp1/ModelSignUp1"
import UserDashBoard from "./App/UserDashBoardReal/UserDashBoardReal"
import SignUpAOrM from "./App/SignUpAOrM/SignUpAOrM"
import AdminDashboard from './App/AdminDashboard/AdminDashboard'
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	SignIn: {
		screen: SignIn
	},
	CompanySignUp1: {
		screen: CompanySignUp1
	},
	ModalSignUp1: {
		screen: ModalSignUp1
	},
	UserDashBoard:{
		screen: UserDashBoard
	},
	AdminDashboard:{
		screen: AdminDashboard
	}
}, {
	initialRouteName: "SignIn",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Poppins-Regular": require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\fonts\\37516.otf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
