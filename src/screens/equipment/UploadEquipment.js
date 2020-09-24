import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';

class UploadEquipment extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 12,
                }}>
                    <TouchableOpacity
                        style={{ marginTop: 15, marginLeft: 5, position: 'absolute', zIndex: 10 }}
                        onPress={() => this.props.navigation.navigate('RentalScreen')}>
                        <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    marginHorizontal: 10,
                    alignItems: 'center',
                }}>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 20,
                            marginBottom:10,
                        }}>
                            <View style={{ flexDirection: 'row',}}>
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        borderColor: DEFAULT_COLOR,
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        width: 150,
                                        marginHorizontal:5
                                    }}
                                    onPress={() => this.props.navigation.navigate('HelpScreen ')}>
                                    <Text style={{ color: DEFAULT_COLOR, textAlign:'center' }}>
                                        Help
                                </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        borderRadius: 5,
                                        backgroundColor: DEFAULT_COLOR,
                                        width: 150,
                                        marginHorizontal: 5
                                    }}
                                    onPress={() => this.props.navigation.navigate('RentalScreen')}>
                                    <Text style={{ color: 'white' }}>
                                        Confirm Pick up
                                </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View>
                            <TouchableOpacity
                                style={{
                                    height: 100, width: '100%',
                                    borderWidth: 1,
                                    borderColor: DEFAULT_COLOR,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesome name="cloud-upload" size={20} color={DEFAULT_COLOR} />
                                    <Text> Select Photos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text}>What photos should I take before each exchage?</Text>
                            <Text style={styles.textDescription}>
                                Photos should be taken of all sides, see examples below. Ensure the equipment is in like new working condition before and after rental.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <TabBar props={this.props}/>
            </View>
        )
    }
}
export default UploadEquipment;

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
        borderBottomColor: DEFAULT_COLOR,
        borderWidth: 0.5,
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
        fontSize: 20
    },
    checkbox: {
        alignSelf: "center",
    },
    mainContainer: {
        marginHorizontal: 10,
    },
    text: {
        fontSize: 14,
        marginVertical: 10
    },
    textTime: {
        textAlign: 'right',
        fontSize: 14,
        marginVertical: 5
    },
    textDescription: {
        fontSize: 12
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
});