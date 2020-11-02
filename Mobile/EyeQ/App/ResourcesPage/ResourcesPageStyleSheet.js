//
//  ResourcesPageStyleSheet.js
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	component1440View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 00.05)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 45,
		marginTop: 44,
		flexDirection: "row",
		alignItems: "center",
	},
	group15Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 21,
		height: 18,
		marginLeft: 25,
	},
	group9View: {
		backgroundColor: "transparent",
		width: 104,
		height: 20,
		marginLeft: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	modellyticsLogo300Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 19,
	},
	modellyticsText: {
		color: "rgb(76, 82, 100)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icForum24pxImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 23,
		marginRight: 24,
	},
	homeIndicatorView: {
		backgroundColor: "white",
		height: 44,
		alignItems: "center",
	},
	homeIndicatorTwoView: {
		backgroundColor: "black",
		opacity: 0.2,
		borderRadius: 2.5,
		width: 134,
		height: 5,
		marginTop: 28,
	},
})

export default styles
