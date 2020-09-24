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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';

class Congratulation extends React.Component {
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
                            onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <AntDesign name="close" size={26} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 30,
                        marginHorizontal: 10,
                    }}>
                        <Text style={styles.title}>Reservation sent to Ashly!</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent:'flex-end'
                        }}>
                            <View style={styles.toolBox}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('RentalScreen')}>
                                    <FontAwesome name="briefcase" style={{ textAlign: 'center' }} size={16} color="grey" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.toolBox}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('InboxScreen')}>
                                    <Fontisto name="email" style={{ textAlign: 'center' }} size={16} color="grey" />
                                </TouchableOpacity>
                               
                            </View>
                            <View style={styles.toolBox}>
                                <Entypo name="user" style={{ textAlign: 'center' }} size={16} color="grey" />
                            </View>
                        </View>
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
                                    <View style={{ flexDirection: 'row', alignItems: 'center' , marginVertical:1}}>
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
                                <View style={{ height: 60, width: 100, }}>
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
                            <View style={{ width: '100%', height: 200 }}></View>
                            <View style={styles.divider} />
                            <View>
                                <Text style={styles.text}>Equipment Rules</Text>
                            </View>
                            <View>
                                <Text style={styles.textDescription}>
                                    Shoul only be used for its intended purpos.
                                </Text>
                                <Text style={styles.textDescription}>
                                    Do not abouse or misuse this equipment.
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginVertical:30
                            }}>
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        borderColor: DEFAULT_COLOR,
                                        borderWidth: 1,
                                        borderRadius:5
                                    }}
                                    onPress={() => this.props.navigation.navigate('HelpScreen')}>
                                    <Text style={{color:DEFAULT_COLOR}}>
                                        Help
                                    </Text>
                                    
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom:10
                            }}>
                                <Text style={styles.label}>RESERVATION # 4593038</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <TabBar props={this.props}/>
                </View>


            </>
        )
    }
}
export default Congratulation;

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