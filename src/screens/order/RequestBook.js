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
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
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
                            style={{ marginTop: 30, marginLeft: 0, position: 'absolute', zIndex: 10 }}
                            onPress={() => this.props.navigation.navigate('ToolProfileScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 60,
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
                                <View>
                                    <Text style={styles.text}>
                                        Milwaukee M18 {'\n'}1/2“ Compact Drills{'\n'}
                                        
                                    </Text>
                                    <Text style={{marginTop:5, fontSize:12, color:"grey"}}>
                                        $13 / day
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
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <View>
                                        <Text style={styles.textDescription}>
                                        Start Date
                                        </Text>
                                        <Text style={{marginTop:10, fontSize:12, color:"grey"}} > 
                                        Decmeber 6
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.textDescription}>
                                        End Date
                                        </Text>
                                        <Text style={{marginTop:10, fontSize:12, color:"grey"}} > 
                                        Decmeber 6
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.textDescription}>
                                        Duration
                                        </Text>
                                        <Text style={{marginTop:10, fontSize:12, color:"grey"}} > 
                                        3 Days
                                        </Text>
                                    </View>
                                
                                
                            </View>

                           
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.text}>Exchange Time</Text>
                            </View>
                            <Text style={styles.textDescription}>
                                9am                    9pm
                            </Text>
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.text}>Metting Point</Text>
                            </View>
                            <View style={{ height: 180, width: '100%' }}>
                                <MapView
                                    style={styles.map}
                                    provider={PROVIDER_GOOGLE}
                                    region={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                >
                                    <Marker
                                        coordinate={{
                                            latitude: 37.78825,
                                            longitude: -122.4324,
                                        }}
                                        onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                                        title={'Meeting Location'}
                                        description={'Exact location will be provided after booking .'}
                                    >
                                        <Image source={require('./../../../assets/images/ToolMarker.png')}></Image>
                                    </Marker>
                                </MapView>
                            </View>
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
                        alignItems: 'center',
                        justifyContent:'center'
                    }}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                            onPress={() => this.props.navigation.navigate('RequestStepOneScreen')}
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
    map: {
        width: "100%",
        height: '100%',
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
        borderBottomColor: '#f0f8ff',
        borderWidth: 0.5,
        marginVertical:15
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