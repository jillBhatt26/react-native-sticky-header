import { Animated } from 'react-native';
import { IUseCollapseHeaderState } from './interfaces';
import { HEADER_HEIGHT } from '../../../../constants';

const useCollapseHeader = (): IUseCollapseHeaderState => {
    // animated values
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
    const translateY = diffClamp.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT]
    });

    return {
        scrollY,
        diffClamp,
        translateY
    };
};

export * from './interfaces';
export default useCollapseHeader;
