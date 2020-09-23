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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';

class EquipmentListing extends React.Component { 
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 12,
                }}>
                    <TouchableOpacity
                        style={{ marginTop: 15, right: 10, position: 'absolute', zIndex: 10 }}
                        onPress={() => this.props.navigation.navigate('EquipmentDetailScreen')}>
                        <AntDesign name="plus" size={26} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginHorizontal: 10,
                    alignItems: 'center',
                    marginBottom:6
                }}>
                    <Text style={styles.title}>In Progress</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={styles.item}>
                            <View>
                                <Text style={styles.text}>Makita hammer drill</Text>
                                <Text style={styles.textDescription}>Finish your listing</Text>
                            </View>
                            <View style={{ width: 80, height: 60, borderColor: 'grey', borderWidth: 0.8 }}>
                                <Image source={require("./../../../assets/images/equipment.png")} style={{
                                    width:'100%', height:'100%'
                                }}/>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View>
                                <Text style={styles.text}>Stanley socket set</Text>
                                <Text style={styles.textDescription}>Finish your listing</Text>
                            </View>
                            <View style={{
                                width: 80, height: 60, borderColor: 'grey', borderWidth: 0.8,
                                justifyContent:'center',alignItems:'center'
                            }}>
                                <SimpleLineIcons name="camera" size={30} color={DEFAULT_COLOR} />
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View>
                                <Text style={styles.text}>Multi Screw driver</Text>
                                <Text style={styles.textDescription}>Finish your listing</Text>
                            </View>
                            <View style={{
                                width: 80, height: 60, borderColor: 'grey', borderWidth: 0.8,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <SimpleLineIcons name="camera" size={30} color={DEFAULT_COLOR} />
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View>
                                <Text style={styles.text}>Palm sander</Text>
                                <Text style={styles.textDescription}>Finish your listing</Text>
                            </View>
                            <View style={{
                                width: 80, height: 60, borderColor: 'grey', borderWidth: 0.8,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <SimpleLineIcons name="camera" size={30} color={DEFAULT_COLOR} />
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View>
                                <Text style={styles.text}>List equipment</Text>
                            
                            </View>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('EquipmentDetailScreen')}>
                                    <AntDesign name="plus" size={26} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TabBar props={this.props} />
            </View>
        )
    }
}
export default EquipmentListing;
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
        fontSize: 12,
        color:DEFAULT_COLOR
    },
    item: {
        borderColor: 'grey',
        borderWidth: 0.8,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    imageStyle: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
    },
});