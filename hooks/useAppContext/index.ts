import { useContext } from 'react';
import { IUseAppContextValue } from './interfaces';
import AppContext from './context';

const useAppContext = (): IUseAppContextValue => {
    const context: IUseAppContextValue | null = useContext(AppContext);

    if (!context) {
        throw new Error(
            'useAppContext must be used within a AppContextProvider'
        );
    }

    return context;
};

export * from './interfaces';
export { default as AppContext } from './context';
export * from './modules';
export { default as AppContextProvider } from './provider';
export default useAppContext;
