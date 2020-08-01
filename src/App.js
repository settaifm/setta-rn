import * as React from 'react';
import {Provider} from 'react-redux';
import {StatusBar,ImageBackground} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './config/store';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container} from './layout/Container';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import {Text} from 'galio-framework';



const appstore = store();


export  default function App(props) {


    return (

        <Provider store={appstore}>
            <PersistGate loading={null} persistor={persistor}>
                <Container />
            </PersistGate>
        </Provider>


    );

}

