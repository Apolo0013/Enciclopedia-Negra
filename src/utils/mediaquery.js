//Hook Pensonalizazdor por: Chat Gpt pae.
import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleChange = (e) => {
        setMatches(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        // Cleanup
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
}
