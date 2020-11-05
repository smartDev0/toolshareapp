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
export default class ListingToolSilder extends React.Component { 
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
                        {/* <TouchableOpacity
                            style={{ marginTop: 10, marginLeft: 5 }}
                            onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <Feather name="chevron-left" size={35} color="white" />
                        </TouchableOpacity> */}
                        <View style={styles.imageGroup}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ProfileDetailScreen')}>
                                <Image
                                    style={styles.image}
                                    source={require("./../../../assets/images/Avatar.png")} />
                            </TouchableOpacity>
                            
                            <Text style={styles.profileText}>
                                Hi,Ron
                            </Text>
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SettingScreen')}>
                                <Text style={styles.text}>
                                    Settings
                            </Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ToolShareScreen')}>
                                <Text style={styles.text}>
                                    How ToolShare works
                            </Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('HelpScreen')}>
                                <Text style={styles.text}>
                                    Get Help
                        </Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>
                        </View>
                        {/* <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EquipmentlistingScreen')}>
                                <Text style={styles.text}>
                                    List Equipment
                                </Text>
                                </TouchableOpacity>
                            
                            <View style={styles.divider}></View>
                        </View> */}
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
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('PaymentTransferScreen')}>
                                <Text style={styles.text}>
                                    Earning
                            </Text>
                            </TouchableOpacity>
                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                                <Text style={styles.text}>
                                    Log out
                            </Text>
                            </TouchableOpacity>
                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('RentalTermScreen')}>
                                <Text style={styles.text}>
                                    Rental Term
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
        top: 120,
        left: 25
    },
    divider: {
        borderColor: 'grey',
        borderWidth:0.5
    },
    mainContainer: {
        marginHorizontal: 10,
        marginTop:40
    },
    text: {
        fontSize: 16,
        marginVertical:4
    },
    item: {
        marginVertical:5
    },
    profileText: {
        position: 'absolute',
        left: 70,
        marginTop: 10,
        color:'white'
    }
});