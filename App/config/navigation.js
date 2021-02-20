import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign  } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import ContactDetails from '../screens/ContactDetails'
import ContactsList from '../screens/ContactsList'
import ActionDetails from '../screens/ActionDetails'
import ActionsList from '../screens/ActionsList'
import Settings from '../screens/Settings'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Loading from '../screens/Loading'

const Stack = createStackNavigator()

const ContactNavigation = () =>  (
    <Stack.Navigator 
        // screenOptions={{
        //     headerStyle: {
        //         backgroundColor: 'blue'
        //     }
        // }}
    >
        <Stack.Screen 
            name='contactsList' 
            component={ContactsList} 
            options={
                {
                    title: 'Contacts'
                }
            } />
        <Stack.Screen 
            name='ContactDetails' 
            component={ContactDetails}
            options={({route}) => {
                return {
                    title: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
                    // headerStyle: { backgroundColor: 'tomato' }
                }
            }} />
    </Stack.Navigator>
)

const ActionStack = createStackNavigator()
const ActionScreen = () => (
    <ActionStack.Navigator>
        <ActionStack.Screen name='ActionsList' component={ActionsList} />
        <ActionStack.Screen name='ActionDetails' component={ActionDetails} />
    </ActionStack.Navigator>
)

const AppTabs = createBottomTabNavigator()

const AppTabScreen = () => (
    <AppTabs.Navigator
        tabBarOptions={{
            activeTintColor: 'red'
        }} 
    >
        <AppTabs.Screen 
            name='Contact' 
            component={ContactNavigation}
            options={{
                tabBarIcon: (props) => <AntDesign name='contacts' size={24} color={props.color} />
            }}
        />
        <AppTabs.Screen 
            name='Actions' 
            component={ActionScreen} 
            options={{
                tabBarIcon: (props) => <Ionicons name='shield-checkmark-outline' size={24} color={props.color} />
            }}
        />
    </AppTabs.Navigator>
) 

const AppDrawer = createDrawerNavigator()
const AppDrawerScreen = () => (
    <AppDrawer.Navigator>
        <AppDrawer.Screen 
            name='Tabs' 
            component={AppTabScreen}
            options={{ drawerLabel: 'Home'}} 
        />
        <AppDrawer.Screen name='Settings' component={Settings} />
    </AppDrawer.Navigator>
)

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='SignIn' component={SignIn} />
        <AuthStack.Screen name='SignUp' component={SignUp} />
    </AuthStack.Navigator>
)

export default () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
            setUser({})
        }, 1000)

        // setTimeout(() => {
        //     setUser({})
        // }, 1000)

    }, [])

    // if (isLoading) {
    //     return <Loading />
    // }

    return (
        <NavigationContainer>
            {/* <AppDrawerScreen /> */}
           {isLoading ? <Loading /> : user ? <AppDrawerScreen /> : <AuthStackScreen />}
        </NavigationContainer>
    )
} 
