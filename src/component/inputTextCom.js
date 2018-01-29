//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
class TextInputComment extends Component {
    render() {
        return (
            <TextInput
                {...this.props} 
                editable={true}
                maxLength={500}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
   
});

//make this component available to the app
export default TextInputComment;
