import { createContext } from 'react';
import { IUseAppContextValue } from '../interfaces';

const AppContext = createContext<IUseAppContextValue | null>(null);

export default AppContext;
