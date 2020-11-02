//
//  AdminDashboard
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import styles from "./AdminDashboardStyleSheet"
import { Image, Text, View } from "react-native"


export default class AdminDashboard extends React.Component {

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
					style={styles.component141View}>
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
						source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-forum-24px.png")}
						style={styles.icForum24pxImage}/>
				</View>
				<View
					style={styles.group14View}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.group11View}>
							<View
								style={styles.group10View}>
								<Image
									source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-assignment-24px.png")}
									style={styles.icAssignment24pxImage}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.createJobText}>Create Job</Text>
						</View>
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
							pointerEvents="box-none"
							style={{
								height: 97,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View
								style={styles.group13View}>
								<View
									style={styles.group10TwoView}>
									<Image
										source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\edit.png")}
										style={styles.editImage}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.editJobsText}>Edit Jobs</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group12View}>
								<View
									style={styles.group10ThreeView}>
									<Image
										source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-account-balance-wallet-24px.png")}
										style={styles.icAccountBalanceWImage}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.viewJobsText}>View Jobs</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 204,
						marginTop: 60,
					}}>
					<View
						style={styles.group17View}>
						<View
							style={styles.group16View}>
							<Image
								source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-account-box-24px.png")}
								style={styles.icAccountBox24pxImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.viewApplicantsText}>View Applicants</Text>
						</View>
					</View>
					<View
						style={styles.group18View}>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-chrome-reader-mode-24px.png")}
							style={styles.icChromeReaderModImage}/>
						<Text
							style={styles.companyProfileText}>Company Profile</Text>
					</View>
					<View
						style={styles.rectangle2023View}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						marginTop: 7,
						marginBottom: 82,
					}}>
					<View
						style={styles.rectangle2022View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 81,
							top: 22,
							bottom: 18,
							alignItems: "center",
						}}>
						<Image
							source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-settings-24px.png")}
							style={styles.icSettings24pxImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.settingsText}>Settings</Text>
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
