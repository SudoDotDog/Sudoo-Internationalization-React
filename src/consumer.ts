/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Consumer
 */

import { LOCALE } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "./context";

export type WithLocaleProps = {

    readonly locale: LOCALE;
};

export const withLocale = <P>(Component: React.ComponentType<P>): React.FC<P & WithLocaleProps> => {

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
