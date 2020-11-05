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
export default class Help extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.headerBackground}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{ marginTop: 30, marginLeft: 0}}
                            onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                            <Feather name="chevron-left" size={35} color={DEFAULT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>
                            We are here to help.
                        </Text>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.item}>
                            <View style={styles.divider}></View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                Popular Questions
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.textDescripton}>
                                Why lend equipment on Toolshare?
                            </Text>
                            <Text style={styles.description}>
                                Make your tools work for you, ToolShare is a simple and secure way to make money on tools and equipment that sit around collecting dust. 
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.textDescripton}>
                                How are tools protected?
                            </Text>
                            <Text style={styles.description}>
                                ToolShare will ensure your tool are returned in the condition that they were rented. Patrons are held liable for rented tools. 
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.textDescripton}>
                                ToolShare is here for you.
                            </Text>
                            <Text style={styles.description}>
                                We are here to serve you. ToolShare offeres around the clock tool rental, tool tips, and assistance for any of your rental needs. 
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <TabBar props={this.props} />
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
    textDescripton: { fontSize: 14,},
    item: {
        marginVertical: 5
    },
    description: {
        fontSize: 12,
        marginTop:5
    },
    profileText: {
        position: 'absolute',
        left: 70,
        marginTop: 10,
        color: 'white'
    }
});