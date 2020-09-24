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
    CheckBox,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { DEFAULT_COLOR } from '../../styles/common';
class LoginScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checked:false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image_background}
                    source={require("./../../../assets/images/LogInBackground.jpg")}>
                    <View style={styles.image_background_color}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => this.props.navigation.navigate('PinScreen')}>
                                <Icon name="chevron-left" size={35} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.login_box}>
                            <Text style={styles.text}>
                                Email Log In
                            </Text>
                            <TextInput
                                style={styles.text_input}
                                placeholder="Email"
                                placeholderTextColor="white"
                                keyboardType="email-address"
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <TextInput
                                type="password"
                                style={styles.text_input}
                                placeholder="Password"
                                placeholderTextColor="white"
                                blurOnSubmit={false}
                                secureTextEntry={true}
                            />
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox}
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({
                                        checked:!this.state.checked
                                    })}
                                    tintColors={{ true: 'white', false: 'black' }}
                                />
                                <Text style={styles.label}>Remember password</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.signup_button}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.signup_text}>Log In</Text>
                        </TouchableOpacity>
                        <View style={styles.login_box}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => this.props.navigation.navigate('ForgotScreen')}>
                                <Text style={styles.text_link}>Forgot password?</Text>
                            </TouchableOpacity>

                            <View style={styles.divide}></View>
                            <Text style={styles.text_link}>
                                <TouchableOpacity>
                                    <Text style={styles.white_color}>
                                        Don't have and account?
                                    </Text>
                                </TouchableOpacity>

                                 <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                                    <Text style={styles.active_text}> Sign Up</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                        <View style={styles.bottom_group}>
                            <Text style={styles.bottom_text}>
                                <TouchableOpacity>
                                    <Text style={styles.bottom_text}>
                                        By logging in, you agree to  ToolShare’s 
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ServiceScreen')}>
                                    <Text style={styles.active_text}> Terms of Service </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.bottom_text}>
                                        and 
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.active_text}>Privacy Policy.</Text>  
                                
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default LoginScreen;

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
    bottom_group: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: '500',
    },
    signup_button: {
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
    login_box: {
        marginHorizontal: 10,
        marginTop:10
    },
    signin_button: {
        marginTop: 10,
        marginHorizontal: 15,
        borderColor: DEFAULT_COLOR,
        backgroundColor: 'transparent',
        borderWidth: 2,
    },
    text_input: {
        marginVertical:5,
        height: 36,
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth: 1,
        borderColor: 'white',
        color:'white'
    },
    checkbox: {
        alignSelf: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
       
    },
    divide: {
        borderColor: "white",
        borderWidth: 1
    },
    label: {
        margin: 8,
        color: 'white'
    },
    text_link: {
        color: 'white',
        textAlign: 'center',
        margin: 8,
    },
    bottom_text:{
        color: 'white',
        fontSize: 14,
        textAlign:'center'
    },
    active_text: {
        color: '#6EA0BE',
    },
    white_color: {
        color: "white"
    }
})