import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title='Toggle Drawer' onPress={() => navigation.toggleDrawer()} />
            <Button title='To Action' onPress={() => navigation.navigate('Tabs', { screen: 'Actions' })} />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})