import React from 'react'
import { View, Image, Video, StyleSheet } from 'react-native'
import { StylesContext } from '@material-ui/styles'
import SignupForm from '../components/signupScreen/SignupForm'

// const INSTAGRAM_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'

const INSTAGRAM_LOGO = 'https://i.ibb.co/Y218F3f/1647672507885.jpg'
const INSTAGRAM_LOGONAME = 'https://i.ibb.co/VS8Qjcf/large-01.jpg'
const LOGIN_BACKGIMG = 'https://drive.google.com/file/d/1bx_iKgkAAa1Mc0tHvJcscHMLFjKH8rs0/view'

const SignupScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={{borderRadius: 20 }} source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100}} />
            <Image style={{ width: 120 }} source={{ uri: INSTAGRAM_LOGONAME, height: 30, width: 100}} />
        </View>
        <SignupForm navigation={navigation}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
})

export default SignupScreen