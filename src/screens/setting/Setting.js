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
export default class Setting extends React.Component {
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
                            style={{ marginTop: 30, marginLeft: 0 }}
                            onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>
                            Settings
                        </Text>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('InboxScreen')}>
                                <Text style={styles.text}>
                                    Notifications
                            </Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity>
                                <Text style={styles.text}
                                    onPress={() => this.props.navigation.navigate('PaymentTransferScreen')}>
                                    Payment Transfers
                            </Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity>
                                <Text style={styles.text}>
                                    Deposite Method
                            </Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('RentalTermScreen')}>
                                <Text style={styles.text}>
                                    Terms of Service
                        </Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity></TouchableOpacity>
                            <Text style={styles.text}>
                                Version 1.01
                        </Text>
                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('FeedbackScreen')}>
                                <Text style={styles.text}>
                                    Give Us Feedback
                            </Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                                <Text style={styles.text}>
                                    Logout
                            </Text>
                            </TouchableOpacity>
                            <View style={styles.divider}></View>
                        </View>
                    </View>
                </ScrollView>
                <TabBar props={this.props}/>
             </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: "column",
    },
    headerBackground: {

    },
    title: {
        fontSize:20
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
    item: {
        marginVertical: 5
    },
    profileText: {
        position: 'absolute',
        left: 70,
        marginTop: 10,
        color: 'white'
    }
});