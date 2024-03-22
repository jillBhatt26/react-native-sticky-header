import { FC, useMemo } from 'react';
import AppContext from '../context';
import { IUseAppContextProps, IUseAppContextValue } from '../interfaces';
import { useCollapseHeader, IUseCollapseHeaderState } from '../modules';

const AppContextProvider: FC<IUseAppContextProps> = ({ children }) => {
    // modules as hooks

    const collapseHeader: IUseCollapseHeaderState = useCollapseHeader();

    // value
    const value: IUseAppContextValue = useMemo<IUseAppContextValue>(
        () => ({
            collapseHeader
        }),
        [collapseHeader]
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
