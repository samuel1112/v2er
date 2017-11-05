/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {View} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import app from './src/reducers'
import Main from './src/main';

const store = createStore(app);

const Container = () =>
    <Provider store={store}>
        <View style={{flex: 1}}>
            <Main />
        </View>
    </Provider>;

export default Container;
