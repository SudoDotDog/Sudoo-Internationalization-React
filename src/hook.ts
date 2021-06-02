/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Hook
 */

import { LOCALE, SudooFormat, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "./context";

export const useInternationalization = (): InternationalizationContextValue => {

    const context: InternationalizationContextValue = React.useContext(InternationalizationContext);

    return context;
};

export const useLocale = (): LOCALE => {

    const context: InternationalizationContextValue = useInternationalization();

    return context.locale;
};

export const useFormat = (internationalization: SudooInternationalization): SudooFormat => {

    const locale: LOCALE = useLocale();
    const format: SudooFormat = internationalization.format(locale);

    return format;
};
