//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FeedbackScreen from '../screen/FeedbackScreen'
// create a component
class RateView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle1: false,
            toggle2: false,
            toggle3: false,
            toggle4: false,
            toggle5: false,
            rank: ''
        }
    }
    // props={
    //     rank=''
    // }
    _onPress1() {
        const newState = !this.state.toggle1;
        this.setState({ toggle1: newState });
        this.onSentData(this.state.rank);

    }

    onSentData = (value) => {
        this.props.data(value)
    }

    _onPress2() {
        const newState = !this.state.toggle2;
        this.setState({ toggle2: newState });
        this.onSentData(this.state.rank);        

    }
    _onPress3() {
        const newState = !this.state.toggle3;
        this.setState({ toggle3: newState });
        this.onSentData(this.state.rank);
        

    }
    _onPress4() {
        const newState = !this.state.toggle4;
        this.setState({ toggle4: newState });
        this.onSentData(this.state.rank);
        

    }
    _onPress5() {
        const newState = !this.state.toggle5;
        this.setState({ toggle5: newState });
        this.onSentData(this.state.rank);
        

    }

    render() {
        const { toggle1, toggle2, toggle3, toggle4, toggle5 } = this.state;

        const rank1Color = toggle1 ? "rgb(188,35,55)" : 'transparent';
        const rank2Color = toggle2 ? "rgb(238,89,60)" : 'transparent';
        const rank3Color = toggle3 ? "rgb(250,231,118)" : 'transparent';
        const rank4Color = toggle4 ? "rgb(68,180,84)" : 'transparent';
        const rank5Color = toggle5 ? "rgb(26,120,185)" : 'transparent';
        
        const rank1 = toggle1 ? '0' : '1';
        const rank2 = toggle2 ? '1' : '2';
        const rank3 = toggle3 ? '2' : '3';
        const rank4 = toggle4 ? '3' : '4';
        const rank5 = toggle5 ? '4' : '5';
        const rank1border = toggle1 ? 0 : 1;
            
        
        
        return (
            <View style={styles.rateRake}>
                <TouchableOpacity
                    onPress={() =>
                        [this._onPress1(
                            this.state.toggle2 = false,
                            this.state.toggle3 = false,
                            this.state.toggle4 = false,
                            this.state.toggle5 = false,
                            this.state.rank = rank1,
                        ),]
                    
                    }
                    style={styles.FirstRate}>
                    <Image
                        style={{ flex: 1, height: 30, width: 35, }}
                        resizeMode="stretch"
                        source={require('../asset/1.png')} />
                    <View
                        style={[styles.shapeRate, { backgroundColor: rank1Color, borderWidth: rank1border }]}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this._onPress2(
                        this.state.toggle1 = true,
                        this.state.toggle3 = false,
                        this.state.toggle4 = false,
                        this.state.toggle5 = false,
                        this.state.rank = rank2,
                    )
                    }
                    style={styles.FirstRate}>
                    <Image
                        style={{ flex: 1, height: 30, width: 35 }}
                        resizeMode="stretch"
                        source={require('../asset/2.png')} />
                    <View
                        style={[styles.shapeRate, { backgroundColor: rank2Color, borderWidth: rank1border }]}>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this._onPress3(
                        this.state.toggle1 = true,
                        this.state.toggle2 = true,
                        this.state.toggle4 = false,
                        this.state.toggle5 = false,
                        this.state.rank = rank3,
                    )
                    }
                    style={styles.FirstRate}>
                    <Image
                        style={{ flex: 1, height: 30, width: 35 }}
                        resizeMode="stretch"
                        source={require('../asset/3.png')} />
                    <View
                        style={[styles.shapeRate, { backgroundColor: rank3Color, borderWidth: rank1border }]}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this._onPress4(
                        this.state.toggle1 = true,
                        this.state.toggle2 = true,
                        this.state.toggle3 = true,
                        this.state.toggle5 = false,
                        this.state.rank = rank4,
                    )}
                    style={styles.FirstRate}>
                    <Image
                        style={{ flex: 1, height: 30, width: 35 }}
                        resizeMode="stretch"
                        source={require('../asset/4.png')} />
                    <View
                        style={[styles.shapeRate, { backgroundColor: rank4Color, borderWidth: rank1border }]}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this._onPress5(
                        this.state.toggle1 = true,
                        this.state.toggle2 = true,
                        this.state.toggle4 = true,
                        this.state.toggle3 = true,
                        this.state.rank = rank5,

                    )}
                    style={styles.FirstRate}>
                    <Image
                        style={{ flex: 1, height: 30, width: 35 }}
                        resizeMode="stretch"
                        source={require('../asset/5.png')} />
                    <View
                        style={[styles.shapeRate, { backgroundColor: rank5Color, borderWidth: rank1border }]}>
                    </View>

                </TouchableOpacity>

            </View>

        );
    }
}

// define your styles


const styles = StyleSheet.create({

    rateRake: {
        flex: 1,
        flexDirection: 'row'
    },
    FirstRate: {
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'red'
    },
    shapeRate: {
        width: 70,
        height: 10,
        marginTop: 10,
        borderRadius: 15,
        borderColor: '#455a64'
    },



});

//make this component available to the app
export default RateView;
