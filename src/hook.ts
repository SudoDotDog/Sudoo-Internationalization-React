/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Hook
 */

import { LOCALE, SudooFormat, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "./context";
import { SetLocaleFunction } from "./declare";

export type UseFormatHook<PK extends string = string> = () => SudooFormat<PK>;

export const useInternationalization = (): InternationalizationContextValue => {

    const context: InternationalizationContextValue = React.useContext(InternationalizationContext);

    return context;
};

export const useLocale = (): LOCALE => {

    const context: InternationalizationContextValue = useInternationalization();

    return context.locale;
};

export const useSetLocale = (): SetLocaleFunction => {

    const context: InternationalizationContextValue = React.useContext(InternationalizationContext);

    return context.setLocale;
};

export const useFormat = <PK extends string = string>(internationalization: SudooInternationalization<PK>): SudooFormat<PK> => {

    const locale: LOCALE = useLocale();
    const format: SudooFormat<PK> = internationalization.format(locale);

    return format;
};

export const createUseFormat = <PK extends string = string>(internationalization: SudooInternationalization<PK>): UseFormatHook<PK> => {

    return (): SudooFormat<PK> => {

        return useFormat<PK>(internationalization);
    };
};
