/**
 * @author WMXPY
 * @namespace InternationalizationReact_Builder
 * @description Locale
 */

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { InternationalizationContextValue } from "../context";
import { SetLocaleFunction } from "../declare";
import { useInternationalization } from "../hook";

export type LocaleBuilderProps = {

    readonly builder?: (locale: IETF_LOCALE, setLocale: SetLocaleFunction) => any;
    readonly children?: (locale: IETF_LOCALE, setLocale: SetLocaleFunction) => any;
};

export const LocaleBuilder: React.FC<LocaleBuilderProps> = (props: LocaleBuilderProps) => {

    const context: InternationalizationContextValue = useInternationalization();

    if (props.builder) {
        return props.builder(context.locale, context.setLocale);
    }

    if (props.children) {
        return props.children(context.locale, context.setLocale);
    }

    return null;
};
