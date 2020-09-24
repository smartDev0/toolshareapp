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
    ImageBackground
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
export default class LenderProfile extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.headerBackground}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{ marginTop: 10, marginLeft: 5 }}
                            onPress={() => this.props.navigation.navigate('ToolProfileScreen')}>
                            <Feather name="chevron-left" size={35} color="white" />
                        </TouchableOpacity>
                        <View style={styles.imageGroup}>
                            <Image
                                style={styles.image}
                                source={require("./../../../assets/images/Oval.png")} />
                            <Text style={styles.profileText}>
                                Hi!,I'm Ashley
                            </Text>
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.text}>About</Text>
                        <Text style={styles.description}>Hi, I am Ashley!
                        I have been colltecting and tinkering with tools for the last 40 years. So I’ve accumulated quite the collection. I mostly like to take on the odd renovation and wood working projects.
                        </Text>
                        <View style={styles.divider}></View>
                        <Text style={styles.text}>Ron's Equipment</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginVertical: 5,
                            alignItems: 'center',
                        }}>
                            <View style={{ flex: 0.3 }}>
                                <Image source={require('./../../../assets/images/Equipment1.png')}></Image>
                                <Text style={styles.imageText}>Milwaukee Drill</Text>
                            </View>
                            <View style={{ flex: 0.05 }}></View>
                            <View style={{ flex: 0.3 }}>
                                <Image source={require('./../../../assets/images/Equipment2.png')}></Image>
                                <Text style={styles.imageText}>Makita Table Saw</Text>
                            </View>
                            <View style={{ flex: 0.05 }}></View>
                            <View style={{ flex: 0.3 }}>
                                <Image source={require('./../../../assets/images/Equipment3.png')}></Image>
                                <Text style={styles.imageText}>Caulking gun</Text>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                        <Text style={styles.text}>Location</Text>
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
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ProfileEditScreen')}>
                                <Text style={styles.activeText}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
                <TabBar props={this.props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: "column",
    },
    map: {
        width: "100%",
        height: '100%',
    },
    headerBackground: {
        backgroundColor: DEFAULT_COLOR,
        height: 150
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 25,
    },
    imageGroup: {
        position: 'absolute',
        width:'100%',
        top: 120,
        left: 25
    },
    imageText: {
        fontSize: 12
    },
    divider: {
        borderColor: 'grey',
        borderWidth: 0.5,
        marginVertical: 10
    },
    mainContainer: {
        marginHorizontal: 10,
        marginTop: 40
    },
    text: {
        fontSize: 16,
        marginVertical: 4
    },
    description: {
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
    activeText: {
        color: DEFAULT_COLOR,
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10
    }
});