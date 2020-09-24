import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Button,
    ImageBackground
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { DEFAULT_COLOR } from './../../styles/common';
import TabBar from './../../components/TabBar';
export default class Service extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.headerBackground}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{ marginTop: 10, marginLeft: 5 }}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}>
                        <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={styles.mainContainer}>
                    <Text style={styles.title}>
                        Terms of Service.
                        </Text>
                </View>
                <View style={{marginHorizontal:10, marginVertical:5}}>
                    <View style={styles.divider}></View>
                </View>
                <ScrollView style={styles.container}>
                    
                    <View style={styles.mainContainer}>

                        <View style={styles.item}>
                            <Text style={styles.description}>
                                ToolShare inc. ("ToolShare", "we", "us") provides the user ("you") a platform for facilitating the peer-to-peer rentals. 
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                In order to use ToolShare, you must first agree to the terms and conditions of this Terms of Use Agreement (the "Agreement"). Please read the Agreement carefully before registering with or using ToolShare. If you do not agree to comply with the terms of this Agreement, you should not indicate your acceptance of it, and should not use ToolShare. You cannot register as a ToolShare user unless and until you have expressly indicated your acceptance of this Agreement.
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                Quick Summary 
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.textDescripton}>
                                REGISTRATION
                            </Text>
                            <Text style={styles.description}>
                                Eligibility. Registered users of ToolShare each a ("User") must be of legal age in their applicable state or other jurisdiction to form and perform binding legal contracts for the rental/exchange between them. In no case shall any User be less than eighteen (18) years old. Your registration for, and/or use of, ToolShare constitutes your representation that (a) you satisfy these eligibility requirements, and (b) you have the right, authority and capacity to abide by all of the terms and conditions of this Agreement. Registration is void where prohibited.
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                By registering to use ToolShare, you affirm that you are 18 years of age or older.  You agree to provide accurate, current, and complete information during the registration process, including your real name and contact information ("Registration Information"). We reserve the right to refuse registration for any reason at our sole discretion.
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                Online Account Security; No Assignment. Upon registration, you will select a unique username and password. You are responsible for maintaining the security and confidentiality of your username and password. You are further responsible for any and all activity on your account. You agree to notify us in writing immediately if you suspect any unauthorized use of or access to your account. ToolShare will not be liable for any loss or damage to you arising from unauthorized access to or use of your account caused by your failure to comply with this provision.
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                CONDITIONS OF USE
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                Conditioned on your compliance with this Agreement,  grant to you a personal, limited, nonexclusive, nontransferable license to use ToolShare. We reserve all rights of ownership in ToolShare not expressly granted to you. We or our licensors own all right, title and interest in and to ToolShare and its content, including all copyrights, trademarks, and other intellectual property rights ("ToolShare Content").  Neither your account nor any of your rights or obligations as a ToolShare user may be assigned, transferred, rented, loaned, or otherwise distributed or used for the benefit of any other person or entity without our prior written consent.</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                Personal Conduct. As a condition of the license granted to you to use ToolShare, you agree that you will not use ToolShare in any manner or for any purpose that violates any applicable law, regulation, or term of this Agreement. Specifically, you agree that you will not (i) access or attempt to access any account that you are not authorized to access, (ii) modify or attempt to modify ToolShare in any manner or form, (iii) copy, distribute, or create derivative works based on the ToolShare Content, (iv) impair ToolShare or any other person’s use or enjoyment of ToolShare or of any good or service procured through ToolShare including but not limited to, by trespass or burdening network capacity, or (v) sublicense, sell, resell, or otherwise convey ToolShare,  or any elements thereof.</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                INDEMNIFICATION
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                You agree to indemnify, defend, and hold harmless ToolShare, Inc., its officers, directors, employees, agents, subcontractors, sponsors, and enterprise partners for any losses, costs, liabilities and expenses (including reasonable attorneys' fees) arising out of or relating to (i) any intentional or willful violation by you of any rights of another or harm to another caused by you or any product or service you make available through ToolShare, (ii) any inaccurate or untruthful User Content or other information provided by you to or made available through ToolShare, (iii) any violation by you of any term of this Agreement.
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                TERMINATION
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                Either you or we may terminate your account and/or membership at any time, for any reason or no reason, without explanation, effective upon sending written notice to the other party. We reserve the right to immediately suspend or terminate your access to ToolShare or any other ToolShare, Inc. service, without notice, if we (in our sole discretion) determine that you have violated any term of this Agreement. In the event that your access is suspended due to the breach of this Agreement, you acknowledge and agree that any fee(s) you have paid for such service will not be refunded. Following any termination of your account and/or membership, we reserve the right to send a notice that you have been terminated to other Users with whom you have corresponded.
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                NOTICES
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                All notices and communications required or permitted to be made pursuant to this Agreement shall be sent by certified or registered mail, postage prepaid or electronic mail as follows: if to you, to the most current email address or physical address on file with ToolShare, Inc. in association with your membership or account; if to ToolShare, Inc.:
                                ToolShare, Inc.{'\n'}Email:  support@toolshare.co
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                GENERAL CONDITIONS
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                This Agreement contains the entire agreement between you and ToolShare, Inc. regarding the use of ToolShare and any product or service obtained in relation thereto, superseding any prior agreements (including, but not limited to, any prior versions of this Agreement). Unless otherwise explicitly stated, the terms will survive termination of your account and/or membership. If any provision of this Agreement is held invalid, the remainder of this Agreement shall continue in full force and effect.
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                QUESTIONS?
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.description}>
                                If you have any questions or concerns about this Agreement or ToolShare, please click here to contact us. support@toolshare.co</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: "column",
    },
    headerBackground: {

    },
    title: {
        fontSize: 20
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 25,
    },
    imageGroup: {
        position: 'absolute',
        top: 120,
        left: 25
    },
    divider: {
        borderColor: 'grey',
        borderWidth: 0.5
    },
    mainContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    text: {
        fontSize: 16,
        marginVertical: 4
    },
    textDescripton: { fontSize: 14, },
    item: {
        marginVertical: 5
    },
    description: {
        fontSize: 12,
        marginTop: 5
    },
    profileText: {
        position: 'absolute',
        left: 70,
        marginTop: 10,
        color: 'white'
    }
});