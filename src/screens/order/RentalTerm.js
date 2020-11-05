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
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
import { CheckBox } from 'react-native-elements';

class RentalTerm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            checked:true,
            underChecked:false
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
                            style={{ marginTop: 30, marginLeft: 0, position: 'absolute', zIndex: 10 }}
                            onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 60,
                        marginHorizontal: 10,
                    }}>
                        <Text style={styles.text}>Step 1 of 2</Text>
                        <Text style={styles.title}>Rental Terms</Text>
                        <View style={styles.divider} />
                    </View>
                    <ScrollView style={styles.container}>
                        <View style={styles.mainContainer}>
                            <View>
                                <Text style={styles.text}>Equipment Rules</Text>
                                <View style={{marginHorizontal: 10}}> 
                                    <Text style={styles.label}>
                                    ·  Equipment should only by used intended pupose
                                    </Text>
                                    <Text style={styles.label}>
                                    ·  Equipment should only by used intended pupose
                                    </Text>
                                    <Text style={styles.label}>
                                    ·  Equipment should only by used intended pupose
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginVertical:8}}>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        size={15}
                                        checked={this.state.checked}
                                        onPress={() => this.setState({
                                            checked: !this.state.checked
                                        })}
                                    />
                                    <Text style={styles.label}>
                                            I agree to Toolshare's
                                            <Text style={styles.activeText}> Term Service</Text>
                                            and <Text style={styles.activeText}> Privacy Policy.</Text>
                                    </Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        size={15}
                                        checked={this.state.underChecked}
                                        onPress={() => this.setState({
                                            underChecked: !this.state.underChecked
                                        })}
                                    />
                                    <Text style={styles.label}>
                                            I understand that the use of equipment can result in injury or deapth
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderTopColor: 'grey',
                        borderWidth: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'center'
                    }}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.buttonText}>Agree to Terms</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </>
        )
    }
}
export default RentalTerm;

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
        backgroundColor: '#ea565c',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 6,
        paddingHorizontal: 15,
        width:'80%',
        borderRadius:3
    },
    divider: {
        borderBottomColor: DEFAULT_COLOR,
        borderWidth: 0.5,
        marginVertical: 13
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
        alignItems:'center'

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
        fontSize: 15,
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
    policyText: {
        fontSize: 12
    },

    activeText: {
        color: DEFAULT_COLOR,
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
        color: 'black',
        fontSize: 12,
        width: '100%',
        flexWrap: 'wrap',
        flex: 1, 
        marginVertical:5
    },
    imageStyle: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
    },
});