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


class Tool extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={styles.item}>
                            <View>
                                <View style={{ width: 70, height: 70, borderColor: 'grey', borderWidth: 0.8 }}>
                                    <Image source={require("./../../../../assets/images/Tool6.png")} style={{
                                        width: '100%', height: '100%'
                                    }} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Equiptment: {'\n'}
                                    Milwaukee M18/2
                                </Text>
                                <Text style={styles.textDescription}>
                                    Rented to:
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Total: {'\n'}
                                    $52.50
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Exchange Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Report a Problem</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={styles.item}>
                            <View>
                                <View style={{ width: 70, height: 70, borderColor: 'grey', borderWidth: 0.8 }}>
                                    <Image source={require("./../../../../assets/images/Tool7.png")} style={{
                                        width: '100%', height: '100%'
                                    }} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Equiptment: {'\n'}
                                    Little Giant Ladder
                                </Text>
                                <Text style={styles.textDescription}>
                                    Rented to:{'\n'}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Total: {'\n'}
                                    $52.50
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Exchange Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Report a Problem</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={styles.item}>
                            <View>
                                <View style={{ width: 70, height: 70, borderColor: 'grey', borderWidth: 0.8 }}>
                                    <Image source={require("./../../../../assets/images/Tool8.png")} style={{
                                        width: '100%', height: '100%'
                                    }} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Equiptment: {'\n'}
                                    Makita 18V 1/2
                                </Text>
                                <Text style={styles.textDescription}>
                                    Rented to:{'\n'}
                                    Alvin James
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Total: {'\n'}
                                    $52.50
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Exchange Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Report a Problem</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={styles.item}>
                            <View>
                                <View style={{ width: 70, height: 70, borderColor: 'grey', borderWidth: 0.8 }}>
                                    <Image source={require("./../../../../assets/images/Tool9.png")} style={{
                                        width: '100%', height: '100%'
                                    }} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Equiptment: {'\n'}
                                    Milwaukee M18/2
                                </Text>
                                <Text style={styles.textDescription}>
                                    Rented to:
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Total: {'\n'}
                                    $52.50
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Exchange Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Report a Problem</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={styles.item}>
                            <View>
                                <View style={{ width: 70, height: 70, borderColor: 'grey', borderWidth: 0.8 }}>
                                    <Image source={require("./../../../../assets/images/Tool10.png")} style={{
                                        width: '100%', height: '100%'
                                    }} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Equiptment: {'\n'}
                                    Milwaukee M18/2
                                </Text>
                                <Text style={styles.textDescription}>
                                    Rented to:
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Total: {'\n'}
                                    $52.50
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Exchange Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3
                                    }}>
                                    <Text style={styles.textDescription}>Report a Problem</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Tool;
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
        fontSize: 16,
        marginVertical: 5
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