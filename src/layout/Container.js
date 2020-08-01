import {useSelector} from 'react-redux';
import React from 'react';
import {Dimensions, ImageBackground, Platform, StatusBar, StyleSheet, View} from 'react-native';
import {TopBar} from '../components/TopBar';
import {PlayControl} from '../player/PlayControl';
import {Block, Button, Text, theme} from 'galio-framework';
import {HeaderHeight} from './constants/utils';
import {materialTheme} from './constants';
import {Player} from '../player/Player';
import {ErrorProgressBar, PlayProgressBar} from '../components/PlayProgressBar';
import {Deemwar} from '../components/Deemwar';
import {MiddleBar} from '../components/MiddleBar';

const { height, width } = Dimensions.get('screen');
export function ReloadComponent() {

    return <Block><Button
        round
        onlyIcon
        shadowless
        icon="facebook"
        iconFamily="font-awesome"
        iconColor={theme.COLORS.WHITE}
        iconSize={theme.SIZES.BASE * 3.625}
        color={theme.COLORS.BLACK}
        onPress ={() => console.log("pressed")}
        style={[]}

    /></Block>
}

export function Container() {
    const {isLoaded,error} = useSelector(state => state.player);
    const {isInternetReachable} = useSelector(state => state.settings);


    // let component =<ReloadComponent/>
    //
    // if(isInternetReachable)
      let  component =<Player/>;




    return <View style={styles.viewcontainer}>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={require('../../assets/galaxy.png')} style={styles.image}>
            <View style={{  flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
                    <TopBar/>
                    <MiddleBar/>
                    <Player/>
            </View>
        </ImageBackground>
    </View>


                }





const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.COLORS.BLACK,
        marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    },
    viewcontainer: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        zIndex: 3,
        position: 'absolute',
        bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
    },
    paddedTitle: {




    },
    button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
    },
    pro: {
        backgroundColor: materialTheme.COLORS.LABEL,
        paddingHorizontal: 8,
        marginLeft: 12,
        borderRadius: 2,
        height: 22
    },
    bottomContainer: {


        marginLeft: 12,
        marginRight: 12,
        marginBottom:12


    },
    gradient: {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 66,
    },
});
