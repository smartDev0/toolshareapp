import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    Platform
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
const d = Dimensions.get("window");
class Message extends React.Component {
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
                            onPress={() => this.props.navigation.navigate('InboxScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 30,
                        marginHorizontal: 10,
                    }}>
                        <View>
                            <Text style={styles.title}>Ashley</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('CongratulationScreen')}>
                                <View style={styles.toolBox}>

                                    <FontAwesome name="briefcase" size={16} color="grey" />

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('InboxScreen')}>
                                <View style={styles.activeToolBox}>
                                    <Fontisto name="email" size={16} color="grey" />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.toolBox}>
                                <Entypo name="user" size={16} color="grey" />
                            </View>
                        </View>
                        <View style={{
                            marginTop: -20
                        }}>
                            <Text style={styles.activeText}>Confirmed</Text>
                        </View>
                        <View style={styles.divider} />
                    </View>
                    <ScrollView style={styles.container}>
                        <View style={styles.mainContainer}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginVertical: 5
                            }}>
                                <View style={{ width: 50, height: 50, borderRadius: 25 }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/User1.png")}
                                    />
                                </View>
                                <View style={{
                                    maxWidth: d.width * 0.5,
                                    padding: 10,
                                    borderColor: DEFAULT_COLOR,
                                    borderWidth: 0.6,
                                    marginLeft: 10,
                                    backgroundColor: DEFAULT_COLOR,
                                }}>
                                    <Text style={styles.receivedText}>
                                        Hey George, sounds good. Let me know if there is anything else you require.
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                marginVertical: 5
                            }}>
                                <View style={{
                                    maxWidth: d.width * 0.5,
                                    padding: 10,
                                    borderColor: DEFAULT_COLOR,
                                    borderWidth: 0.6,
                                    marginRight: 10,
                                }}>
                                    <Text style={styles.sentText}>
                                        Hey George, sounds good. Let me know if there is anything else you require.
                                    </Text>
                                </View>
                                <View style={{ width: 50, height: 50, borderRadius: 25 }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/User2.png")}
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

                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    >
                        <View style={{ flex: 0.9 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Write Message"
                                placeholderTextColor="grey"
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={{ flex: 0.1, marginLeft: 5 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('CongratulationScreen')}
                            >
                                <FontAwesome name="send" size={26} color={DEFAULT_COLOR} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </>
        )
    }
}
export default Message;

const styles = StyleSheet.create({
    contactSectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBackground: {
        backgroundColor: DEFAULT_COLOR,
        height: 150
    },
    textInput: {
        height: 36,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black',
        borderRadius: 2,

    },
    button: {
        backgroundColor: DEFAULT_COLOR,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 6,
        paddingHorizontal: 15,
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
    activeToolBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: DEFAULT_COLOR,
        marginHorizontal: 2
    },
    toolBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 2
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 50,
        height: 50,
        backgroundColor: 'grey',
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
    },
    receivedText: {
        fontSize: 14,
        color: 'white'
    },
    sentText: {
        fontSize: 14,
        color: 'black'
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
        color: 'green',
        fontSize: 14,
    },

    label: {
        margin: 5,
        color: 'grey',
        fontSize: 10,
    },
    imageStyle: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
    },
});