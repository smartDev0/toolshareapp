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

class RequestStepOne extends React.Component {
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
                            onPress={() => this.props.navigation.navigate('RequestBookScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 60,
                        marginHorizontal: 10,
                    }}>
                        <Text style={styles.text}>Step 1 of 2</Text>
                        <Text style={styles.title}>Book your request</Text>
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
                                    <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:10 }}>
                                        <View style={styles.box}>
                                            <Text >
                                                Dec 6
                                           </Text>
                                        </View>
                                        <Text> &nbsp;</Text>
                                        <Text style={styles.textDescription}>
                                           Tuesday pick up {'\n'}10am
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.box}>
                                            <Text >
                                                Dec 9
                                           </Text>
                                        </View>
                                        <Text> &nbsp;</Text>
                                        <Text style={styles.textDescription}>
                                            Friday return {'\n'}10pm
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ height: 80, width: 120, }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/3.png")}
                                    />
                                </View>
                            </View>
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
                                <Text style={styles.text}>Equipment Rules</Text>
                            </View>
                            <View
                               >
                                <Text style={styles.textDescription}>
                                    Shoul only be used for its intended purpos.
                                </Text>
                                <Text style={styles.textDescription}>
                                    Do not abouse or misuse this equipment.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View 
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderTopColor: 'grey',
                        borderWidth: 1,
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    >
                        
                        <View>
                            <Text>
                                $44.35 for 3 days
                            </Text>
                            <Text style={styles.textDescription}>see price details</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                            onPress={() => this.props.navigation.navigate('RequestStepTwoScreen')}
                        >
                            <Text style={styles.buttonText}>
                               NEXT
                            </Text>
                        </TouchableOpacity>
                        

                    </View>
                </View>


            </>
        )
    }
}
export default RequestStepOne;

const styles = StyleSheet.create({
    contactSectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBackground: {
        backgroundColor: DEFAULT_COLOR,
        height: 150
    },
    map: {
        width: "100%",
        height: '100%',
    },
    button: {
        backgroundColor: DEFAULT_COLOR,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 6,
        paddingHorizontal: 15,
        borderRadius:2
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        width: 50,
        height: 50,
        backgroundColor: '#d8d8d8',
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