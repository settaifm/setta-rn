

import React from 'react';
import {Block, Text} from 'galio-framework';
import {appStyles as styles} from '../layout/constants/generic-styles';
import {useSelector} from 'react-redux';
import ProgressBar from 'react-native-progress/Bar'
import {Dimensions, StyleSheet, View} from 'react-native';
const { height, width } = Dimensions.get('screen');




export function BufferingProgressBar() {

    const {isBuffering} = useSelector(state => state.player);


    if(!isBuffering)
        return <></>

    return (<View>
            <Text style={{ marginBottom: 20 }}>Buffering...</Text>
              <ProgressBar indeterminate={true} width={width} color="white" />
        </View>
    );



}

export function ErrorProgressBar() {

    const {error} = useSelector(state => state.player);

   // const {error} = {error:"Error message"};

  //  const error="halo";
    if(!error)
        return <></>

    return (<View>
            <Text style={{ marginBottom: 20 , paddingStart:20, color:"white"}}>{error}</Text>
            <ProgressBar indeterminate={true} width={width-20} color="white"  />
        </View>
    );



}
