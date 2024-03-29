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

class Order extends React.Component {
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
                            style={{ marginTop: 30, marginLeft: 0, position: 'absolute', zIndex: 10 }}
                            onPress={() => this.props.navigation.navigate('PaymentScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 60,
                        marginHorizontal: 10,
                    }}>
                        <Text style={styles.title}>Confirm Order</Text>
                        <View style={styles.divider} />
                    </View>
                    <ScrollView style={styles.container}>
                        <View style={styles.mainContainer}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <View>
                                    <Text style={styles.text}>
                                        Milwaukee M18 1/2“ {'\n'}
                                    Compact Drill
                                </Text>
                                    <Text style={{marginVertical:5, fontSize:12, color:"grey"}}>
                                        Dec 6~9, 3 days
                                </Text>
                                </View>
                                <View style={{ height: 80, width: 120, }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/3.png")}
                                    />
                                </View>
                            </View>
                            <View style={styles.divider} />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('PaymentScreen')}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <View style={{
                                        width: 30,
                                        height: 20,
                                        borderColor: DEFAULT_COLOR,
                                    }}>
                                        <Image
                                            style={{
                                                width:'100%', height:'100%'
                                            }}
                                            source={require("./../../../assets/images/visa.png")}
                                        />
                                    </View>
                                    <Text style={styles.text}> Card **** **** **** 4381</Text>
                                </View>
                            </TouchableOpacity>
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
                                <Text style={{marginVertical:5, fontSize:12, color:"grey"}}>
                                    $13 * 3 days
                                </Text>
                                <Text style={{marginVertical:5, fontSize:12, color:"grey"}}>
                                    $39
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <Text style={{marginVertical:5, fontSize:12, color:"grey"}}>
                                    Service fee
                                </Text>
                                <Text style={{marginVertical:5, fontSize:12, color:"grey"}}>
                                    $5.85
                                </Text>
                            </View>
                            <View style={styles.divider} />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Text style={styles.text}>
                                    Total
                                </Text>
                                <Text style={styles.textDescription}>
                                    $44.85
                                </Text>
                            </View>
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.text}>Cancelation Policy</Text>
                                <Text style={styles.policyText}>
                                    Cancel within 48 hours of booking and 14 days before checki-in to get full refund. Cancel up to & days begore check-in and get 50% refund (minus servie fees). Cancel within 7 days of rental and the reservation is non-refundable.
                                </Text>
                            </View>
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.policyText}>
                                    I agree to the
                                    <Text style={styles.activeText}> Equipment Rules, Cancelation Policy,</Text>
                                    and the  <Text style={styles.activeText}> Refund Policy.</Text>
                                    I also agree to pay the total amount shown, which includes Service Fees.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderTopColor: 'grey',
                        borderWidth: 1,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                            onPress={() => this.props.navigation.navigate('CongratulationScreen')}
                        >
                            <Text style={styles.buttonText}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </>
        )
    }
}
export default Order;

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
        backgroundColor: '#ea565c',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 6,
        paddingHorizontal: 15,
        width:'80%'
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