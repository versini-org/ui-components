#!/usr/bin/env node

import { convert } from "css-to-js";

const res = convert(`.myClass { color: 'red' }`);
console.log("==> ", res);
