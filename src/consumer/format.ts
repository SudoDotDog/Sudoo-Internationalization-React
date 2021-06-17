/**
 * @author WMXPY
 * @namespace InternationalizationReact_Consumer
 * @description Format
 */

import { SudooFormat, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "../context";
import { WithLocaleProps } from "./locale";

export type WithFormatProps<PK extends string = string> = WithLocaleProps & {

    readonly format: SudooFormat<PK>;
};

export const withFormat = <P extends WithFormatProps<PK>, PK extends string = string>(
    Component: React.ComponentType<P>,
    internationalization: SudooInternationalization<PK>,
): React.ComponentType<Omit<P, keyof WithFormatProps<PK>>> & {
    WrappedComponent: React.ComponentType<P>;
} => {

    const component: React.ComponentType<Omit<P, keyof WithFormatProps<PK>>> & {
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
                    format: internationalization.format(value.locale),
                });
            },
        );
    };

    component.WrappedComponent = Component;
    return component;
};
