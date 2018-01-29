//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
class MenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProp2: this.props.navigation.state.params,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PreviewChoice',this.state)}
                style={styles.client}>
                    <Text style={styles.textColorClient}>PREVIEW</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Home',this.state)}
                style={styles.employee}>
                    <Text style={styles.textColorEmployee}>FEEDBACK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      client:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
      },
      employee:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgb(178,174,174)',
      },
      textColorClient:{
        color:'rgb(178,174,174)',
        fontSize:50,
      },
      textColorEmployee:{
        color:'#fff',
        fontSize:50,
      }
});

//make this component available to the app
export default MenuScreen;
