import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Gallery from '../components/Gallery';
import Header from '../components/Header';

const MainApp = (): JSX.Element => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* Header */}
            <Header />

            {/* Scrollable Gallery */}
            <Gallery />

            {/* Statusbar */}
            <StatusBar backgroundColor="lightblue" />
        </View>
    );
};

export default MainApp;
