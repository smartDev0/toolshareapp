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
export default class Feedback extends React.Component {
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
                            style={styles.button}>
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