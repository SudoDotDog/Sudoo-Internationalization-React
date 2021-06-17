/**
 * @author WMXPY
 * @namespace InternationalizationReact_Builder
 * @description Locale
 */

import { LOCALE, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContextValue, SetLocaleFunction } from "../context";
import { useInternationalization } from "../hook";

export type LocaleBuilderProps = {

    readonly internationalization: SudooInternationalization;

    readonly builder?: (locale: LOCALE, setLocale: SetLocaleFunction) => any;
    readonly children?: (locale: LOCALE, setLocale: SetLocaleFunction) => any;
};

export const LocaleBuilder: React.FC<LocaleBuilderProps> = (props: LocaleBuilderProps) => {

    const context: InternationalizationContextValue = useInternationalization();

    if (props.builder) {
        return props.builder(context.locale, context.setLocale);
    }

    if (props.children) {
        return props.children(context.locale, context.setLocale);
    }
};
