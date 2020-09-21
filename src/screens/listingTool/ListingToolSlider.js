import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DEFAULT_COLOR } from './../../styles/common';

const slides = [
    {
        key: 1,
        title: 'Its free to list your equipment',
        text: 'Your in control',
        description: 'You set your daily price for each piece of equipment you list and se the availably that works best for you.',
        image: require("./../../../assets/images/ListingTools.png"),
    },
    {
        key: 2,
        title: "We've got you covered",
        text: 'Insurance',
        description: "You're protected with $1 million in liability insurnace, and your car is covered against theft and physical damage.",
        image: require("./../../../assets/images/ListingTools.png"),
    },
    {
        key: 3,
        title: 'Get paid',
        text: 'Earning',
        text1:'Payment',
        description: "You'll earn up to 85% of the rental price.",
        description1: "You're get paid via Paypal every two weeks.",
        image: require("./../../../assets/images/ListingTools.png"),
    },
    {
        key: 4,
        title: "Here for you",
        text: 'Customer Support',
        description:
            "Our team is with you every step of the way from any questions you may have to any assistance you may require.",
        image: require("./../../../assets/images/ListingTools.png"),
        buttonText:"Start Lending"
    },
];

export default class ListingToolSilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false
        }
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require("./../../../assets/images/ListingTools.png")}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('HomeScreen') }}
                        style={{
                        marginLeft: 10,
                        marginTop:10
                    }}>
                        <AntDesign name="close" size={26} color="white" />
                    </TouchableOpacity>

                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    {item.key == 3 ?
                        (<View>
                            <Text style={styles.text}>{item.text}</Text>
                            <Text style={styles.description}>{item.description1}</Text>
                        </View>)
                        :
                        (<View></View>)
                    }
                    {item.key == 4 ? (<View style={styles.buttonGroup}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                            onPress={(e) => { this.props.navigation.navigate('ListingToolSliderScreen') }}>
                            <Text style={styles.buttonText}>{item.buttonText}</Text>
                        </TouchableOpacity>
                    </View>):(<View></View>)}
                </ImageBackground>
            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
    render() {
        if (this.state.showRealApp) {
            return <ListingToolSilder />;
        } else {
            return <AppIntroSlider
                        renderItem={this._renderItem}
                        data={slides}
                        onDone={this._onDone} />;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'rgba(0,0,0,.6)'
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        marginTop:30
    },
    slide: {},
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 20
    },
    description: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal:5
    },
    button: {
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: DEFAULT_COLOR,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        padding: 5,
        textAlign: 'center'
    },
    buttonGroup: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 60
    },
})