'use client';

import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

// Context.
interface CookiesContextValue {
    consent?: boolean;
    onAllow: () => void;
    onDecline: () => void;
}

const CookiesContext = createContext<CookiesContextValue>({
    consent: undefined,
    onAllow: () => {},
    onDecline: () => {}
});

// TODO in the future accept more.
export const USER_CONSENT_KEY = 'gtm';

interface CookiesProviderProps {}

export const CookiesProvider = ({ children }: PropsWithChildren<CookiesProviderProps>) => {
    const consentInitial = getCookie(USER_CONSENT_KEY) as undefined | boolean;
    const [consent, setConsent] = useState<boolean | undefined>(consentInitial ?? false);

    useEffect(() => {
        setConsent(consentInitial);
    }, [consentInitial]);

    // Methods.
    const handleOnAllow = useCallback(() => {
        setCookie(USER_CONSENT_KEY, true);
        setConsent(true);
    }, [setCookie, setConsent]);

    const handleOnDecline = useCallback(() => {
        setCookie(USER_CONSENT_KEY, false);
        setConsent(false);
    }, [setCookie, setConsent]);

    return (
        <CookiesContext.Provider
            value={{
                consent,
                onAllow: handleOnAllow,
                onDecline: handleOnDecline
            }}
        >
            {children}
        </CookiesContext.Provider>
    );
};

const useCookies = () => {
    return useContext(CookiesContext);
};

export default useCookies;
