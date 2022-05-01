import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive: 'https://www.linkpicture.com/q/IMG_20220119_171531.jpg',
        // inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive: 'https://www.linkpicture.com/q/IMG_20220118_175311-1.jpg',
        // inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inactive: 'https://www.linkpicture.com/q/IMG_20220118_175456-1.jpg',
        // inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive: 'https://www.linkpicture.com/q/IMG_20220118_180133.jpg',
        // inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/%20shopping-bag-full.png',
    },
    {
        name: 'Profile',
        active:'https://www.linkpicture.com/q/SquareQuick_202211904436501.jpg',
        // active:'https://www.linkpicture.com/q/IMG_20220119_033521.jpg',    
        inactive: 'https://www.linkpicture.com/q/IMG_20220119_030806.jpg',   
        //inactive: 'https://www.linkpicture.com/q/IMG_20220119_005237-1.jpg',
    }
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab ] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={(() => setActiveTab(icon.name))}>
            <Image 
                source={{ uri: activeTab ===                                                                                                                                                                  icon.name ? icon.active : icon.inactive }} 
                //style={styles.icon}
                style={[
                    styles.icon,
                    icon.name === 'Profile' ? [styles.profileActivePic(), styles.profileActivePic] : null,
                    activeTab === 'Profile' && icon.name === activeTab 
                    ? styles.profileActivePic(activeTab) : styles.profilePic,
                    // : null,
                ]}
            />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper} >
            <Divider width={1} orientation='vertical' />
                <View style={styles.container}>
                    {icons.map((icon, index) => (
                        <Icon key={index} icon={icon} />
                    ))}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        width: '100%',
        bottom: '1%',
        backgroundColor: '#000',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        bottom: 1,
        paddingTop: 10,
    },
    icon: {
        width: 33,
        height: 33,
    },
    profilePic: ({
        height: 40,
        borderColor: '#fff',
    }),
    profileActivePic: (activeTab = '') => ({
        borderRadius: 40,
        height: 33,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#fff',
    }),
})

export default BottomTabs
