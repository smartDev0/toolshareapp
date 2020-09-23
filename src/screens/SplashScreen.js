import React from 'react';

//Import all required component
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as Progress from 'react-native-progress';
import { DEFAULT_COLOR } from '../styles/common';
class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true,
            count: 0
        }
    }

    componentDidMount = () => {
        let timer = setInterval(() => {
            let icount = this.state.count + 0.25;
            this.setState({ count: icount });
            if (this.state.count > 1) {
                this.setState({ animating: false });
                clearInterval(timer);
                AsyncStorage.getItem('user_id').then(value =>
                    this.props.navigation.navigate(
                        value === null ? 'Auth' : 'DrawerNavigationRoutes'
                    )
                );
            }
        }, 125);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{ width: '60%', height: 55, resizeMode: 'contain', tintColor: DEFAULT_COLOR, resizeMode: "cover", }}
                />
                <View style={styles.activityIndicator}>
                    <Progress.Bar
                        progress={this.state.count}
                        width={150}
                        height={4}
                        color={DEFAULT_COLOR}
                        animated={this.state.animating} />
                </View>
            </View>
        );
    }
};
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    activityIndicator: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 150
    },
});