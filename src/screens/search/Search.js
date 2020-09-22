import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    TextInput,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import TabBar from './../../components/TabBar';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';
class SearchScreen extends Component { 
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{}}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}>
                        <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                    <View>
                        <TextInput
                            style={styles.textTnput}
                            placeholderTextColor="grey"
                            returnKeyType="next"
                            placeholder="Power Tools"
                            blurOnSubmit={false} />
                        <AntDesign name="search1"
                            style={{
                                position: 'absolute',
                                marginTop: 12, marginLeft: 16
                            }} size={20} color="grey" />
                    </View>
                    <View>
                        <Text style={styles.title}>Drills in Edmonton</Text>
                    </View>
                </View>
               
                <ScrollView>
                    <View style={styles.categorySectionsStyle}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('ToolShareScreen')}>
                            <View style={{
                                width: '100%',
                                marginBottom:10
                            }}>
                                <View style={{ height: 160, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/1.png")}
                                    />
                                </View>
                                <View style={styles.backgroundBox}>
                                    <Text style={styles.backgroundText}>$12/day</Text>
                                </View>
                                <Text style={styles.textStyle}>Makita Drill</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('ToolShareScreen')}>
                            <View style={{
                                width: '100%',
                                marginBottom: 10
                            }}>
                                <View style={{ height: 160, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/2.png")}
                                    />
                                </View>
                                <View style={styles.backgroundBox}>
                                    <Text style={styles.backgroundText}>$8/day</Text>
                                </View>
                                <Text style={styles.textStyle}>Bosch Drill</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('ToolShareScreen')}>
                            <View style={{
                                width: '100%',
                                marginBottom: 10
                            }}>
                                <View style={{ height: 160, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/3.png")}
                                    />
                                </View>
                                <View style={styles.backgroundBox}>
                                    <Text style={styles.backgroundText}>$10/day</Text>
                                </View>
                                <Text style={styles.textStyle}>Milwaukee Drill</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('ToolShareScreen')}>
                            <View style={{
                                width: '100%',
                                marginBottom: 10
                            }}>
                                <View style={{ height: 160, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/4.png")}
                                    />
                                </View>
                                <View style={styles.backgroundBox}>
                                    <Text style={styles.backgroundText}>$21/day</Text>
                                </View>
                                <Text style={styles.textStyle}>AEG Hammer Drill</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('ToolShareScreen')}>
                            <View style={{
                                width: '100%',
                                marginBottom: 10
                            }}>
                                <View style={{ height: 160, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/5.png")}
                                    />
                                </View>
                                <View style={styles.backgroundBox}>
                                    <Text style={styles.backgroundText}>$13/day</Text>
                                </View>
                                <Text style={styles.textStyle}>Black & Decker Drill</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TabBar props={this.props} />
            </View>
        )
    }
}
export default SearchScreen



const styles = StyleSheet.create({
    shortCutSectionStyle: {
        flexDirection: 'row',
    },
    shortCutButtonStyle: {
        borderColor: '#6EA0BE',
        marginTop: 10,
        marginLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
    },
    shortCutButtonTitleStyle: {
        color: '#6EA0BE',
        fontSize: 10,
    },
    categorySectionsStyle: {
        marginLeft: 10,
        marginRight: 10,
    },
    button: {
        borderColor: '#9B9B9B',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5
    },
    button_text: {
        padding: 5,
        fontSize: 12
    },
    categorySectionsStyle: {
        marginHorizontal: 10
    },
    textStyle: {
        
        color: 'black'
    },
    imageStyle: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
    },
    title: {
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    textTnput: {
        marginVertical: 5,
        height: 36,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.6,
        borderColor: 'grey',
        color: 'black',
        marginHorizontal: 10,
        paddingLeft:30
    },
    backgroundBox: {
        height: 26,
        backgroundColor: 'white',
        position: 'absolute',
        right: 10,
        bottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10
    },
    backgroundText: {
        fontSize:12
    }
});