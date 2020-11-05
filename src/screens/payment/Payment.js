import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            check: false,
            error: false
        }
    }
    onSubmit = () => {
        if (this.state.check) {
            this.props.navigation.navigate('OrderScreen')
        } else {
            this.setState({ error: true });
        }

    }
    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 12,

                    }}>
                        <TouchableOpacity
                            style={{ marginTop: 30, marginLeft: 0, position: 'absolute', zIndex: 10 }}
                            onPress={() => this.props.navigation.navigate('RequestStepTwoScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 60,
                        marginHorizontal: 10,
                        marginBottom: 10
                    }}>
                        {this.state.error &&
                            <View style={{ backgroundColor: "#ea565c", padding: 10, marginBottom: 10, }}>
                                <Text style={{ color: "white" }}>
                                    Payment failed. Try again, or try another payment method. 
                                        <Text 
                                            onPress={()=>{this.props.navigation.navigate('HelpScreen')}}
                                            style={{
                                                color: "white", textDecorationLine: "underline",
                                                textDecorationStyle: "solid",
                                                textDecorationColor: "white",
                                            }}>
                                            Get Help
                                        </Text>
                                </Text>
                            </View>
                        }

                        <Text style={styles.title}>Enter your card details</Text>
                    </View>
                    <ScrollView style={styles.container}>
                        <View style={styles.mainContainer}>
                            <Text style={styles.text}>CARD DETAILS</Text>
                            <View>

                                <TextInput
                                    style={styles.cardInput}
                                    placeholder="0000 0000 0000 0000"
                                    placeholderTextColor="grey"
                                    blurOnSubmit={false}
                                />
                                <Image
                                    style={styles.imageStyle}
                                    source={require("./../../../assets/images/payment.png")}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <TextInput
                                    style={styles.dateInput}
                                    placeholder="MM/YY"
                                    placeholderTextColor="grey"
                                    blurOnSubmit={false}
                                />
                                <TextInput
                                    style={styles.cvcInput}
                                    placeholder="CVC"
                                    placeholderTextColor="grey"
                                    blurOnSubmit={false}
                                />
                                <Image
                                    style={styles.imageStyle}
                                    source={require("./../../../assets/images/cvc.png")}
                                />
                            </View>
                            <Text style={styles.text}>NAME ON CARD</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder=""
                                placeholderTextColor="grey"
                                blurOnSubmit={false}
                            />
                            <Text style={styles.text}>COUNTRY OR REGION</Text>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                useNativeAndroidPickerStyle={false}
                                items={[
                                    { label: 'United States', value: 'United States' },
                                    { label: 'Canada', value: 'Canada' },
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
                                        borderColor: 'grey',
                                        backgroundColor: '#FFFFFF',

                                    },
                                    iconContainer: { top: 8, right: 10, },
                                }}
                                placeholder={{ label: 'COUNTRY', value: '' }}
                            />
                            <TextInput
                                style={styles.zipInput}
                                placeholder="ZIP CODE"
                                placeholderTextColor="grey"
                                blurOnSubmit={false}
                            />
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    size={15}
                                    checked={this.state.check}
                                    onPress={() => this.setState({
                                        check: !this.state.check, error:false
                                    })}

                                />
                                <Text style={styles.label}>
                                    Remember this card.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                    }}
                    >
                        <TouchableOpacity
                            style={styles.nextButton}
                            activeOpacity={0.7}
                            onPress={this.onSubmit}
                        >
                            <Feather name="chevron-right" size={26} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>


            </>
        )
    }
}
export default Payment;
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
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    inputIOS: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 36,
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderWidth: 1,
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
    nextButton: {
        backgroundColor: DEFAULT_COLOR,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20
    },
    divider: {
        borderBottomColor: DEFAULT_COLOR,
        borderWidth: 0.5,
        marginVertical: 10
    },
    buttonText: {
        color: 'white'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    cardInput: {
        height: 36,
        paddingVertical: 5,
        paddingHorizontal: 10,
        paddingRight: 100,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    zipInput: {
        height: 36,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    textInput: {
        height: 36,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black',
        borderRadius: 5
    },
    dateInput: {
        height: 36,
        width: '50%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black',
        borderBottomLeftRadius: 5
    },
    cvcInput: {
        height: 36,
        width: '50%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        paddingRight: 50,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black',
        borderBottomRightRadius: 5
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 0,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    imageText: { fontSize: 16 },

    checkbox: {
        alignSelf: "center",
    },
    mainContainer: {
        marginHorizontal: 10,
    },
    text: {
        fontSize: 14,
        marginVertical: 10
    },
    textTime: {
        textAlign: 'right',
        fontSize: 14,
        marginVertical: 5
    },
    textDescription: {
        fontSize: 13
    },
    item: {
        marginVertical: 5
    },
    policyText: {
        fontSize: 12
    },

    activeText: {
        color: DEFAULT_COLOR,
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
    },
    label: {
        margin: 6,
        color: 'grey',
        fontSize: 14,
        width: '100%',
        flexWrap: 'wrap',
    },
    imageStyle: {
        position: 'absolute',
        right: 10,
        marginTop: 10
    },
});