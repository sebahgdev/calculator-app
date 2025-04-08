
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'


const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
});



const RootLayout = () => {
    return (
        <View style={globalStyles.background}>
            {/*     <Text>RootLayout</Text> */}
            <Slot />
            {/*   <Text>Footer</Text> */}
            <StatusBar style="light" />
        </View>
    )
}

export default RootLayout
