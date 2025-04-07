
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router'
import { Text, View } from 'react-native'

const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
});



const RootLayout = () => {
    return (
        <View>
            <Text>RootLayout</Text>
            <Slot />
            <Text>Footer</Text>
        </View>
    )
}

export default RootLayout
