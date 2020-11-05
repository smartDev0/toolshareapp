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
    ImageBackground,
    Dimensions,
    Modal
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
import { Rating, AirbnbRating } from 'react-native-ratings';

const windowWidth = Dimensions.get('window').width;

export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            feedback:false
        }
    }
    componentDidMount() {
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
      }
    render() {

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.headerBackground}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{ marginTop: 30, marginLeft: 0 }}
                            onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>
                            How are we doing?
                        </Text>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                We’re kinda new at this, and we’re always trying to improve, so we would love to hear from you. Let us know what is working and how we can be better for you. 
                        </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                What would you like to tell us?
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this.setState({ feedback: true })
                            }}>
                            <Text style={styles.buttonText}>
                                Give product feedback.&nbsp;&nbsp;
                            </Text>
                            <Image source={require("./../../../assets/images/Edit.png")}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}>
                            <Text style={styles.buttonText}>
                                Report a bug.&nbsp;&nbsp;
                            </Text>
                            <Image source={require("./../../../assets/images/Bug.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.feedback}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity
                                    style={{
                                        left: 10,
                                        marginTop: 10,
                                        position: 'absolute'
                                    }}
                                    onPress={() => {
                                        this.setState({ feedback: false })
                                    }}
                                >
                                    <AntDesign name="close" size={26} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                                <Text style={styles.modalTitle}>
                                    How likely are you to recommend us?
                                </Text>
                                <View
                                style={{width:'100%', marginBottom:15}}>
                                    <AirbnbRating 
                                    count={5}
                                    reviews={[]}
                                    defaultRating={0}
                                    size={30}
                                    />
                                </View>
                                <Text style={styles.modalText}>
                                    What can we do to improve?
                                </Text>
                                <View style={{width:'100%', marginBottom:15}}>
                                    <TextInput
                                        style={styles.textareTnput}
                                        placeholderTextColor="grey"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        numberOfLines={10}
                                        multiline={true}
                                    />
                                </View>

                                <TouchableOpacity
                                    style={{ ...styles.openButton, backgroundColor: DEFAULT_COLOR }}
                                    onPress={() => {
                                        this.setState({ feedback: false })
                                    }}
                                >
                                    <Text style={styles.submitTextStyle}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
                <TabBar props={this.props} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 25,
    },
    imageGroup: {
        position: 'absolute',
        top: 120,
        left: 25
    },
    divider: {
        borderColor: 'grey',
        borderWidth: 0.5
    },
    mainContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    text: {
        fontSize: 16,
        marginVertical: 4
    },
    rejectButton: {
        borderRadius: 5,
        padding: 10,
        color: 'black',
        width: 150,
        borderColor: DEFAULT_COLOR,
        borderWidth: 0.6
    },
    openButton: {
        borderRadius: 5,
        padding: 10,
        color: 'white',
        width: 150
    },
    submitTextStyle: {
        color: "white",
        textAlign: "center"
    },
    textareTnput: {
        marginVertical: 5,
        height: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black',
        width:windowWidth - 80
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
        padding: 30,
        alignItems: "center",
        // shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 20,
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        fontSize: 14,
        textAlign: "center"
    },
    textDescripton: { fontSize: 14, },
    item: {
        marginVertical: 5
    },
    description: {
        fontSize: 12,
        marginTop: 5
    },
    buttonText: {
        fontSize:16
    },
    button: {
        borderColor: 'grey',
        borderWidth: 0.7,
        flex: 1,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:5
    }
});