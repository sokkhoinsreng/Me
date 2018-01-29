//import liraries
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ScrollView,
    Button, Image, TextInput, Alert, MapView, ListView, AsyncStorage,
} from 'react-native';
import RateView from '../component/RateViewCom'
import TextInputComment from '../component/inputTextCom'
import RateViewCom from '../component/RateViewCom';
// create a component
class FeedbackScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.navigation.state.params,
            quality: 'Quality',
            speed: 'Speed',
            value: 'Value',
            creativity: 'Creativity',
            strategy: 'Strategy',
            countClient: 0,
            countEmployee: 0,
        }
    }
    saveData1 = (data) => {
        this.setState({ rank1: data });
    }
    saveData2 = (data) => {
        this.setState({ rank2: data });
    }
    saveData3 = (data) => {
        this.setState({ rank3: data });
    }
    saveData4 = (data) => {
        this.setState({ rank4: data });
    }
    saveData5 = (data) => {
        this.setState({ rank5: data });
    }
    // countClientSave = () => {
    //     if (this.state.type == 'CLIENT') {
    //         this.props.navigation.navigate('Menu',this.state)
    //     }else if (this.state.type=='EMPLOYEE') {
    //         this.props.navigation.navigate('Menu',this.state)
    //     }
    // }
    saveSummitDate = (full) => {
        if (this.state.rank1 == null ||
            this.state.rank2 == null ||
            this.state.rank3 == null ||
            this.state.rank4 == null ||
            this.state.rank5 == null ||
            this.state.rank1 == 0 ||
            this.state.rank2 == 0 ||
            this.state.rank3 == 0 ||
            this.state.rank4 == 0 ||
            this.state.rank5 == 0
        ) {
            Alert.alert(
                'Invalid',
                'Please Fill all Information.',
                [
                    { text: 'OK', }
                ],
                { cancelable: false }
            )
        } else if (this.state.text == null) {
            Alert.alert(
                'Success !!!',
                this.state.quality + ':' + this.state.rank1 + "\n" +
                this.state.speed + ':' + this.state.rank2 + "\n" +
                this.state.value + ':' + this.state.rank3 + "\n" +
                this.state.creativity + ':' + this.state.rank4 + "\n" +
                this.state.strategy + ':' + this.state.rank5,
                [
                    { text: 'OK', onPress: () => { this.onPreview()} },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }

                ],
                { cancelable: false }
            )
        }
        else {
            Alert.alert(
                'Success !!!',
                this.state.quality + ':' + this.state.rank1 + "\n" +
                this.state.speed + ':' + this.state.rank2 + "\n" +
                this.state.value + ':' + this.state.rank3 + "\n" +
                this.state.creativity + ':' + this.state.rank4 + "\n" +
                this.state.strategy + ':' + this.state.rank5 + "\n" + "\n" + this.state.text,
                [
                    { text: 'OK', onPress: () => { this.onPreview()} },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }

                ],
                { cancelable: false }
            )
        }
    }

    onPreview() {
        const arrayDataClient = [];
        const arrayDataEmployee = [];
        const data = {
            comment: this.state.text,
            rankSave1: this.state.rank1,
            rankSave2: this.state.rank2,
            rankSave3: this.state.rank3,
            rankSave4: this.state.rank4,
            rankSave5: this.state.rank5,
        };
        if (this.state.type == 'CLIENT') {
            arrayDataClient.push(data);
            try {
                AsyncStorage.getItem('database_form').then((value) => {
                    if (value != null) {
                        const d = JSON.parse(value);
                        d.push(data)
                        AsyncStorage.setItem('database_form', JSON.stringify(d)).then(() => {
                            this.props.navigation.navigate('Menu', [arrayDataClient, this.state])
                        })
                    } else {
                        AsyncStorage.setItem('database_form', JSON.stringify(arrayDataClient)).then(() => {
                            this.props.navigation.navigate('Menu', [arrayDataClient, this.state])
                        }
                        )
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
        else {
            arrayDataEmployee.push(data);
            try {
                AsyncStorage.getItem('database_form1').then((value1) => {
                    if (value1 != null) {
                        const e = JSON.parse(value1);
                        e.push(data)
                        AsyncStorage.setItem('database_form1', JSON.stringify(e)).then(() => {
                            this.props.navigation.navigate('Menu', [arrayDataEmployee, this.state])
                        })
                    } else {
                        AsyncStorage.setItem('database_form1', JSON.stringify(arrayDataEmployee)).then(() => {
                            this.props.navigation.navigate('Menu', [arrayDataEmployee, this.state])
                        }
                        )
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>{this.state.type}</Text>
                    <Text>Give Mäd a rating between 1 and 5</Text>
                </View>
                <ScrollView style={styles.main}>
                    <View style={styles.feedbackStyle}>
                        <Text style={styles.title} > Quality</Text>
                        <RateView
                            data={this.saveData1}
                            onPress={[this.state.quality, this.state.rank1]}
                        />
                    </View>
                    <View style={styles.feedbackStyle}>
                        <Text style={styles.title}>Speed</Text>
                        <RateView
                            data={this.saveData2}
                            onPress={[this.state.speed, this.state.rank2]}
                        />
                    </View>
                    <View style={styles.feedbackStyle}>
                        <Text style={styles.title}>Value</Text>
                        <RateView
                            data={this.saveData3}
                            onPress={[this.state.value, this.state.rank3]}
                        />
                    </View>
                    <View style={styles.feedbackStyle}>
                        <Text style={styles.title}>Creativity</Text>
                        <RateView
                            data={this.saveData4}
                            onPress={[this.state.creativity, this.state.rank4]}
                        />
                    </View>
                    <View style={styles.feedbackStyle}>
                        <Text style={styles.title}>Strategy</Text>
                        <RateView
                            data={this.saveData5}
                            onPress={[this.state.strategy, this.state.rank5]}
                        />
                    </View>
                    <View style={styles.CommemtStyle}>
                        <Text style={styles.title}>Comment</Text>
                        <View style={styles.inputText}>
                            <TextInputComment
                                fontSize={20}
                                placeholder='Write ur comment . . .'
                                multiline={true}
                                numberOfLines={10}
                                onChangeText={(text) => this.setState({ text })}
                                value={this.state.text} />
                        </View>
                    </View>
                    <View style={styles.myButtom}>
                        <Button
                            onPress={() => {
                                full = this.saveSummitDate()
                            }}
                            // onPress={() => {
                            //     // full = this.saveSummitDate
                            //     Alert.alert(this.state.quality + ':' + this.state.rank1 +"\n"+
                            //         this.state.speed + ':' + this.state.rank2+"\n"+
                            //         this.state.value + ':' + this.state.rank3+"\n"+
                            //         this.state.creativity + ':' + this.state.rank4+"\n"+
                            //         this.state.strategy + ':' + this.state.rank5+"\n"+"\n"+this.state.text
                            //     )
                            // }
                            // }
                            title="Summit"
                            color="black"
                        />
                    </View>
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
    },
    main: {
        backgroundColor: '#fafafa'
    },
    textHeader: {
        color: '#000',
        fontSize: 24,

    },
    feedbackStyle: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    CommemtStyle: {
        flex: 1,
        margin: 10,
    },
    inputText: {
        borderWidth: 2,
        height: 300,
        borderRadius: 15,
        borderColor: 'rgb(184,184,184)',
        padding: 10,
    },
    myButtom: {
        borderRadius: 15,
        backgroundColor: '#ef5350',
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,

    }
});

//make this component available to the app
export default FeedbackScreen;
