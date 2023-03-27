# did-jwt-275

Minimum reproducible example of https://github.com/decentralized-identity/did-jwt/issues/275

Note: `polygon-did-resolver` has a dependency on `"ethers": "5.4.7"`, exact version. This is not specified anywhere, but earlier and later versions cause the resolution to fail.

How to run:
* clone this repo in VScode, `npm i`, `Run > Start Debugging`