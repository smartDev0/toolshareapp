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
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';

class EquipmentReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }

    render() {
        return (
            <> 
                {this.state.flag ?
                    (
                        <View style={{ flex: 1 }}>
                            <View style={{
                                flexDirection: 'row',
                                paddingVertical: 12,
                            }}>
                                <TouchableOpacity
                                    style={{ marginTop: 15, marginLeft: 5, position: 'absolute', zIndex: 10 }}
                                    onPress={() => this.setState({flag:false})}>
                                    <AntDesign name="close" size={26} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 20,
                                marginHorizontal: 10,
                                alignItems: 'center',
                            }}>
                                <Text style={styles.title}> Your listing is now live!</Text>
                            </View>
                            <ScrollView style={styles.container}></ScrollView>
                            <TabBar props={this.props} />
                        </View>
                    )
                    :
                    (
                        <View style={{ flex: 1 }}>
                            <View style={{
                                flexDirection: 'row',
                                paddingVertical: 12,

                            }}>
                                <TouchableOpacity
                                    style={{ marginTop: 15, marginLeft: 5, position: 'absolute', zIndex: 10 }}
                                    onPress={() => this.props.navigation.navigate('EquipmentRequirementScreen')}>
                                    <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 30,
                                marginHorizontal: 10,
                                alignItems: 'center',
                            }}>
                                <Text style={styles.box}>4</Text>
                                <Text>&nbsp;</Text>
                                <Text style={styles.title}> Review Listing</Text>
                            </View>
                            <View style={{
                                borderBottomColor: DEFAULT_COLOR,
                                borderWidth: 0.5,
                                marginVertical: 5,
                                marginHorizontal: 10
                            }}></View>
                            <ScrollView style={styles.container}>
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
                                    <Text style={styles.textDescription}>
                                        After 9am                     Before 9pm {'\n'}
                                    </Text>
                                    <View>
                                        <Text style={styles.text}>Metting Point</Text>
                                    </View>
                                    <View style={styles.divider} />
                                    <View style={{ width: '100%', height: 200 }}></View>
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
                                    onPress={() => this.setState({ flag: true })}
                                >
                                    <Text style={styles.buttonText}>FINISH & PUBLISH</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )}
            </>
        )
    }
}
export default EquipmentReview;

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
        fontSize: 20,
        color:'black'
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
        marginVertical: 5
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