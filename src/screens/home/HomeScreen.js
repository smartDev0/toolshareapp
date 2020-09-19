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

import HomeScreenSearchSection from './../../components/HomeScreenSearchSection';
import HomeScreenSection from './../../components/HomeScreenSearchSection';

// const handToolSectionImage = require('../../assets/images/HandToolsSectionImage.png');
// const powerToolSectionImage = require('../../assets/images/PowerToolsSectionImage.png');
// const ladderSectionImage = require('../../assets/images/LadderSectionImage.png');
// const trailerSectionImage = require('../../assets/images/TrailersSectionImage.png');
// const lenderSectionImage = require('../../assets/images/LenderSectionImage.png');
import TabBar from './../../components/TabBar';
class HomeScreen extends Component { 
    constructor(props) {
        super(props);
    }
    render() {
        console.log('here is props:',this.props)
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{marginBottom:10}}>
                        <HomeScreenSearchSection />
                        <View style={styles.shortCutSectionStyle}>
                            <View style={{
                                marginVertical: 5,
                                marginHorizontal: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                flex:1
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.button}>
                                    <Text style={styles.button_text}>
                                        Hand Tools
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.button}>
                                    <Text style={styles.button_text}>
                                        Power Tools
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.button}>
                                    <Text style={styles.button_text}>
                                        Ladders & Scaffolding</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.button}>
                                    <Text style={styles.button_text}>
                                        Trailers</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        <View style={styles.categorySectionsStyle}>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => this.props.navigation.navigate('ToolShareScreen')}>
                                <View style={{
                                    width: '100%'
                                }}>
                                    <Text style={styles.textStyle}>How ToolShare Works</Text>
                                    <View style={{ height: 120, width: '100%' }}>
                                        <Image
                                            style={styles.imageStyle}
                                            source={require("./../../../assets/images/HowToolShareWorksSectionImage.png")}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.categorySectionsStyle}>
                            <View style={{
                                width: '100%'
                            }}>
                                <Text style={styles.textStyle}>Hand Tools</Text>
                                <View style={{ height: 120, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/HandToolsSectionImage.png")}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.categorySectionsStyle}>
                            <View style={{
                                width: '100%'
                            }}>
                                <Text style={styles.textStyle}>Power Tools</Text>
                                <View style={{ height: 120, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/PowerToolsSectionImage.png")}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.categorySectionsStyle}>
                            <View style={{
                                width: '100%'
                            }}>
                                <Text style={styles.textStyle}>Ladders & Scaffolding</Text>
                                <View style={{ height: 120, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/LadderSectionImage.png")}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.categorySectionsStyle}>
                            <View style={{
                                width: '100%'
                            }}>
                                <Text style={styles.textStyle}>Trailers</Text>
                                <View style={{ height: 120, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/TrailersSectionImage.png")}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.categorySectionsStyle}>
                            <View style={{
                                width: '100%'
                            }}>
                                <Text style={styles.textStyle}>Earn money renting tools on ToolShare</Text>
                                <View style={{ height: 120, width: '100%' }}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require("./../../../assets/images/LenderSectionImage.png")}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.categorySectionsStyle}></View>
                    </View>
                </ScrollView>
                 <TabBar />
            </View>
        )
    }
}

export default HomeScreen;

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
        margin:5
    },
    button_text: {
        padding: 5,
        fontSize:12
    },
    categorySectionsStyle: {
        marginHorizontal:10
    },
    textStyle: {
        marginTop: 10,
        marginBottom: 5,
        color:'black'
    },
    imageStyle: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
    },
});