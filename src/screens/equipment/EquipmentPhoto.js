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
class EquipmentPhoto extends React.Component { 

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 12,
                }}>
                    <TouchableOpacity
                        style={{ marginTop: 30, marginLeft: 0, position: 'absolute', zIndex: 10 }}
                        onPress={() => this.props.navigation.navigate('EquipmentLocationScreen')}>
                        <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 45,
                    marginHorizontal: 10,
                    alignItems: 'center',
                }}>
                    <Text style={styles.box}>3</Text>
                    <Text>&nbsp;</Text>
                    <Text style={styles.title}> Equipment Photos</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <Text style={styles.text}>Add pictures to attract interest.</Text>
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
                                    <FontAwesome name="cloud-upload" size={20} color="#ea565c" />
                                    <Text> Select Photos</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    marginVertical: 10,
                    marginHorizontal: 10
                }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('EquipmentRequirementScreen')}
                    >
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default EquipmentPhoto;

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
        marginVertical: 5
    },
    textTime: {
        textAlign: 'right',
        fontSize: 14,
        marginVertical: 5
    },
    textDescription: {
        fontSize: 10
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
});