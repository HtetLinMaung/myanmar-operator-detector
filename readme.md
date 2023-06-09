# Myanmar Operator Detector

This package is designed to help you detect the mobile operator from a given mobile number in Myanmar.

## Installation

To install this package, you can use npm:

```bash
npm install myanmar-operator-detector
```

Or with yarn:

```bash
yarn add myanmar-operator-detector
```

## Usage

Import the `detectMyanmarMobileOperator` function from the package:

```typescript
import { detectMyanmarMobileOperator } from "myanmar-operator-detector";
```

Then, you can use it like so:

```typescript
let operatorName = detectMyanmarMobileOperator("959404888722");
console.log(operatorName); // Outputs: "MPT"
```

The function will return the name of the mobile operator ("MPT", "Ooredoo", "Telenor", "MECTel", "MyTel") or "Unknown operator" if the number does not match any known patterns.

## Contributing

We appreciate all contributions. If you are interested in contributing, please submit a pull request.
