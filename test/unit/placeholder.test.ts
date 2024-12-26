/**
 * @author WMXPY
 * @namespace InternationalizationReact
 * @description Placeholder
 * @override Unit
 */

import Chance from 'chance';

describe('Given Placeholder', (): void => {

    const chance: Chance.Chance = new Chance('placeholder');

    it('Placeholder', (): void => {

        expect(chance.string()).not.toEqual(chance.string());
    });
});
