/**
 * @author WMXPY
 * @namespace InternationalizationReact_Consumer
 * @description Locale
 */

import { LOCALE } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "../context";
import { SetLocaleFunction } from "../declare";

export type WithLocaleProps = {

    readonly locale: LOCALE;
    readonly setLocale: SetLocaleFunction;
};

export const withLocale = <P>(
    Component: React.ComponentType<P>,
): React.FC<P & WithLocaleProps> => {

    return (originalProps: any) => {

        return React.createElement(
            InternationalizationContext.Consumer,
            undefined,
            (value: InternationalizationContextValue) => {

                return React.createElement(Component, {

                    ...originalProps,
                    locale: value.locale,
                    setLocale: value.setLocale,
                });
            },
        );
    };
};
