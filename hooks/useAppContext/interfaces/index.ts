import { ReactNode } from 'react';
import { IUseCollapseHeaderState } from '../modules';

export interface IUseAppContextProps {
    children: ReactNode;
}

export interface IUseAppContextValue {
    collapseHeader: IUseCollapseHeaderState;
}
