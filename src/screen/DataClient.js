//import liraries
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Button, AsyncStorage, processColor,
    FlatList,Alert
} from 'react-native';

// create a component]

class DataClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: '',
        }
        try {
            AsyncStorage.getItem('database_form').then((value) => {
                this.setState({
                    list: JSON.parse(value),
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    parseData() {
        if (this.state.list) {
            return this.state.list.map((data, i) => {
                return (
                    <View
                        style={styles.list}
                        key={i}>
                        <Text style={{ fontSize: 14 }}>Quality: {data.rankSave1}</Text>
                        <Text style={{ fontSize: 14 }}>Speed: {data.rankSave2}</Text>
                        <Text style={{ fontSize: 14 }}>Value: {data.rankSave3}</Text>
                        <Text style={{ fontSize: 14 }}>Creativity: {data.rankSave4}</Text>
                        <Text style={{ fontSize: 14 }}>Strategy: {data.rankSave5}</Text>
                        <Text style={{ fontSize: 14, fontWeight:'bold' }}>Comment: {data.comment} </Text>
                    </View>
                )
            })
        }
    }

    // saveData(){
    //     let 
    // }
    clearData = (value) => {
        this.setState({ list: value });
        AsyncStorage.clear();
    }
    alertClear = () => {
        Alert.alert(
            'Clear Data !!!',
            'Are you sure for clear data ?',
            [
                { text: 'OK', onPress: () => { this.clearData()} },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
            ],
            { cancelable: false }
        )

    }


    render() {
        const data = JSON.stringify(this.state.list)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>CLIENT</Text>
                    <Text>{this.state.list ? this.state.list.length : '0'}</Text>
                    <TouchableOpacity
                        onPress={() => this.alertClear()}
                        style={styles.clear} >
                        <Text style={{ color: '#29b6f6' }}>Clear</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={styles.main}>
                    {this.parseData()}
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    header: {
        paddingTop: '8%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#000',
        shadowOpacity: 0.20,
        backgroundColor: '#eeeeee'
        , position: 'relative',

    },
    main: {
        backgroundColor: '#fafafa',
        paddingLeft: 15,
        paddingRight: 15,
    },
    list: {
        flex:1,
        marginTop: 20 ,
        borderBottomWidth:2
    },
    count: {
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        height: '100%'
    },
    textHeader: {
        color: '#000',
        fontSize: 24,
    },
    clear: {
        position: 'absolute',
        bottom: '50%',
        right: 30,
    }
});

//make this component available to the app
export default DataClient;
