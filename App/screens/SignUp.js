import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignUp = ({ navigation }) => {
    return (
        <>
            <Button title='SignIn' onPress={() => navigation.push('SignIn')} />
            <Button title='SignUp' onPress={() => alert('Here we are')} />
        </>
    )
}

export default SignUp

const styles = StyleSheet.create({})

