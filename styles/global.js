import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        color: 'white',
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
})