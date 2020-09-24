import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    TouchableHighlight,
    Platform
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DEFAULT_COLOR } from '../../styles/common';
import TabBar from '../../components/TabBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import Tooltip from 'react-native-walkthrough-tooltip';
import Moment from 'moment';

class PaymentTransfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'date',
            date: new Date(),
            isShow: false,
            startDate: new Date(),
            toolTipVisible: false,
            balanceToolTipVisible: false,
            earningToolTipVisible: false,
            feeToolTipVisible: false,
            reverseToolTipVisible:false
        }
    }
    onChange = (event, selectedDate) => {
        this.setState({
            date: selectedDate,
            isShow: false
        })
    }
    render() {
        const { date, isShow, mode} = this.state
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 12,

                }}>
                    <TouchableOpacity
                        style={{ marginTop: 15, marginLeft: 5, position: 'absolute', zIndex: 10 }}
                        onPress={() => this.props.navigation.navigate('ToolBoxScreen')}>
                        <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    marginHorizontal: 10,
                    justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                    <Text style={styles.title}>Your earnings</Text>
                    <TouchableOpacity
                        onPress={() => this.setState({ isShow:true})}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.dateText}>{Moment(date).format('YYYY-MM-DD')}
                                {Moment(date).format('YYYY-MM-DD') == Moment(new Date()).format('YYYY-MM-DD')?'--Present':''}</Text>
                            <Feather name="chevron-down" size={20} color={DEFAULT_COLOR} />
                        </View>
                    </TouchableOpacity>
                    {isShow && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={this.onChange}
                        />
                    )}
                </View>
                <View style={{
                    borderBottomColor: DEFAULT_COLOR,
                    borderWidth: 0.5,
                    marginVertical: 5,
                    marginHorizontal: 10
                }}></View>
                <ScrollView style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View>
                            <Text style={styles.text}>
                                Automatic transfers are made on a bi-weekly bases.
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <TouchableOpacity>
                                <Text style={styles.title}>
                                    Net Proceeds &nbsp;
                                </Text>
                            </TouchableOpacity>
                            <Tooltip
                                animated={true}
                                //(Optional) When true, tooltip will animate in/out when showing/hiding
                                arrowSize={{ width: 16, height: 8 }}
                                //(Optional) Dimensions of arrow bubble pointing to the highlighted element
                                backgroundColor="rgba(0,0,0,0.5)"
                                //(Optional) Color of the fullscreen background beneath the tooltip.
                                isVisible={this.state.toolTipVisible}
                                //(Must) When true, tooltip is displayed
                                content={
                                    <View>
                                        <Text style={styles.text}>Net amount from beginning balance and earnings, less refunds, service fees, and any unavailable balance.</Text>
                                    </View>
                                }
                                //(Must) This is the view displayed in the tooltip
                                placement="bottom"
                                //(Must) top, bottom, left, right, auto.
                                onClose={() => this.setState({ toolTipVisible: false })}
                            >
                                <TouchableOpacity
                                    style={styles.touchable}
                                    onPress={() => this.setState({ toolTipVisible: true })}>
                                    <Ionicons name="information-circle-outline" size={20} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                            </Tooltip>
                        </View>
                        <View style={{ justifyContent: 'center',flexDirection:'row'}}>
                            <Text style={styles.text}>2020-05-18 — Present</Text>
                            
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={styles.text}>$122.07</Text>
                        </View>
                        <View style={styles.divider} />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <TouchableOpacity>
                                <Text style={styles.title}>
                                    Begining Balance &nbsp;
                                </Text>
                            </TouchableOpacity>
                            <Tooltip
                                animated={true}
                                //(Optional) When true, tooltip will animate in/out when showing/hiding
                                arrowSize={{ width: 16, height: 8 }}
                                //(Optional) Dimensions of arrow bubble pointing to the highlighted element
                                backgroundColor="rgba(0,0,0,0.5)"
                                //(Optional) Color of the fullscreen background beneath the tooltip.
                                isVisible={this.state.balanceToolTipVisible}
                                //(Must) When true, tooltip is displayed
                                content={
                                    <View>
                                        <Text style={styles.text}>Amount carried forward from previous period.</Text>
                                    </View>
                                }
                                //(Must) This is the view displayed in the tooltip
                                placement="bottom"
                                //(Must) top, bottom, left, right, auto.
                                onClose={() => this.setState({ balanceToolTipVisible: false })}
                            >
                                <TouchableOpacity
                                    style={styles.touchable}
                                    onPress={() => this.setState({ balanceToolTipVisible: true })}>
                                    <Ionicons name="information-circle-outline" size={20} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                            </Tooltip>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={styles.text}>$54.97</Text>
                        </View>
                        <View style={styles.divider} />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <TouchableOpacity>
                                <Text style={styles.title}>
                                    Earnings &nbsp;
                                </Text>
                            </TouchableOpacity>
                            <Tooltip
                                animated={true}
                                //(Optional) When true, tooltip will animate in/out when showing/hiding
                                arrowSize={{ width: 16, height: 8 }}
                                //(Optional) Dimensions of arrow bubble pointing to the highlighted element
                                backgroundColor="rgba(0,0,0,0.5)"
                                //(Optional) Color of the fullscreen background beneath the tooltip.
                                isVisible={this.state.earningToolTipVisible}
                                //(Must) When true, tooltip is displayed
                                content={
                                    <View>
                                        <Text style={styles.text}>Amount collected from completed retals less service fees, and refunds.</Text>
                                    </View>
                                }
                                //(Must) This is the view displayed in the tooltip
                                placement="bottom"
                                //(Must) top, bottom, left, right, auto.
                                onClose={() => this.setState({ earningToolTipVisible: false })}
                            >
                                <TouchableOpacity
                                    style={styles.touchable}
                                    onPress={() => this.setState({ earningToolTipVisible: true })}>
                                    <Ionicons name="information-circle-outline" size={20} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                            </Tooltip>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={styles.text}>$116.97</Text>
                        </View>
                        <View style={styles.divider} />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <TouchableOpacity>
                                <Text style={styles.title}>
                                    Fees &nbsp;
                                </Text>
                            </TouchableOpacity>
                            <Tooltip
                                animated={true}
                                //(Optional) When true, tooltip will animate in/out when showing/hiding
                                arrowSize={{ width: 16, height: 8 }}
                                //(Optional) Dimensions of arrow bubble pointing to the highlighted element
                                backgroundColor="rgba(0,0,0,0.5)"
                                //(Optional) Color of the fullscreen background beneath the tooltip.
                                isVisible={this.state.feeToolTipVisible}
                                //(Must) When true, tooltip is displayed
                                content={
                                    <View>
                                        <Text style={styles.text}>Amount incurred in ToolShare account-level or transaction-level fees and charges for fees such as service fees.</Text>
                                    </View>
                                }
                                //(Must) This is the view displayed in the tooltip
                                placement="bottom"
                                //(Must) top, bottom, left, right, auto.
                                onClose={() => this.setState({ feeToolTipVisible: false })}
                            >
                                <TouchableOpacity
                                    style={styles.touchable}
                                    onPress={() => this.setState({ feeToolTipVisible: true })}>
                                    <Ionicons name="information-circle-outline" size={20} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                            </Tooltip>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={styles.activeText}>-$16.97</Text>
                        </View>
                        <View style={styles.divider} />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <TouchableOpacity>
                                <Text style={styles.title}>
                                    Account Level Reserve &nbsp;
                                </Text>
                            </TouchableOpacity>
                            <Tooltip
                                animated={true}
                                //(Optional) When true, tooltip will animate in/out when showing/hiding
                                arrowSize={{ width: 16, height: 8 }}
                                //(Optional) Dimensions of arrow bubble pointing to the highlighted element
                                backgroundColor="rgba(0,0,0,0.5)"
                                //(Optional) Color of the fullscreen background beneath the tooltip.
                                isVisible={this.state.reverseToolTipVisible}
                                //(Must) When true, tooltip is displayed
                                content={
                                    <View>
                                        <Text style={styles.text}>Amount held in reserve to ensure that you have enough funds to fulfill any claims or chargebacks.</Text>
                                    </View>
                                }
                                //(Must) This is the view displayed in the tooltip
                                placement="bottom"
                                //(Must) top, bottom, left, right, auto.
                                onClose={() => this.setState({ reverseToolTipVisible: false })}
                            >
                                <TouchableOpacity
                                    style={styles.touchable}
                                    onPress={() => this.setState({ reverseToolTipVisible: true })}>
                                    <Ionicons name="information-circle-outline" size={20} color={DEFAULT_COLOR} />
                                </TouchableOpacity>
                            </Tooltip>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={styles.activeText}>-$16.97</Text>
                        </View>
                        <View style={styles.divider} />
                        <View>
                            <Text style={styles.textDescription}>
                                Transfer of $133.07 schedueled to initiate on 2020-06-11 {'\n'}
                                * Transfer can take 3-5 business days to complete and transfer amount is subject to change. 
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <TabBar props={this.props}/>
            </View>
        )
    }
}
 
export default PaymentTransfer;
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
        marginVertical:10
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
        fontSize: 14,
        marginVertical: 5
    },
    activeText: {
        fontSize: 14,
        marginVertical: 5,
        color:'red'
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
    dateText: {
        color: DEFAULT_COLOR,
        fontSize: 14,
        textAlign: 'center',
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
    touchable: {
        marginTop: 5,
    },

    largeText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },
});