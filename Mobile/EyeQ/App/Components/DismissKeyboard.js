import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View, StyleSheet} from 'react-native';

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
        textAlign:'center',
        marginTop:4
    }

  
  });
  
  export const DismissKeyboardView = DismissKeyboardHOC(View)
