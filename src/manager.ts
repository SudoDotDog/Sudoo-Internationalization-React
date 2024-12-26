/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Manager
 */

import { IETF_LOCALE } from "@sudoo/locale";

export type InternationalizationListener = (locale: IETF_LOCALE) => void;

export class InternationalizationManager {

    private static _instance: InternationalizationManager | null = null;

    public static getInstance(): InternationalizationManager {

        if (this._instance) {
            return this._instance;
        }

        this._instance = new InternationalizationManager();
        return this._instance;
    }

    private _listeners: Map<string, InternationalizationListener>;

    private constructor() {

        this._listeners = new Map();
    }

    public get size(): number {

        return this._listeners.size;
    }

    public addListener(key: string, listener: InternationalizationListener): this {

        this._listeners.set(key, listener);
        return this;
    }

    public removeListener(key: string): this {

        this._listeners.delete(key);
        return this;
    }

    public trigger(locale: IETF_LOCALE): this {

        for (const listener of this._listeners.values()) {
            listener(locale);
        }
        return this;
    }
}
