//
//  AdminDashboard
//  EyeQ
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

//Carousel link https://snack.expo.io/vBo3OZYjg

import React from "react";
import styles from "./AdminDashboardStyleSheet";
import { Image, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

export default class AdminDashboard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  };

  constructor(props){
  super(props);

	this.state = {
	  activeIndex:0,
	  carouselItems: [
	  {
		  title:"Create Job",
		  text: "Create a Job",
      image:require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-15.png"),
      link: 'CreateJobs1'
	  },
	  {
		  title:"Edit Job",
		  text: "Edit a Job",
      image:require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-15.png"),
      link: 'EditJobs1'
	  },
	  {
		  title:"View Job",
		  text: "View Job Details",
      image:require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-15.png"),
      link: 'ViewJobs1'
	  },
	  {
		  title:"Reports",
		  text: "View Reports",
      image:require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-15.png"),
      link: ''
	  },
	  {
		  title:"Messaages",
		  text: "View Messages",
      image:require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-15.png"),
      link: ''
	  },
	]
  }
  }

_renderItem({item,index}){
	return (
    <TouchableOpacity onPress = {() => this.props.navigation.navigate(item.link)}
     style={{
		  backgroundColor: "#5574F7",
      borderRadius: 5,
      borderColor:'black',
      borderWidth:2,
		  height: 150,
		  padding: 50,
		  marginLeft: 25,
      marginRight: 25, }}
    >
		<Text style={{fontSize: 25, color:'white', paddingLeft:25}}>{item.title}</Text>
		<Text style = {{color:'white', paddingLeft:25}}>{item.text}</Text>
		<Image style = {{top:-39, left:-20}} source={item.image} />
	  </TouchableOpacity>

	)
}

  componentDidMount() {

  }



  CreateJobNavigation = () => { 
  	this.props.navigation.navigate('CreateJobs1')
    console.log('asd');
    }





  render() {
    return (
      <View style={styles.viewView}>
        <View style={styles.component141View}>
          <Image
            source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\group-15.png")}
            style={styles.group15Image}
          />
          <View style={styles.group9View}>
            <Image
              source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\modellytics-logo300x-2.png")}
              style={styles.modellyticsLogo300Image}
            />
            <View
              style={{
                flex: 1,
              }}
            />
            <Text style={styles.modellyticsText}>Modellytics</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          />
          <Image
            source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-forum-24px.png")}
            style={styles.icForum24pxImage}
          />
        </View>

        {/* <View
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
										source={require("C:\ \Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\edit.png")}
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
				</View> */}

        <SafeAreaView
          style={{ flex: 1, paddingTop: 50 }}
        >
          <View 
            style={{ flex: 1, flexDirection: "row", justifyContent: "center", paddingTop:25}}
          >
            <Carousel
              layout={"default"}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem.bind(this)}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
            />
          </View>
        </SafeAreaView>

        <View
          pointerEvents="box-none"
          style={{
            height: -10,
            marginTop: 80,

          }}
        >
          <TouchableOpacity style={styles.group17View}>
            <View style={styles.group16View}>
              <Image
                source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-account-box-24px.png")}
                style={styles.icAccountBox24pxImage}
              />
              <View
                style={{
                  flex: 1,
                }}
              />
              <Text style={styles.viewApplicantsText}>Job Board</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('CompanyProfile1')} style={styles.group18View}>
            <Image
              source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-chrome-reader-mode-24px.png")}
              style={styles.icChromeReaderModImage}
            />
            <Text style={styles.companyProfileText}>Company Profile</Text>
          </TouchableOpacity>
          <View style={styles.rectangle2023View} />
        </View>

        {/* This View is Overriding above view */}
          <TouchableOpacity
          pointerEvents="box-none"
          style={{
            flex: 1,
            marginTop: 0,
          }}
          onPress = {() => this.props.navigation.navigate('Settings')}
        >
       
          <View onPress = {() => this.props.navigation.navigate('Settings')} style={styles.rectangle2022View} />
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              alignSelf: "center",
              width: 81,
              top: 22,
              bottom: 18,
              alignItems: "center",
            }}
          >
            <Image
              source={require("C:\\Users\\Edeki Okoh1\\Desktop\\Modellytics\\Mobile\\EyeQ\\assets\\images\\ic-settings-24px.png")}
              style={styles.icSettings24pxImage}
            />
            <View
              style={{
                flex: 1,
              }}
            />
            <Text style={styles.settingsText}>Settings</Text>
          </View> 
        </TouchableOpacity>

        <View style={styles.homeIndicatorView}>
          <View style={styles.homeIndicatorTwoView} />
        </View>  
      </View>
    );
  }
}
