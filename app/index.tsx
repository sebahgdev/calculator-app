
import ThemedText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import { Text, View } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <ThemedText
                variant='h1'>
                50x500</ThemedText>
            <ThemedText variant='h2'>
                250
            </ThemedText>

        </View>
    );
}

export default CalculatorApp
