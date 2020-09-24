import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform,
    SafeAreaView,
    Alert,
    Modal
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import { DEFAULT_COLOR } from './../../../styles/common';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

class Earning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            rejectFlag: false
        }
    }
    acceptOnChange = () => {
        this.setState({ flag: true });
    }
    rejctOnChange = () => {
        this.setState({ rejectFlag: true });
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={{marginVertical:5}}>
                            <Text style={styles.text}>
                                Total tools:  13
                            </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.text}>
                                $533 earning
                            </Text>
                        </View>
                        <BarChart
                            style={{
                                marginVertical: 8,
                                borderRadius: 5
                            }}
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                                datasets: [
                                    {
                                        data: [
                                            80,
                                            100,
                                            50,
                                            70,
                                            150,
                                            80
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width - 20}
                            height={220}
                            yAxisLabel="$"
                            chartConfig={{
                                backgroundGradientFrom: "#1E2923",
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: "#08130D",
                                backgroundGradientToOpacity: 0.5,
                                color: (opacity = 1) => `rgba(43, 63, 75, ${opacity})`,
                                strokeWidth: 2, // optional, default 3
                                barPercentage: 0.5,
                                useShadowColorFromDataset: false // optional
                            }}
                            verticalLabelRotation={0}
                        />
                        <View style={{
                            flexDirection: 'row',
                            marginHorizontal: 10,
                            alignItems: 'center',
                            marginVertical:5
                        }}>
                            <Text style={styles.box}></Text>
                            <Text>&nbsp;</Text>
                            <Text>
                                 $533 earnings
                            </Text>
                        </View>
                        <View style={styles.divider}></View>
                        <View style={{
                            flexDirection: 'row',
                            marginHorizontal: 10,
                            alignItems: 'center',
                            marginVertical: 5,
                            justifyContent: 'space-between',
                        }}>
                            <Text style={styles.text}>Transaction history</Text>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <TouchableOpacity
                                    onPress={() => this.props.privatNavigation.navigation.navigate('PaymentTransferScreen')}>
                                    <Feather name="chevron-right" size={26} color={DEFAULT_COLOR} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.divider}></View>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Earning;
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
        borderBottomColor: 'grey',
        borderWidth: 0.3,
    },
    buttonText: {
        color: 'white'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    box: {
        width: 10,
        height: 10,
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
        fontSize: 10,
    },
    acceptText: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
    },
    rejectText: {
        fontSize: 10,
        color: 'black',
        textAlign: 'center'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    profileText: {
        position: 'absolute',
        left: 70,
        marginTop: 10,
        color: 'white'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        borderRadius: 5,
        padding: 10,
        color: 'white',
        width: 150
    },
    rejectButton: {
        borderRadius: 5,
        padding: 10,
        color: 'black',
        width: 150,
        borderColor: 'grey',
        borderWidth: 0.6
    },
    textStyle: {
        color: "white",
        textAlign: "center"
    },
    rejectTextStyle: {
        color: "black",
        textAlign: "center"
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 18,
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        fontSize: 14,
        textAlign: "center"
    }
});