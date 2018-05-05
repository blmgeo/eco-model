# EcoModel

## Overview
EcoModel is a JavaScript library for modeling ecological systems. There are currently utilities for the following models:
- Species diversity
- Predator-Prey population dynamics
- Non-steady state systems
- Steady-state systems
- Sigmoidal growth

## Development

### Build
Modules are bundled with Webpack and transpiled with Babel. Run `npm run webpack` to watch for changes during development and compile to `dist/`.

### Tests
Tests are written in Jest, and each module corresponds with a test suite named accordingly in `test/`. Tests can be run with `npm test`.