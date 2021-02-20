import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignIn = ({ navigation }) => {
    return (
        <>
            <Button title='SignIn' onPress={() => alert('Here we are')} />
            <Button title='SignUp' onPress={() => navigation.push('SignUp')} />
        </>
    )
}

export default SignIn

const styles = StyleSheet.create({})

