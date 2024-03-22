import { Animated } from 'react-native';
import useAppContext from '../../hooks/useAppContext';
import { HEADER_HEIGHT } from '../../constants';

const Header = (): JSX.Element => {
    const {
        collapseHeader: { translateY }
    } = useAppContext();

    return (
        <Animated.View
            style={[
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: HEADER_HEIGHT,
                    backgroundColor: 'lightblue',
                    zIndex: 1000,
                    elevation: 1000
                },
                {
                    transform: [
                        {
                            translateY: translateY
                        }
                    ]
                }
            ]}
        ></Animated.View>
    );
};

export default Header;
