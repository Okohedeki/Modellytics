// Modal.js
import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  View,
  Text
} from 'react-native';
import t from 'prop-types';


class MyModal extends React.Component {
  static propTypes = {
    children: t.node.isRequired,
    visible: t.bool.isRequired,
    dismiss: t.func.isRequired,
    // transparent: t.bool,
    // animationType: t.string,
  };

  // static defaultProps = {
  //   animationType: 'slide',
  //   transparent: true,
  // };

  render() {
    const { props } = this;
    return (
      <View style = {styles.Alignment}>
        <Modal
          visible={props.visible}
          transparent={props.transparent}
          onRequestClose={props.dismiss}
          animationType="slide"
          transparent={true}
          animationIn='slideInLeft'
          animationOut='slideOutRight'
          useNativeDriver={true} 
        >
        <TouchableWithoutFeedback onPress={props.dismiss}>
        <View style={styles.modalContent}>
        {props.children}
        </View>
          </TouchableWithoutFeedback>
{/* 
       <View style={styles.modalContent}>
        {props.children}
        </View> */}

        </Modal>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
		margin: 20,
		borderRadius: 20,
    padding: 35,    
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    height:'30%',

  },

  modalOverlay: {
		margin: 40,
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
    },
    backgroundColor:'gray',
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
    elevation: 5,
    position:'relative',
    marginTop:'90%',
    borderRadius:5,
    borderWidth:3,
    justifyContent: 'center',
    alignItems: 'center',},
  
  Alignment:
  {

    alignItems:'center',
    justifyContent:'center',
    flex:1,
    paddingTop:20

  }
  


});


export default MyModal;