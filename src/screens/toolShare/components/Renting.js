import * as React from 'react';
import {
    TouchableOpacity, StyleSheet,
    Image,View, Text, SafeAreaView, ScrollView
} from 'react-native';


class Renting extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 ,  backgroundColor:'white'}}>
                <ScrollView>
                    <View style={{ flex: 1, padding: 10 ,}}>
                        <Text style={styles.title}>Earn money as a ToolShare Lender</Text>
                        <View style={styles.itemContainer}>
                            <View style={{ flex: 0.475, flexDirection: 'row',  }}>
                                <Text style={styles.numberText}>1</Text>
                                <View style={{ flex: 1 }}>
                                    <Text>Seach Tool Near You.</Text>
                                    <Text style={styles.text}>
                                        Find the tools you need near you.
                                    </Text>
                                    <Text style={styles.subText}>
                                        Rent tools and equipment from people in your community at a freaction of the cost.
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.05 }}>
                            </View>
                            <View style={{ flex: 0.475 }}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("./../../../../assets/images/SearchToolNear.png")}
                                />
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={{ flex: 0.475 }}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("./../../../../assets/images/RequestRent.png")}
                                />
                            </View>
                            <View style={{ flex: 0.05 }}>
                            </View>
                            <View style={{ flex: 0.475, flexDirection: 'row' }}>
                                <Text style={styles.numberText}>2</Text>
                                <View style={{flex:1}}>
                                    <Text>Request and Rent.</Text>
                                    <Text style={styles.text} >
                                        Request tools from lender, 
                                        arrange a meeing point, and meet up.
                                    </Text>
                                    <Text style={styles.subText}>
                                        Be sure to confirm the tool is in working order and condition as described by lender. If there is any inconsistency Do Not Accept the tool. 
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={{ flex: 0.475, flexDirection: 'row', }}>
                                <Text style={styles.numberText}>3</Text>
                                <View style={{ flex: 1 }}>
                                    <Text>Take on projects</Text>
                                    <Text style={styles.text}>
                                        Take on project, build, and repairs.
                                    </Text>
                                    <Text style={styles.subText}>
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.05 }}>
                            </View>
                            <View style={{ flex: 0.475 }}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("./../../../../assets/images/ToakProject.png")}
                                />
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={{ flex: 0.475 }}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("./../../../../assets/images/Return.png")}
                                />
                            </View>
                            <View style={{ flex: 0.05 }}>
                            </View>
                            <View style={{ flex: 0.475, flexDirection: 'row' }}>
                                <Text style={styles.numberText}>4</Text>
                                <View style={{ flex: 1 }}>
                                    <Text>Return.</Text>
                                    <Text style={styles.text} >
                                        Return the tool in the condition it was recieved.
                                    </Text>
                                    <Text style={styles.subText}>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}
export default Renting;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        flexGrow: 1,
    },
    title: {
        fontSize:16
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    numberText: {
        fontSize: 24,
        color: '#6EA0BE',
        marginRight:5
    },
    imageStyle: {
        width:'100%'
    },
    text: {
        fontSize: 11,
    },
    subText: {
        paddingTop:10,
        fontSize: 11
    }
});