# Sudoo-Internationalization-React

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Internationalization-React.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Internationalization-React)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Internationalization-React/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Internationalization-React)
[![npm version](https://badge.fury.io/js/%40sudoo%2Finternationalization-react.svg)](https://badge.fury.io/js/%40sudoo%2Finternationalization-react)
[![downloads](https://img.shields.io/npm/dm/@sudoo/internationalization-react.svg)](https://www.npmjs.com/package/@sudoo/internationalization-react)

React function for Internationalization

## Install

```sh
yarn add @sudoo/internationalization-react
yarn add @sudoo/internationalization # Peer Dependencies
# Or
npm install @sudoo/internationalization-react --save
npm install @sudoo/internationalization --save # Peer Dependencies
```

## Usage

Add Provider

```tsx
import * as React from "react";
import { InternationalizationProvider } from "@sudoo/internationalization-react";

React.hydrate(
    (<InternationalizationProvider>
        <YourComponent />
    </InternationalizationProvider>), 
    document.getElementById("container"),
);
```
