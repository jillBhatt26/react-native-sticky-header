import { Animated } from 'react-native';

export interface IUseCollapseHeaderState {
    scrollY: Animated.Value;
    diffClamp: Animated.AnimatedDiffClamp<string | number>;
    translateY: Animated.AnimatedInterpolation<string | number>;
}
