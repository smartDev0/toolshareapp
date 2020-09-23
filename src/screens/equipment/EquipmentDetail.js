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
    CheckBox,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class EquipmentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            mailCheck: false,
            days: []
        }
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
                        onPress={() => this.props.navigation.navigate('HomeScreen')}>
                        <AntDesign name="close" size={26} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginHorizontal: 10,
                    alignItems: 'center',
                }}>
                    <Text style={styles.box}>1</Text>
                    <Text>&nbsp;</Text>
                    <Text style={styles.title}> Your equipment details</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View>
                            <Text style={styles.text}>Category</Text>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                useNativeAndroidPickerStyle={false}
                                items={[
                                    { label: 'Hand tool', value: 'Hand tool' },
                                    { label: 'Power tool', value: 'Power tool' },
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
                                placeholder={{ label: 'Hand tool, Power tool, ...', value: '' }}
                            />
                            <Text style={styles.text}>Equipment Type</Text>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                useNativeAndroidPickerStyle={false}
                                items={[
                                    { label: 'Screw Driver', value: 'Screw Driver' },
                                    { label: 'Drill', value: 'Drill' },
                                    { label: 'Step Ladder', value: 'Step Ladder' },
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
                                placeholder={{ label: 'Screw Driver, Drill, Step Ladder,...', value: '' }}
                            />
                            <Text style={styles.text}>Equipment Name</Text>
                            <TextInput
                                style={styles.textTnput}
                                placeholder=""
                                placeholderTextColor="grey"
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <Text style={styles.text}>Description</Text>
                            <TextInput
                                style={styles.textareTnput}
                                placeholderTextColor="grey"
                                returnKeyType="next"
                                blurOnSubmit={false}
                                numberOfLines={10}
                                multiline={true}
                            />
                            <Text style={styles.text}>Serial Number</Text>
                            <Text style={styles.textDescription}>
                                Adding a serial number helps us identify your equipment.
                            </Text>
                            <TextInput
                                style={styles.textTnput}
                                placeholder=""
                                placeholderTextColor="grey"
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <Text style={styles.text}>Add ons</Text>
                            <TextInput
                                style={styles.textareTnput}
                                placeholderTextColor="grey"
                                returnKeyType="next"
                                blurOnSubmit={false}
                                numberOfLines={10}
                                multiline={true}
                            />
                            <Text style={styles.text}>Condition</Text>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                useNativeAndroidPickerStyle={false}
                                items={[
                                    { label: 'Hand tool', value: 'Hand tool' },
                                    { label: 'Power tool', value: 'Power tool' },
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
                                placeholder={{ label: 'Specify condition of equipment', value: '' }}
                            />
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox}
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({
                                        checked: !this.state.checked
                                    })}
                                    tintColors={{ true: DEFAULT_COLOR, false: 'black' }}
                                />
                                <Text style={styles.label}>My tool/ equipment is in like new working order, with no comprimising damage or modifired in any way.</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    style={styles.checkbox}
                                    value={this.state.mailCheck}
                                    onValueChange={() => this.setState({
                                        checked: !this.state.mailCheck
                                    })}
                                    tintColors={{ true: DEFAULT_COLOR, false: 'black' }}
                                />
                                <Text style={styles.label}>I understant that itis my responsibility to inform my personal insuer about my participation ion ToolShare.</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.button}
                                    activeOpacity={0.7}
                                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                                >
                                    <Text style={styles.buttonText}>NEXT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

export default EquipmentDetail;

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
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        padding:6
    },
    buttonText: {
        color:'white'
    },
    box: {
        width: 20,
        height: 20,
        backgroundColor: DEFAULT_COLOR,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize:16
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 0,

    },
    title: {
        fontSize:20
    },
    checkbox: {
        alignSelf: "center",
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
        flex:1
    },
});