/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import FindScreen from '../Screens/FindScreen';
import LikeScreen from '../Screens/LikeScreen';
import MapScreen from '../Screens/MapScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity style={{ top: -12 }}
        onPress={onPress}>
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#FFFFFF',
            shadowColor: '#7F5DF0',
            shadowOffset: {
                width: 0,
                height: 10,

            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
        }}>
            {children}
        </View>
    </TouchableOpacity>
);


const Tabs = () => {
    return (
        <Tab.Navigator style={styles.shadow}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 30,
                    height: 60,
                },
            }
            }
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../Assets/Icons/Home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 60,
                                    height: 60,
                                    tintColor: focused ? '#46C2CB' : '#CFCFD1',
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Find" component={FindScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../Assets/Icons/find.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#46C2CB' : '#CFCFD1',
                                }}
                            />
                        </View>
                    )
                }} />

            <Tab.Screen name="Map" component={MapScreen}
                options={{
                    tabBarIcon: ({ focused }) => (

                        <Image source={require('../Assets/Icons/map.png')}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? '#46C2CB' : '#CFCFD1',
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        < CustomTabBarButton {...props} />
                    )
                }} />
            <Tab.Screen name="Like" component={LikeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../Assets/Icons/like.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#46C2CB' : '#CFCFD1',
                                }}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../Assets/Icons/profile.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#46C2CB' : '#CFCFD1',
                                }}
                            />
                        </View>
                    )
                }} />
        </Tab.Navigator >
    );
}


const styles = StyleSheet.create({

    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 10,
            height: 10,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
    blueShadow: {


    },



});

export default Tabs;