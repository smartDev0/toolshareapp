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
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { DEFAULT_COLOR } from '../../styles/common';
class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            mailCheck: false,
            days:[]
        }
    }
    componentDidMount() {
        this.setState({
            days: this.addDays()
        })
    }
    addDays = () => {
        let dayCollection = []
        for (var i = 1; i < 32; i++) {
            const data = {
                label: i,
                valuse: i
            }
            dayCollection.push(data)
        }
        return dayCollection
    }
    render() {
        const { days} = this.state
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
                                Email Sign Up
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
                                style={styles.text_input}
                                placeholder="First name"
                                placeholderTextColor="white"
                                blurOnSubmit={false}
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Last name"
                                placeholderTextColor="white"
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
                            <Text style={styles.text}>
                                Birthday
                            </Text>
                            <Text style={styles.small_text}>
                                To sign up, you must be 18 years or older. Other people will not be able to see your age.    
                            </Text>
                            <View style={styles.contactSectionStyle}>
                                <View style={{ flex:0.3}}>
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        useNativeAndroidPickerStyle={false}
                                        items={[
                                            { label: 'January', value: 'January' },
                                            { label: 'February', value: 'February' },
                                            { label: 'March', value: 'March' },
                                            { label: 'April', value: 'April' },
                                            { label: 'May', value: 'May' },
                                            { label: 'June', value: 'June' },
                                            { label: 'July', value: 'July' },
                                            { label: 'August', value: 'August' },
                                            { label: 'September', value: 'September' },
                                            { label: 'October', value: 'October' },
                                            { label: 'November', value: 'November' },
                                            { label: 'December', value: 'December' },
                                        ]}
                                        Icon={() => {
                                            return <MaterialIcons name="keyboard-arrow-down" size={20} style={{
                                                color: '#dbdcde'
                                            }} />
                                        }}
                                        style={{
                                        ...pickerSelectStyles,
                                            placeholder: {
                                                color: 'white',
                                                fontSize: 13,
                                            },
                                            viewContainer: {
                                                flex: 1,
                                                borderWidth: 1,
                                                borderColor: 'white',
                                                backgroundColor: '#FFFFFF',

                                            },
                                            iconContainer: { top: 8, right: 10, },
                                        }}
                                        placeholder={{ label: 'Month', value: '' }}
                                    />
                                </View>
                                <View style={{ flex: 0.05 }}></View>
                                <View style={{ flex: 0.3 }}>
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        useNativeAndroidPickerStyle={false}
                                        items={[
                                            { label: '1', value: '1' },
                                            { label: '2', value: '2' },
                                            { label: '3', value: '3' },
                                            { label: '4', value: '4' },
                                            { label: '5', value: '5' },
                                            { label: '6', value: '6' },
                                            { label: '7', value: '7' },
                                            { label: '8', value: '8' },
                                            { label: '9', value: '9' },
                                            { label: '10', value: '10' },
                                            { label: '11', value: '11' },
                                            { label: '12', value: '12' },
                                            { label: '13', value: '13' },
                                            { label: '14', value: '14' },
                                            { label: '15', value: '15' },
                                            { label: '16', value: '16' },
                                            { label: '17', value: '17' },
                                            { label: '18', value: '18' },
                                            { label: '19', value: '19' },
                                            { label: '20', value: '20' },
                                            { label: '21', value: '21' },
                                            { label: '22', value: '22' },
                                            { label: '23', value: '23' },
                                            { label: '24', value: '24' },
                                            { label: '25', value: '25' },
                                            { label: '26', value: '26' },
                                            { label: '27', value: '27' },
                                            { label: '29', value: '28' },
                                            { label: '29', value: '29' },
                                            { label: '30', value: '30' },
                                            { label: '31', value: '31' },
                                        ]}
                                        Icon={() => {
                                            return <MaterialIcons name="keyboard-arrow-down" size={20} style={{
                                                color: '#dbdcde'
                                            }} />
                                        }}
                                        style={{
                                            ...pickerSelectStyles,
                                            placeholder: {
                                                color: 'white',
                                                fontSize: 13,
                                            },
                                            viewContainer: {
                                                flex: 1,
                                                borderWidth: 1,
                                                borderColor: 'white',
                                                backgroundColor: '#FFFFFF',

                                            },
                                            iconContainer: { top: 8, right: 10, },
                                        }}
                                        placeholder={{ label: 'Day', value: '' }}
                                    />
                                </View>
                                <View style={{ flex: 0.05 }}></View>
                                <View style={{ flex: 0.3 }}>
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        useNativeAndroidPickerStyle={false}
                                        items={[
                                            { label: '2010', value: '2010' },
                                            { label: '2009', value: '2009' },
                                            { label: '2008', value: '2008' },
                                            { label: '2007', value: '2007' },
                                            { label: '2006', value: '2006' },
                                            { label: '2005', value: '2005' },
                                            { label: '2004', value: '2004' },
                                            { label: '2003', value: '2003' },
                                            { label: '2002', value: '2002' },
                                            { label: '2001', value: '2001' },
                                            { label: '2000', value: '2000' },
                                            { label: '1999', value: '1999' },
                                            { label: '1998', value: '1998' },
                                            { label: '1997', value: '1997' },
                                            { label: '1996', value: '1996' },
                                            { label: '1995', value: '1995' },
                                            { label: '1994', value: '1994' },
                                            { label: '1993', value: '1993' },
                                            { label: '1992', value: '1992' },
                                            { label: '1991', value: '1991' },
                                            { label: '1990', value: '1990' },
                                            { label: '1989', value: '1989' },
                                        ]}
                                        Icon={() => {
                                            return <MaterialIcons name="keyboard-arrow-down" size={20} style={{
                                                color: '#dbdcde'
                                            }} />
                                        }}
                                        style={{
                                            ...pickerSelectStyles,
                                            placeholder: {
                                                color: 'white',
                                                fontSize: 13,
                                            },
                                            viewContainer: {
                                                flex: 1,
                                                borderWidth: 1,
                                                borderColor: 'white',
                                                backgroundColor: '#FFFFFF',

                                            },
                                            iconContainer: { top: 8, right: 10, },
                                        }}
                                        placeholder={{ label: 'Year', value: '' }}
                                    />
                                </View>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox}
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({
                                        checked: !this.state.checked
                                    })}
                                    tintColors={{ true: 'white', false: 'black' }}
                                />
                                <Text style={styles.label}>I agree to ToolShare's
                                <Text style={styles.active_text}> Terms of Service</Text> and <Text style={styles.active_text}>Privacy Policy.</Text>  </Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox}
                                    value={this.state.mailCheck}
                                    onValueChange={() => this.setState({
                                        mailCheck: !this.state.mailCheck
                                    })}
                                    tintColors={{ true: 'white', false: 'black' }}
                                />
                                <Text style={styles.label}>
                                    Email me with ToolShare news, deals, and awesome tools.  
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.signup_button}
                            activeOpacity={0.7}
                            onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Text style={styles.signup_text}>Get Stared</Text>
                        </TouchableOpacity>
                        <View style={styles.divide}></View>
                        <Text style={styles.text_link}>
                            <TouchableOpacity>
                                <Text style={styles.white_color}>
                                    Already have a ToolShare account?
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                                <Text style={styles.active_text}> Login</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default RegisterScreen;
const pickerSelectStyles = StyleSheet.create({

    inputAndroid: {
        // flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        height: 36,
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 1,
        color: 'white',
        paddingRight: 30,
    },
    inputIOS: {
        borderWidth: 1,
        borderColor: 'white',
        height: 36,
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 1,
        color: 'white',
        paddingRight: 30,
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'rgba(0,0,0,.6)'
    },
    contactSectionStyle: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
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
        marginTop: 5
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
        marginBottom: 0,
    },
    divide: {
        borderColor: "white",
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal:10
    },
    label: {
        margin: 8,
        color: 'white',
        fontSize:12
    },
    text_link: {
        color: 'white',
        textAlign: 'center',
        margin: 8,
        display:'flex',
        flexWrap:'wrap'
    },
    small_text: {
        color: 'white',
        fontSize: 13,
        // textAlign: 'center'
    },
    active_text: {
        color: '#6EA0BE',
    },
    white_color: {
        color:"white"
    }
})