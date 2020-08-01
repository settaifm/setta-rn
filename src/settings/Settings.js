import React, {Fragment, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {Block, Button, NavBar,  Text} from 'galio-framework';
import Slider from '@react-native-community/slider';
import {useDispatch, useSelector} from 'react-redux';
import {HIDE_PLAYER_SETTINGS, SET_VOLUME} from '../player/settings-store';
import {setPlayerVolume} from '../player/play-services';
import {throttle} from '../shared/services';
import {appStyles as styles} from '../layout/constants/generic-styles';
import {  TouchableOpacity } from "react-native";
export function Settings(){

    const {volume,showSettings} = useSelector(state => state.settings);
    const dispatch = useDispatch();

    const [volumeInput, setVolumeInput] = useState(volume);


function onClose() {

    dispatch({type: HIDE_PLAYER_SETTINGS});
}

    if(!showSettings)
        return <Fragment></Fragment>

    function updateVolume(value) {

        setVolumeInput(value)

        setPlayerVolume(value,dispatch);



    }

    return     <Modal
        animationType = {"fade"}
        transparent = {true}
        visible = {true}
        onRequestClose = {() =>{ onClose() } }>



        <View style={{flex: 1, flexDirection: 'column', paddingStart:20 ,paddingEnd:20}} onPress = {() =>{ onClose() } }>
            <View style={{ height: 50}} />
            <View style={{ height: 50}} />


            <View style={{ flex: 1, height: 50 , flexDirection: 'row'}} >
                <Block flex >
                    <Text style = {styles.text}>Volume</Text>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        value={volumeInput}
                        onValueChange={(evt) => updateVolume(evt)}
                        onSlidingcomplete={(evt) => updateVolume(evt)}
                        style = {styles.volslider}
                        step={1}
                        thumbTintColor={"white"}
                    />
                </Block>


                <View style={{ height: 50}} />
                <View style={{ height: 50}} />

            </View>


        </View>

    </Modal>
}

