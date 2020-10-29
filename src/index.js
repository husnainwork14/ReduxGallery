import React, { Component } from 'react';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store';
import Routes from './navigation/routes'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './container/HomeScreen';
import ImagesScreen from './container/ImagesScreen';

let persist = null
const Stack = createStackNavigator();

export default class ReduxApp extends Component {
    state = {
        reHydrated: false
    }
    async componentDidMount() {
        persist = await persistStore(store, null, () => {
            this.setState({ reHydrated: true }, () => {
                console.log('rehydrated state of store',
                    store.getState());
            });
        });
    }

    render() {
        if (!this.state.reHydrated) {
            return <View />;
        }
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Home"
                                component={HomeScreen} />
                            <Stack.Screen name="Gallery"
                                component={ImagesScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        )
    }
} 