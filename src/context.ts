/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Context
 */

import { getSystemLanguage, LOCALE } from "@sudoo/internationalization";
import * as React from "react";

export type InternationalizationContextValue = {

    readonly locale: LOCALE;
    readonly setLocale: (newLocale: LOCALE) => void;
};

const defaultContext: InternationalizationContextValue = {

    locale: getSystemLanguage(),
    setLocale: (_newLocale: LOCALE) => {
        throw new Error("[Sudoo-Internationalization-React] No Provider Found");
    },
};

export const InternationalizationContext: React.Context<InternationalizationContextValue> = React.createContext(defaultContext);