import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Button,
    ImageBackground
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { DEFAULT_COLOR } from './../../styles/common';
class ListingTool extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require("./../../../assets/images/ListingTools.png")}>
                    <View style={styles.imageBackgroundColor}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{ marginTop: 30, marginLeft: 0 }}
                                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                <Feather name="chevron-left" size={35} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.title}>
                                List your tools and equipement.
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.description}>
                                Make your tools work for you. List equipment in 4 steps and start earning. 
                            </Text>
                        </View>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.7}
                                onPress={(e) => { this.props.navigation.navigate('ListingToolSliderScreen') }}>
                                <Text style={styles.buttonText}>List your equipment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.text}>
                                    How does lending on Toolshare work?
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default ListingTool;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'rgba(0,0,0,.6)'
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
    },
    imageBackgroundColor: {
        backgroundColor: 'rgba(0,0,0,.3)',
        height: '100%',
        width: '100%',
    },
    buttonGroup: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    text: {
        color: DEFAULT_COLOR,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginTop:10
    },
    title: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        marginTop:10
    },
    description: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 30,
        marginHorizontal:20
    },
    button: {
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: DEFAULT_COLOR,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        padding: 5,
        textAlign: 'center'
    },
    signin_button: {
        marginTop: 10,
        marginHorizontal: 15,
        borderColor: DEFAULT_COLOR,
        backgroundColor: 'transparent',
        borderWidth: 2,
    }
})