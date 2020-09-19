import * as React from 'react';
import {
    TouchableOpacity, StyleSheet,
    Image, View, Text, SafeAreaView, ScrollView
} from 'react-native';
// class Lending extends React.Component {
const Lending = (props) => {
    const goListingToolPage = () => {
        console.log(props);
        props.navigation.navigate('HomeScreen');
    }
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1, padding: 10 }}>
                        <Text style={styles.title}>Earn money as a ToolShare Lender</Text>
                        <View style={styles.itemContainer}>
                            <View style={{ flex: 0.475, flexDirection: 'row', }}>
                                <Text style={styles.numberText}>1</Text>
                                <View style={{ flex: 1 }}>
                                    <Text>Post Tools.</Text>
                                    <Text style={styles.text}>
                                        It’s free and easy to post tools and equipment on ToolShare. 
                                    </Text>
                                    <Text style={styles.subText}>
                                        Simply  upload photos, post specs, and set a price.  
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
                                    source={require("./../../../../assets/images/ReceiveRequest.png")}
                                />
                            </View>
                            <View style={{ flex: 0.05 }}>
                            </View>
                            <View style={{ flex: 0.475, flexDirection: 'row' }}>
                                <Text style={styles.numberText}>2</Text>
                                <View style={{ flex: 1 }}>
                                    <Text>Receive Request.</Text>
                                    <Text style={styles.text} >
                                        Receive requests, you can aceppt and decline. 
                                    </Text>
                                    <Text style={styles.subText}>
                                        Get in contact with your renter and arrange a meeting time. 
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={{ flex: 0.475, flexDirection: 'row', }}>
                                <Text style={styles.numberText}>3</Text>
                                <View style={{ flex: 1 }}>
                                    <Text>Meet Up.</Text>
                                    <Text style={styles.text}>
                                        Meet up at a location pre-determined by you and the renter. 
                                    </Text>
                                    <Text style={styles.subText}>
                                        Protect yourself by taking pictures of the tool working order and condition at each exchange. 
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.05 }}>
                            </View>
                            <View style={{ flex: 0.475 }}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("./../../../../assets/images/RequestRent.png")}
                                />
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={{ flex: 0.475 }}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("./../../../../assets/images/KickBack.png")}
                                />
                            </View>
                            <View style={{ flex: 0.05 }}>
                            </View>
                            <View style={{ flex: 0.475, flexDirection: 'row' }}>
                                <Text style={styles.numberText}>4</Text>
                                <View style={{ flex: 1 }}>
                                    <Text>Kick back and Relax.</Text>
                                    <Text style={styles.text} >
                                        Your tool is working for you making money.  
                                    </Text>
                                    <Text style={styles.subText}>
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={{ flex: 0.475, flexDirection: 'row', }}>
                                <Text style={styles.numberText}>5</Text>
                                <View style={{ flex: 1 }}>
                                    <Text>Pick up & Get Paid.</Text>
                                    <Text style={styles.text}>
                                        After you the rental is complete, we will transfer your funds every month.  
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
                                    source={require("./../../../../assets/images/PickUp.png")}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => goListingToolPage()}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>List your tools and equipment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                        >
                            <Text style={styles.linkText}>How does renting on ToolShare work</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
            )
    

}
export default Lending;


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 16
    },
    button: {
        marginHorizontal: 20,
        backgroundColor:"#6EA0BE"
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        padding:10
    },
    linkText: { color: '#6EA0BE', textAlign: 'center',padding:5},
    numberText: {
        fontSize: 24,
        color: '#6EA0BE',
        marginRight: 5
    },
    imageStyle: {
        width: '100%'
    },
    text: {
        fontSize: 11,
    },
    subText: {
        paddingTop: 10,
        fontSize: 11
    }
});