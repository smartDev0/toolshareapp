import React from 'react';
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
class ForgotScreen extends React.Component {
    constructor(props) {
        super(props);
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
                                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                                <Icon name="chevron-left" size={35} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.login_box}>
                            <Text style={styles.text}>
                                Reset Password
                            </Text>
                            <TextInput
                                style={styles.text_input}
                                placeholder="Email"
                                placeholderTextColor="white"
                                keyboardType="email-address"
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.signup_button}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.signup_text}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default ForgotScreen;

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
        marginHorizontal: 10,
        backgroundColor: DEFAULT_COLOR,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:5
    },
    signup_text: {
        fontSize: 18,
        color: 'white',
        padding: 5,
        textAlign: 'center'
    },
    login_box: {
        marginHorizontal: 10,
        marginTop: 10
    },
    signin_button: {
        marginTop: 10,
        marginHorizontal: 15,
        borderColor: DEFAULT_COLOR,
        backgroundColor: 'transparent',
        borderWidth: 2,
    },
    text_input: {
        marginVertical: 5,
        height: 36,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white'
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
    bottom_text: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
    },
    active_text: {
        color: '#6EA0BE',
    }
})