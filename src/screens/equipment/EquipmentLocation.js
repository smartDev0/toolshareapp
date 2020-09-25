import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import DateTimePicker from '@react-native-community/datetimepicker';

import Moment from 'moment';

class EquipmentLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'time',
            date: new Date(),
            startShow: false,
            startDate: new Date(),
            endShow: false,
            endDate: new Date()
        }
    }
    onChange = (event, selectedDate) => {
        console.log(event, selectedDate);
        this.setState({
            startDate: selectedDate,
            startShow:false
        })
    }
    onChangeEnd = (event, selectedDate) => {
        console.log(event, selectedDate);
        this.setState({
            endDate: selectedDate,
            endShow: false
        })
    }
    render() {
        Moment.locale('en');
        const { mode, date, startShow, endShow, startDate, endDate } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 12,
                }}>
                    <TouchableOpacity
                        style={{ marginTop: 15, marginLeft: 0, position: 'absolute', zIndex: 10 }}
                        onPress={() => this.props.navigation.navigate('EquipmentDetailScreen')}>
                        <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 25,
                    marginHorizontal: 10,
                    alignItems: 'center',
                }}>
                    <Text style={styles.box}>2</Text>
                    <Text>&nbsp;</Text>
                    <Text style={styles.title}> Equipment Location</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View>
                            <Text style={styles.text}>Equipment location will not be made public until you have approved rental.</Text>
                            <Text style={styles.text}>Country</Text>
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
                                        borderColor: 'white',
                                        backgroundColor: '#FFFFFF',

                                    },
                                    iconContainer: { top: 8, right: 10, },
                                }}
                                placeholder={{ label: 'Country', value: '' }}
                            />
                            <Text style={styles.text}>Street Address</Text>
                            <TextInput
                                style={styles.textTnput}
                                placeholder=""
                                placeholderTextColor="grey"
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <Text style={styles.text}>Apt, Suite. (optional)</Text>
                            <TextInput
                                style={styles.textTnput}
                                placeholder=""
                                placeholderTextColor="grey"
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <View style={{
                                flexDirection: 'row',
                                justifyContent:'space-between'
                            }}>
                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.text}>Town / City</Text>
                                    <TextInput
                                        style={styles.textTnput}
                                        placeholder=""
                                        placeholderTextColor="grey"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                    />
                                </View>
                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.text}>State</Text>
                                    <TextInput
                                        style={styles.textTnput}
                                        placeholder=""
                                        placeholderTextColor="grey"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                    />
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{ flex: 0.48 }}>
                                    <Text style={styles.text}>Zip Code</Text>
                                    <TextInput
                                        style={styles.textTnput}
                                        placeholder=""
                                        placeholderTextColor="grey"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                    />
                                </View>
                            </View>
                            <Text style={styles.text}>You meeting availablity</Text>
                            <View style={styles.divider}></View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{ flex: 0.48 }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                            startShow:true
                                        })}}>
                                        <Text style={styles.text}>Start</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ flex: 0.48 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.textTime}>
                                            {Moment(date).format('hh:mm a')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* {startShow && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={startDate}
                                        mode={mode}
                                        is24Hour={true}
                                        onChange={this.onChange}
                                    />
                                )} */}
                            </View>
                            <View style={styles.divider}></View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{ flex: 0.48 }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                endShow: true
                                            })
                                        }}>
                                        <Text style={styles.text}>End</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ flex: 0.48 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.textTime}>
                                            {Moment(endDate).format('hh:mm a')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* {endShow && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={endDate}
                                        mode={mode}
                                        is24Hour={true}
                                        onChange={this.onChangeEnd}
                                    />
                                )} */}
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    marginVertical: 10,
                    marginHorizontal: 10
                }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('EquipmentPhotoScreen')}
                    >
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default EquipmentLocation;

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
    button: {
        backgroundColor: DEFAULT_COLOR,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 6
    },
    divider: {
        borderBottomColor: DEFAULT_COLOR,
        borderWidth: 0.5,
    },
    buttonText: {
        color: 'white'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    box: {
        width: 20,
        height: 20,
        backgroundColor: DEFAULT_COLOR,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 0,

    },
    title: {
        fontSize: 20
    },
    checkbox: {
        alignSelf: "center",
    },
    mainContainer: {
        marginHorizontal: 10,
    },
    text: {
        fontSize: 14,
        marginVertical: 5
    },
    textTime: {
        textAlign: 'right',
        fontSize: 14,
        marginVertical: 5
    },
    textDescription: {
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
    },
    label: {
        margin: 5,
        color: 'black',
        fontSize: 10,
        width: '100%',
        flexWrap: 'wrap',
        flex: 1
    },
});