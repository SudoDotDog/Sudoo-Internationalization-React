/**
 * @author WMXPY
 * @namespace InternationalizationReact_Consumer
 * @description Locale
 */

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "../context";
import { SetLocaleFunction } from "../declare";

export type WithLocaleProps = {

    readonly locale: IETF_LOCALE;
    readonly setLocale: SetLocaleFunction;
};

export const withLocale = <P extends WithLocaleProps>(
    Component: React.ComponentType<P>,
): React.ComponentType<Omit<P, keyof WithLocaleProps>> & {
    WrappedComponent: React.ComponentType<P>;
} => {

    const component: React.ComponentType<Omit<P, keyof WithLocaleProps>> & {
        WrappedComponent: React.ComponentType<P>;
    } = (originalProps: any) => {

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

    component.WrappedComponent = Component;
    return component;
};
