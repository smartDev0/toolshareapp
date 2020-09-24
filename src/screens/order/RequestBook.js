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

class RequestBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
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
                            style={{ marginTop: 15, marginLeft: 5, position: 'absolute', zIndex: 10 }}
                            onPress={() => this.props.navigation.navigate('EquipmentRequirementScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 40,
                        marginHorizontal: 10,
                        alignItems: 'center',
                    }}>
                    </View>
                    <ScrollView style={styles.container}>
                        
                        <View style={styles.mainContainer}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems:'center'
                            }}>
                                <Text style={styles.text}>
                                    Milwaukee M18 1/2“ {'\n'}{'\n'}
                                    $13 / day
                                </Text>
                                <View style={{ height: 60, width: 100, }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/3.png")}
                                    />
                                </View>
                            </View>
                            <View style={styles.divider} />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <Text style={styles.textDescription}>
                                    Start Date{'\n'}
                                    Decmeber 6
                                </Text>
                                <Text style={styles.textDescription}>
                                    End Date{'\n'}
                                    Decmeber 9
                                </Text>
                                <Text style={styles.textDescription}>
                                    Duration{'\n'}
                                   3 Days
                                </Text>
                            </View>

                           
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.text}>Metting Availability</Text>
                            </View>
                            <Text style={styles.textDescription}>
                                9am                    9pm
                            </Text>
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.text}>Metting Point</Text>
                            </View>
                            <View style={{ width: '100%', height: 200 }}></View>
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.text}>FEES & TAX DETAILS</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <Text style={styles.textDescription}>
                                    $13 * 3 days
                                </Text>
                                <Text style={styles.textDescription}>
                                    $39
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <Text style={styles.textDescription}>
                                   Service fee
                                </Text>
                                <Text style={styles.textDescription}>
                                    $5.85
                                </Text>
                            </View>
                            <View style={styles.divider} />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom:10
                                }}>
                                <Text style={styles.textDescription}>
                                    Total
                                </Text>
                                <Text style={styles.textDescription}>
                                    $44.85
                                </Text>
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
                        alignItems: 'center'
                    }}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                            onPress={() => this.setState({ flag: true })}
                        >
                            <Text style={styles.buttonText}>REQUEST TO BOOK</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </>
        )
    }
}
export default RequestBook;

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
        backgroundColor: 'red',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 6,
        paddingHorizontal: 15,
        width:'100%'
    },
    divider: {
        borderBottomColor: DEFAULT_COLOR,
        borderWidth: 0.5,
        marginVertical:10
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