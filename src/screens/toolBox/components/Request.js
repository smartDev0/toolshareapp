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
    SafeAreaView,
    Alert,
    Modal
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../../styles/common';


class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            rejectFlag:false
        }
    }
    acceptOnChange = () => {
        this.setState({ flag: true });
    }
    rejctOnChange = () => {
        this.setState({ rejectFlag: true });
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={styles.item}>
                            <View>
                                <View style={{ width: 70, height: 70, borderColor: 'grey', borderWidth: 0.8 }}>
                                    <Image source={require("./../../../../assets/images/Tool1.png")} style={{
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
                                    Requested by:
                                </Text>
                            </View>
                            <View>

                                <Text style={styles.textDescription}>
                                    Duration: {'\n'}
                                    Dec 6~9
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
                                        marginVertical: 3,
                                        backgroundColor: DEFAULT_COLOR,
                                        width: 80
                                    }}
                                    onPress={this.acceptOnChange}>
                                    <Text style={styles.acceptText}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3,
                                        width: 80
                                    }}
                                    onPress={this.rejctOnChange}>
                                    <Text style={styles.rejectText}>Reject</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={styles.item}>
                            <View>
                                <View style={{ width: 70, height: 70, borderColor: 'grey', borderWidth: 0.8 }}>
                                    <Image source={require("./../../../../assets/images/Tool2.png")} style={{
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
                                    Requested by:{'\n'}
                                </Text>
                            </View>
                            <View>
   
                               <Text style={styles.textDescription}>
                                  Duration: {'\n'}
                                    Dec 6~9
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
                                        marginVertical: 3,
                                        backgroundColor: DEFAULT_COLOR,
                                        width:80
                                    }}
                                    onPress={this.acceptOnChange}>
                                    <Text style={styles.acceptText}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3,
                                        width: 80
                                    }}
                                    onPress={this.rejctOnChange}>
                                    <Text style={styles.rejectText}>Reject</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={styles.item}>
                            <View>
                                <View style={{ width: 70, height: 70, borderColor: 'grey', borderWidth: 0.8 }}>
                                    <Image source={require("./../../../../assets/images/Tool3.png")} style={{
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
                                    Requested by:{'\n'}
                                    Alvin James
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Duration: {'\n'}
                                    Dec 6~9
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
                                        marginVertical: 3,
                                        backgroundColor: DEFAULT_COLOR,
                                        width: 80
                                    }}
                                    onPress={this.acceptOnChange}>
                                    <Text style={styles.acceptText}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: 'grey',
                                        borderWidth: 0.6,
                                        padding: 5,
                                        marginVertical: 3,
                                        width: 80
                                    }}
                                    onPress={this.rejctOnChange}>
                                    <Text style={styles.rejectText}>Reject</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divider}></View>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.flag}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTitle}>Accept rental request.</Text>
                                <Text style={styles.modalText}>By accepting this request you are agreeing to allow Ashley to rent and use this equipment.</Text>
                                <TouchableOpacity
                                    style={{ ...styles.openButton, backgroundColor: DEFAULT_COLOR }}
                                    onPress={() => {
                                        this.setState({flag:false})
                                    }}
                                >
                                    <Text style={styles.textStyle}>Accept</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.rejectFlag}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTitle}>Accept rental request.</Text>
                                <Text style={styles.modalText}>By accepting this request you are agreeing to allow Ashley to rent and use this equipment.</Text>
                                <TouchableOpacity
                                    style={{ ...styles.rejectButton }}
                                    onPress={() => {
                                        this.setState({ rejectFlag: false })
                                    }}
                                >
                                    <Text style={styles.rejectTextStyle}>Reject</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Request;
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
    acceptText: {
        fontSize: 10,
        color: 'white',
        textAlign:'center'
    },
    rejectText: {
        fontSize: 10,
        color: 'black',
        textAlign: 'center'
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        borderRadius: 5,
        padding: 10,
        color: 'white',
        width:150
    },
    rejectButton: {
        borderRadius: 5,
        padding: 10,
        color: 'black',
        width: 150,
        borderColor: 'grey',
        borderWidth:0.6
    },
    textStyle: {
        color: "white",
        textAlign: "center"
    },
    rejectTextStyle: {
        color: "black",
        textAlign: "center"
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 18,
        textAlign: "center"},
    modalText: {
        marginBottom: 15,
        fontSize:14,
        textAlign: "center"
    }
});