/**
 * @author WMXPY
 * @namespace InternationalizationReact_Builder
 * @description Format
 */

import { SudooFormat, SudooInternationalization } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContextValue } from "../context";
import { useInternationalization } from "../hook";

export type FormatBuilderProps<PK extends string = string> = {

    readonly internationalization: SudooInternationalization<PK>;

    readonly builder?: (format: SudooFormat<PK>, context: InternationalizationContextValue) => any;
    readonly children?: (format: SudooFormat<PK>, context: InternationalizationContextValue) => any;
};

export const FormatBuilder: React.FC<FormatBuilderProps> = <PK extends string = string>(props: FormatBuilderProps<PK>) => {

    const context: InternationalizationContextValue = useInternationalization();
    const format: SudooFormat<PK> = props.internationalization.format(context.locale);

    if (props.builder) {
        return props.builder(format, context);
    }

    if (props.children) {
        return props.children(format, context);
    }

    return null;
};
