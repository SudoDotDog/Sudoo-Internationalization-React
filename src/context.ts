/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Context
 */

import { getSystemLanguage } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { SetLocaleFunction } from "./declare";

export type InternationalizationContextValue = {

    readonly locale: IETF_LOCALE;
    readonly setLocale: SetLocaleFunction;
};

const defaultContext: InternationalizationContextValue = {

    locale: getSystemLanguage(),
    setLocale: (_newLocale: IETF_LOCALE) => {
        throw new Error("[Sudoo-Internationalization-React] No Provider Found");
    },
};

export const InternationalizationContext: React.Context<InternationalizationContextValue> = React.createContext(defaultContext);
