import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

const handleSignOut = async () => {
    try{
        await firebase.auth().signOut()
        console.log('Signed out successfully')
    }catch (error){
        console.log(error)
    }
}

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.logo}
                    source={{uri: 'https://www.linkpicture.com/q/text-1641903143524.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut}>
                <Image 
                    style={styles.logout__logo}
                    source={{uri: 'https://cdn-icons.flaticon.com/png/512/4400/premium/4400828.png?token=exp=1649184719~hmac=375500d61be1760b531b5d8b9c00c098'}}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image 
                        source={{
                            uri: 'https://www.linkpicture.com/q/IMG_20220118_034713-1.jpg',
                            // uri: 'https://img.icons8.com/material-rounded/24/ffffff/plus-2-math--v1.png',
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={{
                            uri: 'https://img.icons8.com/metro/26/ffffff/like.png',
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style= {styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image 
                        source={{
                            uri: 'https://img.icons8.com/material-outlined/24/ffffff/facebook-messenger--v1.png',
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    iconsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
    },
    logo: {
        width: 100,
        height: 55,
        resizeMode: 'contain',
    },

    logout__logo: {
        width: 90,
        height: 40,
        marginLeft: 5,
        resizeMode: 'contain',
    },

    icon: {
        width: 32,
        height: 32,
        marginLeft: 10,
        resizeMode: 'contain',
    },

    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 28,
        bottom: 18,
        top: -3,
        width: 20,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },

    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
        
    }
})

export default Header
