import { useCallback, useEffect, useState } from 'react';
import { throttle } from 'lodash-es';

const getWindowDimensions = (): number[] => {
    const { innerWidth: width, innerHeight: height } = window;
    return [width, height];
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState<number[]>([0, 0]);

    // Methods.
    const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
    };

    const handleResizeThrottled = useCallback(throttle(handleResize, 20), [handleResize, windowDimensions]);

    // Life cycle.
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResizeThrottled);
        return () => window.removeEventListener('resize', handleResizeThrottled);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
