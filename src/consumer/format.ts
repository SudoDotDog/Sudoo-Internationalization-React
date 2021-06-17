/**
 * @author WMXPY
 * @namespace InternationalizationReact_Consumer
 * @description Format
 */

import { PROFILE, SudooFormat, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext, InternationalizationContextValue } from "../context";
import { WithLocaleProps } from "./locale";

export type WithFormatProps<PF extends PROFILE = any> = WithLocaleProps & {

    readonly format: SudooFormat<PF>;
};

export const withFormat = <P, PF extends PROFILE = any>(
    Component: React.ComponentType<P>,
    internationalization: SudooInternationalization<PF>,
): React.FC<P & WithFormatProps<PF>> => {

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
