import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Button,
    Platform
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
import DateRangePicker from 'react-native-date-ranges';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
class ToolProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            dateRange: null,
        }
    }
    customButton = (onConfirm) => (
        <Button
            onPress={onConfirm}
            style={{ container: { width: '80%', marginHorizontal: '3%' }, text: { fontSize: 20 } }}
            primary
            title={'Confirm'}
        ></Button>
    )
    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <ScrollView style={styles.container}>
                        <TouchableOpacity
                            style={{ marginTop: 15, marginLeft: 5, position: 'absolute', zIndex: 10 }}
                            onPress={() => this.props.navigation.navigate('EquipmentRequirementScreen')}>
                            <Feather name="chevron-left" size={35} color="white" />
                        </TouchableOpacity>
                        <View style={{ height: 180, width: '100%', }}>
                            <Image
                                style={styles.imageStyle}
                                source={require("./../../../assets/images/3.png")}
                            />
                        </View>
                        <View style={styles.mainContainer}>
                            <View>
                                <Text style={styles.imageText}>Milwaukee M18 1/2“ Compact Drill</Text>
                                <View style={{
                                    display: 'flex',
                                    alignItems: 'flex-end'
                                }}>
                                    <Image
                                        source={require("./../../../assets/images/Oval.png")}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.text}>About this tool</Text>
                            </View>
                            <View style={styles.divider} />
                            <Text style={styles.textDescription}>
                                Milwaukee Bushless Motor{'\n'}
                            Compact Design with the excellent and controll - ideal for overhead applications or working in tight spaces{'\n'}
                            1/2” Metak Chuck {'\n'}
                            Peak torque: 500 in-ibs{'\n'}
                            Lenght: 6 - 7/8”{'\n'}
                            Weight: 2.8 Ibs {'\n'}
                            </Text>
                            <View>
                                <Text style={styles.text}>Add Ons</Text>
                            </View>
                            <View style={styles.divider} />
                            <Text style={styles.textDescription}>
                                1 - Battery Charger{'\n'}
                            2 - M18 3.0 Amp Batteries {'\n'}
                            </Text>
                            <View>
                                <Text style={styles.text}>Metting Availability</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.dateSectionStyle}>
                                <DateRangePicker
                                    mode="range"
                                    buttonText="Confirm"
                                    markText="Pick your target date from here"
                                    placeholder="Metting Date Period"
                                    style={{ height: 40, borderRadius: 0, borderColor: DEFAULT_COLOR, borderWidth: 1, backgroundColor: '#FFFFFF' }}
                                    customStyles={{
                                        placeholderText: { fontSize: 15 },
                                        contentText: { fontSize: 15, color: this.state.flag ? 'black' : 'white' },
                                        headerMarkTitle: { color: '#FFFFFF' },
                                        headerStyle: { backgroundColor: '#0071bc' }
                                    }}
                                    customButton={this.customButton}
                                    onConfirm={(range) => this.setState({ dateRange: range, flag: true })}
                                    selectedBgColor={DEFAULT_COLOR}
                                />
                                <Icon name="calendar" size={20} color={DEFAULT_COLOR} style={{ position: 'absolute', left: 10, top: 10 }} />
                                <MaterialIcons name="close" size={20} style={{ position: 'absolute', right: 10, top: 10 }}
                                    onPress={() => this.setState({ dateRange: null, flag: false })} />
                            </View>
                            <View>
                                <Text style={styles.text}>Metting Point</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={{ width: '100%', height: 200 }}></View>
                            <View style={styles.divider} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
                                <View style={{flex:0.96}}>
                                    <Text style={styles.text}>
                                        To protect your payment, never transfer money or communicate outside of the ToolShare website or app.
                                    </Text>
                                </View>
                                <View>
                                    <Image
                                    source={require("./../../../assets/images/ToolShareIcon.png")}
                                    />
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderTopColor: 'grey',
                        borderWidth: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems:'center'
                    }}
                    >
                        <Text>
                            $13 / day
                        </Text>
                        {this.state.dateRange != null ? (<TouchableOpacity
                            style={styles.checkButton}
                            activeOpacity={0.7}
                            onPress={() => this.props.navigation.navigate('RequestBookScreen')}
                        >
                            <Text style={styles.buttonText}>
                                REQUEST BOOK 
                            </Text>
                        </TouchableOpacity>): (<TouchableOpacity
                            style = {styles.checkButton}
                            activeOpacity={0.7}
                            
                        >
                            <Text style={styles.buttonText}>
                            CHECK AVAILABILITY
                            </Text>
                        </TouchableOpacity>)}
                    </View>
                </View>
            </>
        )
    }
}
export default ToolProfile;

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
    checkButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 6,
        paddingHorizontal:15
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
    dateSectionStyle: {
        backgroundColor: '#FFFFFF',
        marginVertical: 10,
        borderRadius: 5,
        width: '100%'
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
        marginVertical: 5,
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
    imageStyle: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
    },
});