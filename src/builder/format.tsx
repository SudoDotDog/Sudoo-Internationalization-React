/**
 * @author WMXPY
 * @namespace InternationalizationReact_Builder
 * @description Format
 */

import { PROFILE, SudooFormat, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContextValue } from "../context";
import { useInternationalization } from "../hook";

export type FormatBuilderProps<PF extends PROFILE> = {

    readonly internationalization: SudooInternationalization<PF>;

    readonly builder?: (format: SudooFormat<PF>, context: InternationalizationContextValue) => any;
    readonly children?: (format: SudooFormat<PF>, context: InternationalizationContextValue) => any;
};

export const FormatBuilder: React.FC<FormatBuilderProps<PROFILE>> = <PF extends PROFILE = any>(props: FormatBuilderProps<PF>) => {

    const context: InternationalizationContextValue = useInternationalization();
    const format: SudooFormat<PF> = props.internationalization.format(context.locale);

    if (props.builder) {
        return props.builder(format, context);
    }

    if (props.children) {
        return props.children(format, context);
    }

    return null;
};
