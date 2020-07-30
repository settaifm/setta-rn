import {Dimensions} from 'react-native';

import React from 'react';
import {Block, Text} from 'galio-framework';
import {appStyles as styles} from '../layout/constants/generic-styles';

const { height, width } = Dimensions.get('screen');


export function Deemwar() {

    return     <Block row center space="between"  style={[styles.deemwarlogocontainer]}>
        <Block flex middle right>
            <Text color="white"  style={[styles.deemwarlogo, styles.shadow]}>A Deemwar Product</Text>
        </Block>
    </Block>
}
