/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Consumer
 */

import { LOCALE, SudooFormat, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "./context";

export type WithLocaleProps = {

    readonly locale: LOCALE;
    readonly setLocale: (newLocale: LOCALE) => void;
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

export type WithInternationalizationProps = WithLocaleProps & {

    readonly format: SudooFormat;
};

export const withInternationalization = <P>(
    Component: React.ComponentType<P>,
    internationalization: SudooInternationalization,
): React.FC<P & WithInternationalizationProps> => {

    return (originalProps: any) => {

        return React.createElement(
            InternationalizationContext.Consumer,
            undefined,
            (value: InternationalizationContextValue) => {

                return React.createElement(Component, {

                    ...originalProps,
                    locale: value.locale,
                    setLocale: value.setLocale,
                    format: internationalization.format(value.locale),
                });
            },
        );
    };
};
