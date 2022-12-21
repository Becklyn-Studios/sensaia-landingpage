/**
 * External dependencies
 */
 import { useState, useCallback, useEffect } from 'react';

const useMedia = (width) => {
    const [targetReached, setTargetReached] = useState(false);
    const [checking, setChecking] = useState(true);
    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change', updateTarget, {passive: true});

        if (media.matches) {
            setTargetReached(true);
        }

        setChecking(false);

        return () => media.removeEventListener('change', updateTarget, { passive: true });
    }, []);

    return {
        isMobile: targetReached,
        checking
    };
}

export default useMedia;
