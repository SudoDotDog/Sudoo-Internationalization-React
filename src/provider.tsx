/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Provider
 */

import { getSystemLanguage } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { InternationalizationContext } from "./context";
import { InternationalizationManager } from "./manager";

export type InternationalizationProviderProps = {

    readonly children: React.ReactNode;
};

export type InternationalizationProviderStates = {

    readonly locale: IETF_LOCALE;
};

export const InternationalizationProvider: React.FC<InternationalizationProviderProps> = (props: InternationalizationProviderProps) => {

    const [locale, setLocale] = React.useState<IETF_LOCALE>(getSystemLanguage());

    React.useEffect(() => {

        const manager: InternationalizationManager = InternationalizationManager.getInstance();
        manager.addListener("Internationalization-Provider", setLocale);

        return () => {
            manager.removeListener("Internationalization-Provider");
        };
    }, []);

    return (
        <InternationalizationContext.Provider
            value={{
                locale,
                setLocale,
            }}
        >
            {props.children}
        </InternationalizationContext.Provider>
    );
};
