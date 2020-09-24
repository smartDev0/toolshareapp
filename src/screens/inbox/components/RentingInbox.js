import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform,
    SafeAreaView
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../../styles/common';

class RentingInbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.privatNavigation.navigation.navigate('MessageScreen')}>
                            <View style={styles.item}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 60, height: 60, borderColor: 'grey', borderWidth: 0.8, borderRadius: 30 }}>
                                        <Image source={require("./../../../../assets/images/User1.png")} style={{
                                            width: '100%', height: '100%'
                                        }} />
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={styles.text}>
                                                Bettie Perry
                                        </Text>
                                            <Text style={styles.activeText}>  - Confirmed</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.text}>
                                                Hey ashley, I would like to hang a ..
                                        </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.textDescription}>
                                                Milwaukee M18 CompactDrill . Jan 5 ~ 8
                                        </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.text}>
                                        $35
                                </Text>
                                    <Text style={styles.box}></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider}></View>
                        <TouchableOpacity
                            onPress={() => this.props.privatNavigation.navigation.navigate('MessageScreen')}>
                            <View style={styles.item}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 60, height: 60, borderColor: 'grey', borderWidth: 0.8, borderRadius: 30 }}>
                                        <Image source={require("./../../../../assets/images/User2.png")} style={{
                                            width: '100%', height: '100%'
                                        }} />
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={styles.text}>
                                                Bettie Perry
                                        </Text>
                                            <Text style={styles.text}>  - Pending</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.text}>
                                                Hey ashley, I would like to hang a ..
                                        </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.textDescription}>
                                                Milwaukee M18 CompactDrill . Jan 5 ~ 8
                                        </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.text}>
                                        $35
                                </Text>
                                    <Text style={styles.box}></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider}></View>
                        <TouchableOpacity
                            onPress={() => this.props.privatNavigation.navigation.navigate('MessageScreen')}>
                            <View style={styles.item}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 60, height: 60, borderColor: 'grey', borderWidth: 0.8, borderRadius: 30 }}>
                                        <Image source={require("./../../../../assets/images/User1.png")} style={{
                                            width: '100%', height: '100%'
                                        }} />
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={styles.text}>
                                                Bettie Perry
                                        </Text>
                                            <Text style={styles.text}>  - Denied</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.text}>
                                                Hey ashley, I would like to hang a ..
                                        </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.textDescription}>
                                                Milwaukee M18 CompactDrill . Jan 5 ~ 8
                                        </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.text}>
                                        $35
                                </Text>
                                    <Text style={styles.box}></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider}></View>
                        <TouchableOpacity
                            onPress={() => this.props.privatNavigation.navigation.navigate('MessageScreen')}>
                            <View style={styles.item}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 60, height: 60, borderColor: 'grey', borderWidth: 0.8, borderRadius: 30 }}>
                                        <Image source={require("./../../../../assets/images/User2.png")} style={{
                                            width: '100%', height: '100%'
                                        }} />
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={styles.text}>
                                                Bettie Perry
                                        </Text>
                                            <Text style={styles.activeText}>  - Confirmed</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.text}>
                                                Hey ashley, I would like to hang a ..
                                        </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.textDescription}>
                                                Milwaukee M18 CompactDrill . Jan 5 ~ 8
                                        </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.text}>
                                        $35
                                </Text>
                                    <Text style={styles.box}></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider}></View>
                        <TouchableOpacity
                            onPress={() => this.props.privatNavigation.navigation.navigate('MessageScreen')}>
                            <View style={styles.item}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 60, height: 60, borderColor: 'grey', borderWidth: 0.8, borderRadius: 30 }}>
                                        <Image source={require("./../../../../assets/images/User1.png")} style={{
                                            width: '100%', height: '100%'
                                        }} />
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={styles.text}>
                                                Bettie Perry
                                        </Text>
                                            <Text style={styles.activeText}>  - Confirmed</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.text}>
                                                Hey ashley, I would like to hang a ..
                                        </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginVertical: 3 }}>
                                            <Text style={styles.textDescription}>
                                                Milwaukee M18 CompactDrill . Jan 5 ~ 8
                                        </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.text}>
                                        $35
                                </Text>
                                    {/* <Text style={styles.box}></Text> */}
                                </View>
                            </View>
                        </TouchableOpacity>
                        
                        <View style={styles.divider}></View>


                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default RentingInbox;
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
        borderBottomColor: 'grey',
        borderWidth: 0.3,
    },
    buttonText: {
        color: 'white'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    box: {
        width: 10,
        height: 10,
        backgroundColor: DEFAULT_COLOR,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal:5

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
        fontSize: 13,
    },
    textTime: {
        textAlign: 'right',
        fontSize: 14,
        marginVertical: 5
    },
    textDescription: {
        fontSize: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
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
        color: 'green',
        fontSize: 13,
        textAlign: 'center',
        // marginVertical: 10
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