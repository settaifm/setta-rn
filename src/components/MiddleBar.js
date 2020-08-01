import React from 'react';
import {Dimensions, View,Linking} from 'react-native';
import {Block, Button, Text, theme} from 'galio-framework';
import {appStyles as styles} from '../layout/constants/generic-styles';
import {Deemwar} from './Deemwar';
import {VolumeControl} from './VolumeControl';



const { width } = Dimensions.get('screen');


export function MiddleBar() {

    console.log("middle")
    return (<View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',

        }}>
            <Block row top middle style={{
                alignContent: 'center',
                alignSelf: 'center',
            }}>
                <Text color="white" style={styles.centerlogocontainer} size={60}>Settai FM</Text>

                <Block top style={styles.trademark}>
                    <Text size={16} color="white">24 hours</Text>
                </Block>
            </Block>
            <Deemwar/>

        </View>
    )
}


