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
import Icon from 'react-native-vector-icons/FontAwesome';
import { DEFAULT_COLOR } from './../../styles/common';
class ListingTool extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image_background}
                    source={require("./../../../assets/images/ListingTools.png")}>
                    <View style={styles.image_background_color}>
                        <View style={styles.button_group}>
                            <Text style={styles.text}>
                                Connect, Share, Build and Repair.
                        </Text>
                            <TouchableOpacity
                                style={styles.signup_button}
                                activeOpacity={0.7}
                                onPress={(e) => { this.props.navigation.navigate('RegisterScreen') }}>
                                <Text style={styles.signup_text}>Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.signin_button}
                                onPress={(e) => { this.props.navigation.navigate('LoginScreen') }}
                                activeOpacity={0.7}>
                                <Text style={styles.signup_text}>Log In</Text>
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
    image_background: {
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
    image_background_color: {
        backgroundColor: 'rgba(0,0,0,.3)',
        height: '100%',
        width: '100%',
    },
    button_group: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    text: {
        color: "white",
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center'
    },
    signup_button: {
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: DEFAULT_COLOR,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    signup_text: {
        fontSize: 18,
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