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
    ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ProfileEdit extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 12,
                }}>
                    <TouchableOpacity
                        style={{ marginTop: 15, marginLeft: 5, position: 'absolute', zIndex: 10 }}
                        onPress={() => this.props.navigation.navigate('ProfileDetailScreen')}>
                        <AntDesign name="close" size={26} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                    <View style={{ width: '100%' }}>
                        <Text style={styles.profileTitle}>Edit Profile</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ProfileScreen')}
                        style={{ position: 'absolute', right: 10, top: 20 }}>
                        <Text style={{ color: 'black' }}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider}></View>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}>
                            <Image
                                style={styles.image}
                                source={require("./../../../assets/images/User.png")} />
                        </View>
                        <View style={styles.divider}></View>
                        <View>
                            <Text style={styles.text}>First Name</Text>
                            <TextInput
                                style={styles.textTnput}
                                placeholder="Enter first name"
                                placeholderTextColor="grey"
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <Text style={styles.text}>Last Name</Text>
                            <TextInput
                                style={styles.textTnput}
                                placeholder="Enter last name"
                                placeholderTextColor="grey"
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <Text style={styles.description}>
                                Your public profile shows your first name. When you request a bookin, your lender will see your first and last name.
                            </Text>
                            <Text style={styles.text}>I am</Text>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                useNativeAndroidPickerStyle={false}
                                items={[
                                    { label: 'Male', value: 'Male' },
                                    { label: 'Female', value: 'Female' },
                                ]}
                                Icon={() => {
                                    return <MaterialIcons name="keyboard-arrow-down" size={20} style={{
                                        color: DEFAULT_COLOR
                                    }} />
                                }}
                                style={{
                                    ...pickerSelectStyles,
                                    placeholder: {
                                        color: 'grey',
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
                                placeholder={{ label: 'Gender', value: '' }}
                            />
                        </View>
                        <Text style={styles.description}>
                            We never share this information with other.
                        </Text>
                        <Text style={styles.text}>Birth Date</Text>
                        <View style={styles.contactSectionStyle}>
                            <View style={{ flex: 0.3 }}>
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
                                            color: DEFAULT_COLOR
                                        }} />
                                    }}
                                    style={{
                                        ...pickerSelectStyles,
                                        placeholder: {
                                            color: 'grey',
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
                                            color: DEFAULT_COLOR
                                        }} />
                                    }}
                                    style={{
                                        ...pickerSelectStyles,
                                        placeholder: {
                                            color: 'grey',
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
                                            color: DEFAULT_COLOR
                                        }} />
                                    }}
                                    style={{
                                        ...pickerSelectStyles,
                                        placeholder: {
                                            color: 'grey',
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
                        <Text style={styles.description}>
                            We never share this information with other.
                        </Text>
                        <Text style={styles.text}>Email Address</Text>
                        <TextInput
                            style={styles.textTnput}
                            placeholderTextColor="grey"
                            keyboardType="email-address"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                        <Text style={styles.description}>
                            We do not share your email with anyone.
                        </Text>
                        <Text style={styles.text}>Phone Number</Text>
                        <TextInput
                            style={styles.textTnput}
                            placeholderTextColor="grey"
                            keyboardType="email-address"
                            returnKeyType="next"
                            blurOnSubmit={false}
                            keyboardType='phone-pad'
                            maxLength={14}
                        />
                        <Text style={styles.description}>
                            We do not share your phone number with anyone.
                        </Text>
                        <Text style={styles.text}>Location</Text>
                        <TextInput
                            style={styles.textTnput}
                            placeholderTextColor="grey"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                        <Text style={styles.description}>
                            Your public profile shows a general locaion. When you request a bookin, your lender will see your locaion.
                        </Text>
                        <Text style={styles.text}>Describe yourself</Text>
                        <TextInput
                            style={styles.textareTnput}
                            placeholderTextColor="grey"
                            returnKeyType="next"
                            blurOnSubmit={false}
                            numberOfLines={10}
                            multiline={true}

                        />
                        <Text style={styles.description}>
                            ToolShare is built on relationships. Help peopel get you know you, tell them a little bit about yourself.
                        </Text>
                        <Text style={styles.description}>
                            Tell them what your interest with tools/equipment are? Share your hobbies, interests, current projects or repairs.
                        </Text>
                        <Text style={styles.text}></Text>
                    </View>
                </ScrollView>
                <TabBar props={this.props} />
            </View>
        )

    }
}
const pickerSelectStyles = StyleSheet.create({

    inputAndroid: {
        // flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        height: 36,
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 0.6,
        color: 'black',
        paddingRight: 30,
    },
    inputIOS: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 36,
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 0.6,
        color: 'black',
        paddingRight: 30,
    },
});
const styles = StyleSheet.create({
    contactSectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBackground: {
        backgroundColor: DEFAULT_COLOR,
        height: 150
    },
    image: {
        height: 200,
        width: 200,
    },
    imageGroup: {
        position: 'absolute',
        top: 120,
        left: 25
    },
    imageText: {
        fontSize: 12
    },
    divider: {
        borderBottomColor: DEFAULT_COLOR,
        borderWidth: 0.5,
    },
    mainContainer: {
        marginHorizontal: 10,
    },
    text: {
        fontSize: 14,
        marginVertical: 3
    },
    description: {
        fontSize: 10
    },
    item: {
        marginVertical: 5
    },
    profileText: {
        position: 'absolute',
        left: 70,
        marginTop: 10,
        color: 'white'
    },
    profileTitle: {
        textAlign: 'center',
        marginTop: 8,
    },
    activeText: {
        color: DEFAULT_COLOR,
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10
    },
    textTnput: {
        marginVertical: 5,
        height: 36,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black'
    },
    textareTnput: {
        marginVertical: 5,
        height: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black'
    }
});