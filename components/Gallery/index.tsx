import { View, Image, Animated } from 'react-native';
import { images } from '../../data';
import useAppContext from '../../hooks/useAppContext';

const Gallery = (): JSX.Element => {
    const {
        collapseHeader: { scrollY }
    } = useAppContext();

    return (
        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={e => {
                scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
        >
            {images.length > 0 &&
                images.map((image: string, index: number) => (
                    <View
                        key={index}
                        style={{
                            height: 400,
                            width: 'auto',
                            margin: 20
                        }}
                    >
                        <Image
                            source={{ uri: image }}
                            style={{
                                flex: 1,
                                width: 350,
                                borderRadius: 10
                            }}
                        />
                    </View>
                ))}
        </Animated.ScrollView>
    );
};

export default Gallery;
