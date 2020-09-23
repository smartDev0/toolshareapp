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

class EquipmentRequirement extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 12,
                }}>
                    <TouchableOpacity
                        style={{ marginTop: 15, marginLeft: 5, position: 'absolute', zIndex: 10 }}
                        onPress={() => this.props.navigation.navigate('EquipmentPhotoScreen')}>
                        <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    marginHorizontal: 10,
                    alignItems: 'center',
                }}>
                    <Text style={styles.title}>Review ToolShre rental requirements</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <Text style={styles.text}>ToolShare has requirements that all renters</Text>
                        <View style={{
                            marginVertical:20
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Feather name="check" size={20} color={DEFAULT_COLOR} />
                                <Text style={styles.text}>&nbsp;&nbsp;&nbsp;Confirm email address.</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Feather name="check" size={20} color={DEFAULT_COLOR} />
                                <Text style={styles.text}>&nbsp;&nbsp;&nbsp;Payment information.</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Feather name="check" size={20} color={DEFAULT_COLOR} />
                                <Text style={styles.text}>&nbsp;&nbsp;&nbsp;Agree to your equipment rules.</Text>
                            </View>
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
                        onPress={() => this.props.navigation.navigate('EquipmentReviewScreen')}
                    >
                        <Text style={styles.buttonText}>FINISH</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default EquipmentRequirement;

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
    title: {
        fontSize: 20
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
        fontSize: 10
    },
    item: {
        marginVertical: 5
    },
    
   
});