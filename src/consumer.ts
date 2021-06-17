/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Consumer
 */

import { LOCALE, PROFILE, SudooFormat, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "./context";
import { SetLocaleFunction } from "./declare";

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

export type WithInternationalizationProps<PF extends PROFILE = any> = WithLocaleProps & {

    readonly format: SudooFormat<PF>;
};

export const withInternationalization = <P, PF extends PROFILE = any>(
    Component: React.ComponentType<P>,
    internationalization: SudooInternationalization<PF>,
): React.FC<P & WithInternationalizationProps<PF>> => {

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
