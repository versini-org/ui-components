# Changelog

## [3.0.0](https://github.com/versini-org/ui-components/compare/ui-styles-v2.1.1...ui-styles-v3.0.0) (2025-01-03)


### ⚠ BREAKING CHANGES

* **System:** removing spacing prop in favor of Tailwind classes ([#836](https://github.com/versini-org/ui-components/issues/836))
* **ToggleGroup:** removing spacing prop in favor of Tailwind classes ([#835](https://github.com/versini-org/ui-components/issues/835))
* **Toggle:** removing spacing prop in favor of Tailwind classes ([#834](https://github.com/versini-org/ui-components/issues/834))
* **TextInput:** removing spacing prop in favor of Tailwind classes ([#833](https://github.com/versini-org/ui-components/issues/833))
* **TextArea:** removing spacing prop in favor of Tailwind classes ([#832](https://github.com/versini-org/ui-components/issues/832))
* **Table:** removing spacing prop in favor of Tailwind classes ([#831](https://github.com/versini-org/ui-components/issues/831))
* **Spinner:** removing spacing prop in favor of Tailwind classes ([#830](https://github.com/versini-org/ui-components/issues/830))
* **Pill:** removing spacing prop in favor of Tailwind classes ([#829](https://github.com/versini-org/ui-components/issues/829))
* **Menu:** removing spacing prop in favor of Tailwind classes ([#826](https://github.com/versini-org/ui-components/issues/826))
* **Main:** removing spacing prop in favor of Tailwind classes ([#825](https://github.com/versini-org/ui-components/issues/825))
* **Header:** removing spacing prop in favor of Tailwind classes ([#823](https://github.com/versini-org/ui-components/issues/823))
* **Footer:** removing spacing prop in favor of Tailwind classes ([#822](https://github.com/versini-org/ui-components/issues/822))
* **Card:** removing spacing prop in favor of Tailwind classes ([#821](https://github.com/versini-org/ui-components/issues/821))
* **Bubble:** removing spacing prop in favor of Tailwind classes ([#820](https://github.com/versini-org/ui-components/issues/820))
* **Button:** spacing prop is deprecated - use className and Tailwind margins instead.

### Features

* adding support for React 19.x ([#768](https://github.com/versini-org/ui-components/issues/768)) ([7a64fd7](https://github.com/versini-org/ui-components/commit/7a64fd7e2b7e0875a2b0f86753c3bef9af9d961d))
* adding support for spacing prop for Flexgrid and ThemeProvider ([#530](https://github.com/versini-org/ui-components/issues/530)) ([9822ede](https://github.com/versini-org/ui-components/commit/9822ede6f387450c345bf6d94b566b65739f916a))
* adding ToggleGroup component ([#716](https://github.com/versini-org/ui-components/issues/716)) ([a794f97](https://github.com/versini-org/ui-components/commit/a794f971b2597435e86222a2cfbd39306f4d49f5))
* adding ui-modal and ui-modal-types ([#796](https://github.com/versini-org/ui-components/issues/796)) ([27e6ac4](https://github.com/versini-org/ui-components/commit/27e6ac450ada1a3a895076678a7dfe17e31331eb))
* adding ui-svgicon and ui-svgicon-types ([#794](https://github.com/versini-org/ui-components/issues/794)) ([d920ae5](https://github.com/versini-org/ui-components/commit/d920ae5900798f67f7acc14bd135195cca63e29a))
* applying global accent color in dark mode ([#472](https://github.com/versini-org/ui-components/issues/472)) ([4e3b13c](https://github.com/versini-org/ui-components/commit/4e3b13ca94a5df66ab66a7a6afd0ff7b550d75d3))
* **Button:** adding prop variant to support different styles ([#424](https://github.com/versini-org/ui-components/issues/424)) ([49eaf4f](https://github.com/versini-org/ui-components/commit/49eaf4f6ca7c267a210d0ab1ef377366605e1e4c))
* **Button:** adding variant "selected" ([#816](https://github.com/versini-org/ui-components/issues/816)) ([a394733](https://github.com/versini-org/ui-components/commit/a394733263422bdbe41df57b9391bfa781863252))
* **TextArea:** adding support for leftElement ([#864](https://github.com/versini-org/ui-components/issues/864)) ([553af24](https://github.com/versini-org/ui-components/commit/553af2450f0f260f3238aa6064af2d45a6d91d6b))
* **Truncate:** adding Truncate component ([#687](https://github.com/versini-org/ui-components/issues/687)) ([882b63b](https://github.com/versini-org/ui-components/commit/882b63b27dba050b5dbac1d2d82c949acfa5b830))
* **ui-components:** adding colors to Header component ([#468](https://github.com/versini-org/ui-components/issues/468)) ([23f978a](https://github.com/versini-org/ui-components/commit/23f978af7e147003d7daef0bb7e38d7d42255624))
* **ui-styles:** renaming ui-plugins package into ui-styles ([#397](https://github.com/versini-org/ui-components/issues/397)) ([90f0343](https://github.com/versini-org/ui-components/commit/90f0343fd8858a4a28a14b6b412ee48484c4ae14))
* **ui-styles:** update tokens for table head ([#445](https://github.com/versini-org/ui-components/issues/445)) ([9599e65](https://github.com/versini-org/ui-components/commit/9599e65a3bbf8b10957492acd608e99b8b27c425))


### Bug Fixes

* adding missing liveregion component to ui-styles ([#791](https://github.com/versini-org/ui-components/issues/791)) ([abdfa89](https://github.com/versini-org/ui-components/commit/abdfa89a0749d78f531d260c8c08e4b0da6bf34d))
* better color contrast for right Bubble ([#488](https://github.com/versini-org/ui-components/issues/488)) ([cccc4df](https://github.com/versini-org/ui-components/commit/cccc4dfe8b0e9e0299dc50a51ada02eb4a0e18b0))
* better error styles for TextInput and TextArea ([#527](https://github.com/versini-org/ui-components/issues/527)) ([d0952ab](https://github.com/versini-org/ui-components/commit/d0952ab8de74f63adb2d4e67d5d123789788d67a))
* **Bubble:** removing spacing prop in favor of Tailwind classes ([#820](https://github.com/versini-org/ui-components/issues/820)) ([e6ac6ec](https://github.com/versini-org/ui-components/commit/e6ac6ec0025f65c5e2ad44de3bece61fe18ea33f))
* bump dependencies to latest ([#575](https://github.com/versini-org/ui-components/issues/575)) ([90cf804](https://github.com/versini-org/ui-components/commit/90cf804bb4d9c384a15d4bb1bf6913d11a4338c8))
* bump dependencies to latest ([#598](https://github.com/versini-org/ui-components/issues/598)) ([71c858d](https://github.com/versini-org/ui-components/commit/71c858df83cb67c22353ddb894546a725d71e382))
* bump dependencies to latest ([#637](https://github.com/versini-org/ui-components/issues/637)) ([428b40e](https://github.com/versini-org/ui-components/commit/428b40e3d7d872b786cb5216bbade31dcc1c7d2b))
* bump non-breaking dependencies ([#539](https://github.com/versini-org/ui-components/issues/539)) ([2826c44](https://github.com/versini-org/ui-components/commit/2826c44c5a55bf45b97072a1865964c30d05a302))
* bump non-breaking dependencies to latest ([#606](https://github.com/versini-org/ui-components/issues/606)) ([0afdec5](https://github.com/versini-org/ui-components/commit/0afdec5518caf5b5f07845c9f916dc229d517018))
* bump non-breaking dependencies to latest ([#615](https://github.com/versini-org/ui-components/issues/615)) ([57c9f00](https://github.com/versini-org/ui-components/commit/57c9f00a23e081196b4925b38bd0097c4ba6e093))
* bump non-breaking dependencies to latest ([#692](https://github.com/versini-org/ui-components/issues/692)) ([2300b7c](https://github.com/versini-org/ui-components/commit/2300b7c563ce6d5ad704b93ea7cc63ba9b8c6993))
* bump non-breaking dependencies to latest ([#743](https://github.com/versini-org/ui-components/issues/743)) ([1438577](https://github.com/versini-org/ui-components/commit/1438577b4de57d063e84872ba8c4d5687b3def13))
* bump tailwind dependencies to latest ([#454](https://github.com/versini-org/ui-components/issues/454)) ([8c06361](https://github.com/versini-org/ui-components/commit/8c0636164432be100410778d810ec6c3a6613c9b))
* **Button:** first pass at removing spacing prop from all components ([#817](https://github.com/versini-org/ui-components/issues/817)) ([0d79337](https://github.com/versini-org/ui-components/commit/0d79337ead5a5e846b8d09130e5dc9de92bf8ef5))
* **Button:** lighter "selected" variant + minor refactor ([#874](https://github.com/versini-org/ui-components/issues/874)) ([c8ab416](https://github.com/versini-org/ui-components/commit/c8ab4169f067e65721ef68c42039951274bec114))
* **Card:** removing spacing prop in favor of Tailwind classes ([#821](https://github.com/versini-org/ui-components/issues/821)) ([e131469](https://github.com/versini-org/ui-components/commit/e131469e73232e980020805069b264fbcc325619))
* cleanup dependency graph a little ([#670](https://github.com/versini-org/ui-components/issues/670)) ([cb61411](https://github.com/versini-org/ui-components/commit/cb61411b986c03e050a8d5c36f51d2945d90dd9f))
* **Footer:** removing spacing prop in favor of Tailwind classes ([#822](https://github.com/versini-org/ui-components/issues/822)) ([077c1fb](https://github.com/versini-org/ui-components/commit/077c1fb952ceba199ab8770700ffa2e3f6143d93))
* **Header:** removing spacing prop in favor of Tailwind classes ([#823](https://github.com/versini-org/ui-components/issues/823)) ([2b9f640](https://github.com/versini-org/ui-components/commit/2b9f6408e4af290ec23dd9173092e03b60678568))
* **Main:** removing spacing prop in favor of Tailwind classes ([#825](https://github.com/versini-org/ui-components/issues/825)) ([d6b8447](https://github.com/versini-org/ui-components/commit/d6b8447ea8f809849b0539f8fc76f23a3bf5475b))
* **Menu:** removing spacing prop in favor of Tailwind classes ([#826](https://github.com/versini-org/ui-components/issues/826)) ([f6bb4bb](https://github.com/versini-org/ui-components/commit/f6bb4bb70bb34b65184be570b877db2f3dc5a616))
* **Modal:** removing spacing build in favor of Tailwind classes ([#827](https://github.com/versini-org/ui-components/issues/827)) ([8ee9c90](https://github.com/versini-org/ui-components/commit/8ee9c90eb576e37cfdcc698cc0684495711cbcce))
* **Panel:** removing spacing build in favor of Tailwind classes ([#828](https://github.com/versini-org/ui-components/issues/828)) ([25dce37](https://github.com/versini-org/ui-components/commit/25dce3738d06199d3315c9137bd549d0018649e8))
* **Pill:** removing spacing prop in favor of Tailwind classes ([#829](https://github.com/versini-org/ui-components/issues/829)) ([df3ad6a](https://github.com/versini-org/ui-components/commit/df3ad6a92da93ef51ebddf6c9551548910577335))
* removing spacing component ([#837](https://github.com/versini-org/ui-components/issues/837)) ([db2636f](https://github.com/versini-org/ui-components/commit/db2636f9cb2a000341ce04856f311f59110c7ea8))
* **Spinner:** removing spacing prop in favor of Tailwind classes ([#830](https://github.com/versini-org/ui-components/issues/830)) ([ffe1486](https://github.com/versini-org/ui-components/commit/ffe1486f0d8f8ec6d0e4a029402e2b3b1b88f404))
* **System:** removing spacing prop in favor of Tailwind classes ([#836](https://github.com/versini-org/ui-components/issues/836)) ([0586551](https://github.com/versini-org/ui-components/commit/0586551250cebf0486a8f3b8cdf51d3a139d978d))
* **Table:** removing spacing prop in favor of Tailwind classes ([#831](https://github.com/versini-org/ui-components/issues/831)) ([88ccc05](https://github.com/versini-org/ui-components/commit/88ccc05eecbdc564238982a0e1824b2560876f25))
* **TextArea:** removing spacing prop in favor of Tailwind classes ([#832](https://github.com/versini-org/ui-components/issues/832)) ([ee99870](https://github.com/versini-org/ui-components/commit/ee9987040f28522fbd1dc13900eaa7ccd3459959))
* **TextInput:** misaligned label and helper text at different sizes ([#695](https://github.com/versini-org/ui-components/issues/695)) ([9ff6fa1](https://github.com/versini-org/ui-components/commit/9ff6fa1345f386dda77a955e4c0883186feb5350))
* **TextInput:** removing spacing prop in favor of Tailwind classes ([#833](https://github.com/versini-org/ui-components/issues/833)) ([6f28910](https://github.com/versini-org/ui-components/commit/6f2891013e1a81f7048a0a01a04be9409e07339c))
* **ToggleGroup:** removing spacing prop in favor of Tailwind classes ([#835](https://github.com/versini-org/ui-components/issues/835)) ([4fb7406](https://github.com/versini-org/ui-components/commit/4fb74061afe9ea50832eba5820dd728339ebe031))
* **Toggle:** removing spacing prop in favor of Tailwind classes ([#834](https://github.com/versini-org/ui-components/issues/834)) ([d9a76f8](https://github.com/versini-org/ui-components/commit/d9a76f80e320880e51bee4c14e60135a97f44053))
* **Typography:** pre background color is too light ([#544](https://github.com/versini-org/ui-components/issues/544)) ([8f2ae2d](https://github.com/versini-org/ui-components/commit/8f2ae2dd7304524755f1998d08fa8e0ca54cad4e))
* **ui-styles:** adding as much test coverage as possible ([#420](https://github.com/versini-org/ui-components/issues/420)) ([e9b9d5b](https://github.com/versini-org/ui-components/commit/e9b9d5b74ceab21a57199c4098320ba4323980e6))
* **ui-styles:** h1 to h6 should not be bold ([#426](https://github.com/versini-org/ui-components/issues/426)) ([ce0e593](https://github.com/versini-org/ui-components/commit/ce0e5934639d45ba86a83edbb42da52c39c9fc38))
* **ui-styles:** internal margins are impacting Header styles ([#484](https://github.com/versini-org/ui-components/issues/484)) ([76a19e1](https://github.com/versini-org/ui-components/commit/76a19e194b98dc796074fce62a3b3284694bcb5e))
* **ui-styles:** missing CSS in all new independent packages in prod ([#680](https://github.com/versini-org/ui-components/issues/680)) ([cc0d971](https://github.com/versini-org/ui-components/commit/cc0d9718f7ac461a3455fcd3cd5049a37fee1bf6))
* **ui-styles:** TextArea helper text is misaligned ([#518](https://github.com/versini-org/ui-components/issues/518)) ([71bea12](https://github.com/versini-org/ui-components/commit/71bea12aa81977ee9849c7183373021e75b10664))

## [2.1.1](https://github.com/versini-org/ui-components/compare/ui-styles-v2.1.0...ui-styles-v2.1.1) (2025-01-02)


### Bug Fixes

* **Button:** lighter "selected" variant + minor refactor ([#874](https://github.com/versini-org/ui-components/issues/874)) ([c8ab416](https://github.com/versini-org/ui-components/commit/c8ab4169f067e65721ef68c42039951274bec114))

## [2.1.0](https://github.com/versini-org/ui-components/compare/ui-styles-v2.0.0...ui-styles-v2.1.0) (2024-12-31)


### Features

* **TextArea:** adding support for leftElement ([#864](https://github.com/versini-org/ui-components/issues/864)) ([553af24](https://github.com/versini-org/ui-components/commit/553af2450f0f260f3238aa6064af2d45a6d91d6b))

## [2.0.0](https://github.com/versini-org/ui-components/compare/ui-styles-v1.15.0...ui-styles-v2.0.0) (2024-12-29)


### ⚠ BREAKING CHANGES

* **System:** removing spacing prop in favor of Tailwind classes ([#836](https://github.com/versini-org/ui-components/issues/836))
* **ToggleGroup:** removing spacing prop in favor of Tailwind classes ([#835](https://github.com/versini-org/ui-components/issues/835))
* **Toggle:** removing spacing prop in favor of Tailwind classes ([#834](https://github.com/versini-org/ui-components/issues/834))
* **TextInput:** removing spacing prop in favor of Tailwind classes ([#833](https://github.com/versini-org/ui-components/issues/833))
* **TextArea:** removing spacing prop in favor of Tailwind classes ([#832](https://github.com/versini-org/ui-components/issues/832))
* **Table:** removing spacing prop in favor of Tailwind classes ([#831](https://github.com/versini-org/ui-components/issues/831))
* **Spinner:** removing spacing prop in favor of Tailwind classes ([#830](https://github.com/versini-org/ui-components/issues/830))
* **Pill:** removing spacing prop in favor of Tailwind classes ([#829](https://github.com/versini-org/ui-components/issues/829))
* **Menu:** removing spacing prop in favor of Tailwind classes ([#826](https://github.com/versini-org/ui-components/issues/826))
* **Main:** removing spacing prop in favor of Tailwind classes ([#825](https://github.com/versini-org/ui-components/issues/825))
* **Header:** removing spacing prop in favor of Tailwind classes ([#823](https://github.com/versini-org/ui-components/issues/823))
* **Footer:** removing spacing prop in favor of Tailwind classes ([#822](https://github.com/versini-org/ui-components/issues/822))
* **Card:** removing spacing prop in favor of Tailwind classes ([#821](https://github.com/versini-org/ui-components/issues/821))
* **Bubble:** removing spacing prop in favor of Tailwind classes ([#820](https://github.com/versini-org/ui-components/issues/820))
* **Button:** spacing prop is deprecated - use className and Tailwind margins instead.

### Bug Fixes

* **Bubble:** removing spacing prop in favor of Tailwind classes ([#820](https://github.com/versini-org/ui-components/issues/820)) ([e6ac6ec](https://github.com/versini-org/ui-components/commit/e6ac6ec0025f65c5e2ad44de3bece61fe18ea33f))
* **Button:** first pass at removing spacing prop from all components ([#817](https://github.com/versini-org/ui-components/issues/817)) ([0d79337](https://github.com/versini-org/ui-components/commit/0d79337ead5a5e846b8d09130e5dc9de92bf8ef5))
* **Card:** removing spacing prop in favor of Tailwind classes ([#821](https://github.com/versini-org/ui-components/issues/821)) ([e131469](https://github.com/versini-org/ui-components/commit/e131469e73232e980020805069b264fbcc325619))
* **Footer:** removing spacing prop in favor of Tailwind classes ([#822](https://github.com/versini-org/ui-components/issues/822)) ([077c1fb](https://github.com/versini-org/ui-components/commit/077c1fb952ceba199ab8770700ffa2e3f6143d93))
* **Header:** removing spacing prop in favor of Tailwind classes ([#823](https://github.com/versini-org/ui-components/issues/823)) ([2b9f640](https://github.com/versini-org/ui-components/commit/2b9f6408e4af290ec23dd9173092e03b60678568))
* **Main:** removing spacing prop in favor of Tailwind classes ([#825](https://github.com/versini-org/ui-components/issues/825)) ([d6b8447](https://github.com/versini-org/ui-components/commit/d6b8447ea8f809849b0539f8fc76f23a3bf5475b))
* **Menu:** removing spacing prop in favor of Tailwind classes ([#826](https://github.com/versini-org/ui-components/issues/826)) ([f6bb4bb](https://github.com/versini-org/ui-components/commit/f6bb4bb70bb34b65184be570b877db2f3dc5a616))
* **Modal:** removing spacing build in favor of Tailwind classes ([#827](https://github.com/versini-org/ui-components/issues/827)) ([8ee9c90](https://github.com/versini-org/ui-components/commit/8ee9c90eb576e37cfdcc698cc0684495711cbcce))
* **Panel:** removing spacing build in favor of Tailwind classes ([#828](https://github.com/versini-org/ui-components/issues/828)) ([25dce37](https://github.com/versini-org/ui-components/commit/25dce3738d06199d3315c9137bd549d0018649e8))
* **Pill:** removing spacing prop in favor of Tailwind classes ([#829](https://github.com/versini-org/ui-components/issues/829)) ([df3ad6a](https://github.com/versini-org/ui-components/commit/df3ad6a92da93ef51ebddf6c9551548910577335))
* removing spacing component ([#837](https://github.com/versini-org/ui-components/issues/837)) ([db2636f](https://github.com/versini-org/ui-components/commit/db2636f9cb2a000341ce04856f311f59110c7ea8))
* **Spinner:** removing spacing prop in favor of Tailwind classes ([#830](https://github.com/versini-org/ui-components/issues/830)) ([ffe1486](https://github.com/versini-org/ui-components/commit/ffe1486f0d8f8ec6d0e4a029402e2b3b1b88f404))
* **System:** removing spacing prop in favor of Tailwind classes ([#836](https://github.com/versini-org/ui-components/issues/836)) ([0586551](https://github.com/versini-org/ui-components/commit/0586551250cebf0486a8f3b8cdf51d3a139d978d))
* **Table:** removing spacing prop in favor of Tailwind classes ([#831](https://github.com/versini-org/ui-components/issues/831)) ([88ccc05](https://github.com/versini-org/ui-components/commit/88ccc05eecbdc564238982a0e1824b2560876f25))
* **TextArea:** removing spacing prop in favor of Tailwind classes ([#832](https://github.com/versini-org/ui-components/issues/832)) ([ee99870](https://github.com/versini-org/ui-components/commit/ee9987040f28522fbd1dc13900eaa7ccd3459959))
* **TextInput:** removing spacing prop in favor of Tailwind classes ([#833](https://github.com/versini-org/ui-components/issues/833)) ([6f28910](https://github.com/versini-org/ui-components/commit/6f2891013e1a81f7048a0a01a04be9409e07339c))
* **ToggleGroup:** removing spacing prop in favor of Tailwind classes ([#835](https://github.com/versini-org/ui-components/issues/835)) ([4fb7406](https://github.com/versini-org/ui-components/commit/4fb74061afe9ea50832eba5820dd728339ebe031))
* **Toggle:** removing spacing prop in favor of Tailwind classes ([#834](https://github.com/versini-org/ui-components/issues/834)) ([d9a76f8](https://github.com/versini-org/ui-components/commit/d9a76f80e320880e51bee4c14e60135a97f44053))

## [1.15.0](https://github.com/versini-org/ui-components/compare/ui-styles-v1.14.0...ui-styles-v1.15.0) (2024-12-28)


### Features

* **Button:** adding variant "selected" ([#816](https://github.com/versini-org/ui-components/issues/816)) ([a394733](https://github.com/versini-org/ui-components/commit/a394733263422bdbe41df57b9391bfa781863252))

## [1.14.0](https://github.com/versini-org/ui-components/compare/ui-styles-v1.13.0...ui-styles-v1.14.0) (2024-12-25)


### Features

* adding ui-modal and ui-modal-types ([#796](https://github.com/versini-org/ui-components/issues/796)) ([27e6ac4](https://github.com/versini-org/ui-components/commit/27e6ac450ada1a3a895076678a7dfe17e31331eb))

## [1.13.0](https://github.com/versini-org/ui-components/compare/ui-styles-v1.12.1...ui-styles-v1.13.0) (2024-12-25)


### Features

* adding ui-svgicon and ui-svgicon-types ([#794](https://github.com/versini-org/ui-components/issues/794)) ([d920ae5](https://github.com/versini-org/ui-components/commit/d920ae5900798f67f7acc14bd135195cca63e29a))

## [1.12.1](https://github.com/versini-org/ui-components/compare/ui-styles-v1.12.0...ui-styles-v1.12.1) (2024-12-25)


### Bug Fixes

* adding missing liveregion component to ui-styles ([#791](https://github.com/versini-org/ui-components/issues/791)) ([abdfa89](https://github.com/versini-org/ui-components/commit/abdfa89a0749d78f531d260c8c08e4b0da6bf34d))

## [1.12.0](https://github.com/versini-org/ui-components/compare/ui-styles-v1.11.1...ui-styles-v1.12.0) (2024-12-18)


### Features

* adding support for React 19.x ([#768](https://github.com/versini-org/ui-components/issues/768)) ([7a64fd7](https://github.com/versini-org/ui-components/commit/7a64fd7e2b7e0875a2b0f86753c3bef9af9d961d))

## [1.11.1](https://github.com/versini-org/ui-components/compare/ui-styles-v1.11.0...ui-styles-v1.11.1) (2024-11-19)


### Bug Fixes

* bump non-breaking dependencies to latest ([#743](https://github.com/versini-org/ui-components/issues/743)) ([1438577](https://github.com/versini-org/ui-components/commit/1438577b4de57d063e84872ba8c4d5687b3def13))

## [1.11.0](https://github.com/versini-org/ui-components/compare/ui-styles-v1.10.2...ui-styles-v1.11.0) (2024-10-04)


### Features

* adding ToggleGroup component ([#716](https://github.com/versini-org/ui-components/issues/716)) ([a794f97](https://github.com/versini-org/ui-components/commit/a794f971b2597435e86222a2cfbd39306f4d49f5))

## [1.10.2](https://github.com/versini-org/ui-components/compare/ui-styles-v1.10.1...ui-styles-v1.10.2) (2024-09-26)


### Bug Fixes

* **TextInput:** misaligned label and helper text at different sizes ([#695](https://github.com/versini-org/ui-components/issues/695)) ([9ff6fa1](https://github.com/versini-org/ui-components/commit/9ff6fa1345f386dda77a955e4c0883186feb5350))

## [1.10.1](https://github.com/versini-org/ui-components/compare/ui-styles-v1.10.0...ui-styles-v1.10.1) (2024-09-24)


### Bug Fixes

* bump non-breaking dependencies to latest ([#692](https://github.com/versini-org/ui-components/issues/692)) ([2300b7c](https://github.com/versini-org/ui-components/commit/2300b7c563ce6d5ad704b93ea7cc63ba9b8c6993))

## [1.10.0](https://github.com/versini-org/ui-components/compare/ui-styles-v1.9.9...ui-styles-v1.10.0) (2024-09-21)


### Features

* **Truncate:** adding Truncate component ([#687](https://github.com/versini-org/ui-components/issues/687)) ([882b63b](https://github.com/versini-org/ui-components/commit/882b63b27dba050b5dbac1d2d82c949acfa5b830))

## [1.9.9](https://github.com/versini-org/ui-components/compare/ui-styles-v1.9.8...ui-styles-v1.9.9) (2024-09-18)


### Bug Fixes

* **ui-styles:** missing CSS in all new independent packages in prod ([#680](https://github.com/versini-org/ui-components/issues/680)) ([cc0d971](https://github.com/versini-org/ui-components/commit/cc0d9718f7ac461a3455fcd3cd5049a37fee1bf6))

## [1.9.8](https://github.com/versini-org/ui-components/compare/ui-styles-v1.9.7...ui-styles-v1.9.8) (2024-09-17)


### Bug Fixes

* cleanup dependency graph a little ([#670](https://github.com/versini-org/ui-components/issues/670)) ([cb61411](https://github.com/versini-org/ui-components/commit/cb61411b986c03e050a8d5c36f51d2945d90dd9f))

## [1.9.7](https://github.com/versini-org/ui-components/compare/ui-styles-v1.9.6...ui-styles-v1.9.7) (2024-09-15)


### Bug Fixes

* bump dependencies to latest ([#637](https://github.com/versini-org/ui-components/issues/637)) ([428b40e](https://github.com/versini-org/ui-components/commit/428b40e3d7d872b786cb5216bbade31dcc1c7d2b))

## [1.9.6](https://github.com/versini-org/ui-components/compare/ui-styles-v1.9.5...ui-styles-v1.9.6) (2024-09-05)


### Bug Fixes

* bump non-breaking dependencies to latest ([#615](https://github.com/versini-org/ui-components/issues/615)) ([57c9f00](https://github.com/versini-org/ui-components/commit/57c9f00a23e081196b4925b38bd0097c4ba6e093))

## [1.9.5](https://github.com/aversini/ui-components/compare/ui-styles-v1.9.4...ui-styles-v1.9.5) (2024-08-25)


### Bug Fixes

* bump non-breaking dependencies to latest ([#606](https://github.com/aversini/ui-components/issues/606)) ([0afdec5](https://github.com/aversini/ui-components/commit/0afdec5518caf5b5f07845c9f916dc229d517018))

## [1.9.4](https://github.com/aversini/ui-components/compare/ui-styles-v1.9.3...ui-styles-v1.9.4) (2024-08-07)


### Bug Fixes

* bump dependencies to latest ([#598](https://github.com/aversini/ui-components/issues/598)) ([71c858d](https://github.com/aversini/ui-components/commit/71c858df83cb67c22353ddb894546a725d71e382))

## [1.9.3](https://github.com/aversini/ui-components/compare/ui-styles-v1.9.2...ui-styles-v1.9.3) (2024-07-05)


### Bug Fixes

* bump dependencies to latest ([#575](https://github.com/aversini/ui-components/issues/575)) ([90cf804](https://github.com/aversini/ui-components/commit/90cf804bb4d9c384a15d4bb1bf6913d11a4338c8))

## [1.9.2](https://github.com/aversini/ui-components/compare/ui-styles-v1.9.1...ui-styles-v1.9.2) (2024-05-12)


### Bug Fixes

* **Typography:** pre background color is too light ([#544](https://github.com/aversini/ui-components/issues/544)) ([8f2ae2d](https://github.com/aversini/ui-components/commit/8f2ae2dd7304524755f1998d08fa8e0ca54cad4e))

## [1.9.1](https://github.com/aversini/ui-components/compare/ui-styles-v1.9.0...ui-styles-v1.9.1) (2024-04-28)


### Bug Fixes

* bump non-breaking dependencies ([#539](https://github.com/aversini/ui-components/issues/539)) ([2826c44](https://github.com/aversini/ui-components/commit/2826c44c5a55bf45b97072a1865964c30d05a302))

## [1.9.0](https://github.com/aversini/ui-components/compare/ui-styles-v1.8.4...ui-styles-v1.9.0) (2024-04-23)


### Features

* adding support for spacing prop for Flexgrid and ThemeProvider ([#530](https://github.com/aversini/ui-components/issues/530)) ([9822ede](https://github.com/aversini/ui-components/commit/9822ede6f387450c345bf6d94b566b65739f916a))

## [1.8.4](https://github.com/aversini/ui-components/compare/ui-styles-v1.8.3...ui-styles-v1.8.4) (2024-04-23)


### Bug Fixes

* better error styles for TextInput and TextArea ([#527](https://github.com/aversini/ui-components/issues/527)) ([d0952ab](https://github.com/aversini/ui-components/commit/d0952ab8de74f63adb2d4e67d5d123789788d67a))

## [1.8.3](https://github.com/aversini/ui-components/compare/ui-styles-v1.8.2...ui-styles-v1.8.3) (2024-04-18)


### Bug Fixes

* **ui-styles:** TextArea helper text is misaligned ([#518](https://github.com/aversini/ui-components/issues/518)) ([71bea12](https://github.com/aversini/ui-components/commit/71bea12aa81977ee9849c7183373021e75b10664))

## [1.8.2](https://github.com/aversini/ui-components/compare/ui-styles-v1.8.1...ui-styles-v1.8.2) (2024-04-13)


### Bug Fixes

* better color contrast for right Bubble ([#488](https://github.com/aversini/ui-components/issues/488)) ([cccc4df](https://github.com/aversini/ui-components/commit/cccc4dfe8b0e9e0299dc50a51ada02eb4a0e18b0))

## [1.8.1](https://github.com/aversini/ui-components/compare/ui-styles-v1.8.0...ui-styles-v1.8.1) (2024-04-13)


### Bug Fixes

* **ui-styles:** internal margins are impacting Header styles ([#484](https://github.com/aversini/ui-components/issues/484)) ([76a19e1](https://github.com/aversini/ui-components/commit/76a19e194b98dc796074fce62a3b3284694bcb5e))

## [1.8.0](https://github.com/aversini/ui-components/compare/ui-styles-v1.7.0...ui-styles-v1.8.0) (2024-04-07)


### Features

* applying global accent color in dark mode ([#472](https://github.com/aversini/ui-components/issues/472)) ([4e3b13c](https://github.com/aversini/ui-components/commit/4e3b13ca94a5df66ab66a7a6afd0ff7b550d75d3))

## [1.7.0](https://github.com/aversini/ui-components/compare/ui-styles-v1.6.1...ui-styles-v1.7.0) (2024-04-07)


### Features

* **ui-components:** adding colors to Header component ([#468](https://github.com/aversini/ui-components/issues/468)) ([23f978a](https://github.com/aversini/ui-components/commit/23f978af7e147003d7daef0bb7e38d7d42255624))

## [1.6.1](https://github.com/aversini/ui-components/compare/ui-styles-v1.6.0...ui-styles-v1.6.1) (2024-03-30)


### Bug Fixes

* bump tailwind dependencies to latest ([#454](https://github.com/aversini/ui-components/issues/454)) ([8c06361](https://github.com/aversini/ui-components/commit/8c0636164432be100410778d810ec6c3a6613c9b))

## [1.6.0](https://github.com/aversini/ui-components/compare/ui-styles-v1.5.1...ui-styles-v1.6.0) (2024-03-20)


### Features

* **ui-styles:** update tokens for table head ([#445](https://github.com/aversini/ui-components/issues/445)) ([9599e65](https://github.com/aversini/ui-components/commit/9599e65a3bbf8b10957492acd608e99b8b27c425))

## [1.5.1](https://github.com/aversini/ui-components/compare/ui-styles-v1.5.0...ui-styles-v1.5.1) (2024-03-17)


### Bug Fixes

* **ui-styles:** h1 to h6 should not be bold ([#426](https://github.com/aversini/ui-components/issues/426)) ([ce0e593](https://github.com/aversini/ui-components/commit/ce0e5934639d45ba86a83edbb42da52c39c9fc38))

## [1.5.0](https://github.com/aversini/ui-components/compare/ui-styles-v1.4.1...ui-styles-v1.5.0) (2024-03-17)


### Features

* **Button:** adding prop variant to support different styles ([#424](https://github.com/aversini/ui-components/issues/424)) ([49eaf4f](https://github.com/aversini/ui-components/commit/49eaf4f6ca7c267a210d0ab1ef377366605e1e4c))

## [1.4.1](https://github.com/aversini/ui-components/compare/ui-styles-v1.4.0...ui-styles-v1.4.1) (2024-03-16)


### Bug Fixes

* **ui-styles:** adding as much test coverage as possible ([#420](https://github.com/aversini/ui-components/issues/420)) ([e9b9d5b](https://github.com/aversini/ui-components/commit/e9b9d5b74ceab21a57199c4098320ba4323980e6))

## [1.4.0](https://github.com/aversini/ui-components/compare/ui-styles-v1.3.0...ui-styles-v1.4.0) (2024-03-11)


### Features

* **ui-styles:** renaming ui-plugins package into ui-styles ([#397](https://github.com/aversini/ui-components/issues/397)) ([90f0343](https://github.com/aversini/ui-components/commit/90f0343fd8858a4a28a14b6b412ee48484c4ae14))

## [1.3.0](https://github.com/aversini/ui-components/compare/ui-plugins-v1.2.2...ui-plugins-v1.3.0) (2024-03-11)


### Features

* **ui-form:** moving form components to their own package ([#393](https://github.com/aversini/ui-components/issues/393)) ([59a6f42](https://github.com/aversini/ui-components/commit/59a6f42827a6a9b899c816f506a8d8174cf12a2b))

## [1.2.2](https://github.com/aversini/ui-components/compare/ui-plugins-v1.2.1...ui-plugins-v1.2.2) (2024-03-10)


### Bug Fixes

* **ui-icons:** removing redundant dependencies and adding them to the plugin ([#392](https://github.com/aversini/ui-components/issues/392)) ([142b064](https://github.com/aversini/ui-components/commit/142b0641451bf73fc2f982f70c18cbff240deaad))

## [1.2.1](https://github.com/aversini/ui-components/compare/ui-plugins-v1.2.0...ui-plugins-v1.2.1) (2024-03-10)


### Bug Fixes

* **ui-plugins:** missing dynamic margins since last refactor ([#389](https://github.com/aversini/ui-components/issues/389)) ([a0d6973](https://github.com/aversini/ui-components/commit/a0d6973f1011b45b54041d727b34cb8ade08314c))

## [1.2.0](https://github.com/aversini/ui-components/compare/ui-plugins-v1.1.2...ui-plugins-v1.2.0) (2024-03-08)


### Features

* **ui-plugins:** simplifying Tailwind plugin ([#381](https://github.com/aversini/ui-components/issues/381)) ([dafe648](https://github.com/aversini/ui-components/commit/dafe64843e4f4820725b1d8178674dc5a59db98c))

## [1.1.2](https://github.com/aversini/ui-components/compare/ui-plugins-v1.1.1...ui-plugins-v1.1.2) (2024-03-08)


### Bug Fixes

* **ui-plugins:** incorrect node_modules path leading to invalid styles ([#379](https://github.com/aversini/ui-components/issues/379)) ([2dc2b3b](https://github.com/aversini/ui-components/commit/2dc2b3bfaab70347d7a1866e9ca179cc0e66af00))

## [1.1.1](https://github.com/aversini/ui-components/compare/ui-plugins-v1.1.0...ui-plugins-v1.1.1) (2024-03-06)


### Bug Fixes

* **ui-plugins:** adding missing dependencies ([#376](https://github.com/aversini/ui-components/issues/376)) ([859220c](https://github.com/aversini/ui-components/commit/859220c8c509dd40156d560f0da8d48f9f749126))

## [1.1.0](https://github.com/aversini/ui-components/compare/ui-plugins-v1.0.0...ui-plugins-v1.1.0) (2024-03-05)


### Features

* adding mode prop to all components ([#374](https://github.com/aversini/ui-components/issues/374)) ([71e06d8](https://github.com/aversini/ui-components/commit/71e06d8c050be82f56f5b1f798502c9c9ddec9fd))

## 1.0.0 (2024-03-02)


### Features

* adding ui-plugins to better handle TailwindCSS ([#370](https://github.com/aversini/ui-components/issues/370)) ([0666841](https://github.com/aversini/ui-components/commit/0666841ea637d1826ea57e6cfb8a19d9f70174e8))
* tailwind plugin POC ([417297f](https://github.com/aversini/ui-components/commit/417297ff891d593081d9006bed3006f3a3d2cc33))
* tailwind plugin POC ([14d1057](https://github.com/aversini/ui-components/commit/14d105769595034f32c6db75bb50143e4aebbcfa))
