//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import DataClient from '../screen/DataClient'
// create a component
class PreViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProp: this.props.navigation.state.params,
            myPropMe: this.props.navigation.state.params.type,

            // rankSave1: this.props.navigation.state.params.rank1,
            // rankSave2: this.props.navigation.state.params.rank2,
            // rankSave3: this.props.navigation.state.params.rank3,
            // rankSave4: this.props.navigation.state.params.rank4,
            // rankSave5: this.props.navigation.state.params.rank5,
        }
    }
    



    render() {
        return (
            <View style={styles.container} >
                {/* <View style={{position:'absolute',flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:24, color:'black'}}>OR</Text>
                </View> */}
                < TouchableOpacity
                    onPress={() => this.onPreview()}
                    style={styles.client} >
                    <Text style={styles.textColorClient}>PREVIEW</Text>
                </TouchableOpacity >

                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.employee}>
                    <Text style={styles.textColorEmployee}>BACK</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        position: 'relative'
    },
    client: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    employee: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(178,174,174)',
    },
    textColorClient: {
        color: 'rgb(178,174,174)',
        fontSize: 50,
    },
    textColorEmployee: {
        color: '#fff',
        fontSize: 50,
    }
});

//make this component available to the app
export default PreViewScreen;
