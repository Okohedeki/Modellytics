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
import CreateJobs1 from "./App/CreateJobPage1/CreateJobPage1"
import EditJobsPage11 from "./App/EditJobsPage11/EditJobsPage11"
import ViewJobsPage1 from './App/ViewJobsPage1/ViewJobsPage1'
import Settings from './App/Settings/Settings'
//import JobBoard from './App/JobBoard/JobBoard'
import CompanyProfile from './App/CompanyProfilePage1/CompanyProfilePage1'
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
	},
	CreateJobs1: {
		screen:CreateJobs1
	},
	EditJobsPage11: {
		screen:EditJobsPage11
	},
	ViewJobsPage1: {
		screen:ViewJobsPage1
	},
	CompanyProfile: {
		screen: CompanyProfile
	},
	Settings: {
		screen: Settings
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
