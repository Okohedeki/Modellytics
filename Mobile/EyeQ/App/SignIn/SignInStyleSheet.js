//
//  SignInStyleSheet.js
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet } from "react-native"
import { block } from "react-native-reanimated"

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	turnedOnSilverMacImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: -28,
		right: -145,
		top: -10,
		height: 822,
	},
	logoTransparentBacImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "flex-start",
		width: 280,
		height: 304,
		marginLeft: 50,
	},
	userSignInText: {
		color: "rgb(0, 15, 77)",
		fontFamily: "Poppins-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 61,
	},
	rectangle1View: {
		backgroundColor: "transparent",
		borderRadius: 22,
		borderWidth: 1,
		borderColor: "rgb(76, 82, 100)",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.01)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 304,
		height: 44,
		marginTop: 4,
	},
	rectangle2View: {
		backgroundColor: "transparent",
		borderRadius: 22,
		borderWidth: 1,
		borderColor: "rgb(76, 82, 100)",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.01)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 304,
		height: 44,
		marginTop: 8,
	},
	rectangle5View: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.07)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 305,
		height: 57,
		marginTop: 20,
	},
	notAMemberSignText: {
		backgroundColor: "transparent",
		color: "rgb(0, 15, 77)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 90,
	},
	group3View: {
		backgroundColor: "white",
		opacity: 0,
		alignSelf: "stretch",
		height: 199,
	},
	notAMemberSignTwoText: {
		color: "rgb(0, 15, 77)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 47,
	},
	textRectangleView:{
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderWidth:1,
		width: '100%',
		alignSelf: "center",
		position:"relative",
		shadowColor: "#000000",
		shadowOpacity: 0.8,
	  },
	  inner:{
	  borderWidth:1
	  },
	rectangle8View: {
		backgroundColor: "white",
		borderRadius: 20,
		height: 400,
	},
	signUpAsText: {
		color: "rgb(76, 82, 100)",
		fontFamily: "Poppins-Regular",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 32,
	},
	rectangle12View: {
		backgroundColor: "rgb(249, 249, 249)",
		height: 67,
		marginTop: 35,
	},
	modelText: {
		color: "rgb(76, 82, 100)",
		fontFamily: "Poppins-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	agencyText: {
		color: "rgb(76, 82, 100)",
		fontFamily: "Poppins-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	rectangle9View: {
		backgroundColor: "rgb(76, 82, 100)",
		borderRadius: 1,
		position: "absolute",
		alignSelf: "center",
		width: 2,
		top: 119,
		height: 28,
	},
	usernameText: {
		color: "rgb(0, 15, 77)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	passwordText: {
		color: "rgb(0, 15, 77)",
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 33,
	},
	signInText: {
		backgroundColor: "transparent",
		color: "rgb(0, 15, 77)",
		fontFamily: "Poppins-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		alignSelf: "center",
		top: 573,
	},
	modalView: {
		margin: 20,
		backgroundColor: "gray",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	  },
	verticleLine: {
		height: '10%',
		width: 1,
		backgroundColor: '#909090',
		marginTop:'20%'
	  },
	ModalText: {
		justifyContent: 'center', alignItems: 'center', position: 'relative', top: 1000, left: 0, right: 0, bottom: 0
	},
})

export default styles
