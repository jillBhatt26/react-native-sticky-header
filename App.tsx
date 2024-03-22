import MainApp from './app/index';
import { AppContextProvider } from './hooks/useAppContext';

export default function App() {
    return (
        <AppContextProvider>
            <MainApp />
        </AppContextProvider>
    );
}
