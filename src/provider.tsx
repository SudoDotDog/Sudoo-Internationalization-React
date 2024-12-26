/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Provider
 */

import { getSystemLanguage, LOCALE } from "@sudoo/internationalization";
import * as React from "react";
import { InternationalizationContext } from "./context";
import { InternationalizationManager } from "./manager";

export type InternationalizationProviderProps = {
};

export type InternationalizationProviderStates = {

    readonly locale: LOCALE;
};

export class InternationalizationProvider extends React.Component<InternationalizationProviderProps, InternationalizationProviderStates> {

    public readonly state: InternationalizationProviderStates = {

        locale: getSystemLanguage(),
    };

    public constructor(props: InternationalizationProviderProps) {

        super(props);

        this._updateLocale = this._updateLocale.bind(this);
    }

    public componentDidMount() {

        const manager: InternationalizationManager = InternationalizationManager.getInstance();

        manager.addListener("Internationalization-Provider", this._updateLocale);
    }

    public componentWillUnmount() {

        const manager: InternationalizationManager = InternationalizationManager.getInstance();

        manager.removeListener("Internationalization-Provider");
    }

    public render(): React.ReactNode {

        return (<InternationalizationContext.Provider
            value={{
                locale: this.state.locale,
                setLocale: this._updateLocale,
            }}
        >
            {this.props.children}
        </InternationalizationContext.Provider>);
    }

    private _updateLocale(newLocale: LOCALE): void {

        this.setState({
            locale: newLocale,
        });
    }
}
