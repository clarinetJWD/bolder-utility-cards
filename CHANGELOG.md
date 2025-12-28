# Changelog

## [1.4.2](https://github.com/clarinetJWD/bolder-utility-cards/compare/v1.4.1...v1.4.2) (2025-12-28)


### Bug Fixes

* Fixes an issue where container cards may disappear on slower devices. ([72cea9c](https://github.com/clarinetJWD/bolder-utility-cards/commit/72cea9c86dd3ec5464bf0c9d8156dcec7d51748c))
* Fixes an issue with the container card child card tabs not being interactive on newer versions of Home Assistant ([72cea9c](https://github.com/clarinetJWD/bolder-utility-cards/commit/72cea9c86dd3ec5464bf0c9d8156dcec7d51748c))

## [1.4.1](https://github.com/clarinetJWD/bolder-utility-cards/compare/v1.4.0...v1.4.1) (2025-05-14)


### Bug Fixes

* Fixed Container Card editor support in Home Assistant 2025.2 ([be34bf8](https://github.com/clarinetJWD/bolder-utility-cards/commit/be34bf8fac427007a13726b95924f84c85d02be1))

## [1.4.0](https://github.com/clarinetJWD/bolder-utility-cards/compare/v1.3.0...v1.4.0) (2025-04-29)


### Features

* Fully compartmentalized header editor code so that any header updates will be reflected in container card. ([104e7f2](https://github.com/clarinetJWD/bolder-utility-cards/commit/104e7f276c55dee708a0f73f9f457f539caa778a))


### Bug Fixes

* Fixed an issue on container card where header text variables were not being applied ([104e7f2](https://github.com/clarinetJWD/bolder-utility-cards/commit/104e7f276c55dee708a0f73f9f457f539caa778a))
* Fixed an issue where styles were not being applied to header card when setting from other cards. ([104e7f2](https://github.com/clarinetJWD/bolder-utility-cards/commit/104e7f276c55dee708a0f73f9f457f539caa778a))
* Reduced default size of header icon on header card. ([104e7f2](https://github.com/clarinetJWD/bolder-utility-cards/commit/104e7f276c55dee708a0f73f9f457f539caa778a))

## [1.3.0](https://github.com/clarinetJWD/bolder-utility-cards/compare/v1.2.0...v1.3.0) (2025-04-28)


### Features

* Container Card now uses the Header Card for its header, allowing for more header customization. ([7aec912](https://github.com/clarinetJWD/bolder-utility-cards/commit/7aec912183a60dc7d83a7ea792cdf103057d95ff))

## [1.2.0](https://github.com/clarinetJWD/bolder-utility-cards/compare/v1.1.5...v1.2.0) (2025-04-28)


### Features

* Adds new card to the set: Bolder Header Card (WIP, more features coming) ([c8fad0a](https://github.com/clarinetJWD/bolder-utility-cards/commit/c8fad0aed736bbf274e1032d509528ff41111876))

## [1.1.5](https://github.com/clarinetJWD/bolder-container-card/compare/v1.1.4...v1.1.5) (2025-04-23)


### Bug Fixes

* Fixed an issue where the header did not apply the backdrop filter (blur). ([203776e](https://github.com/clarinetJWD/bolder-container-card/commit/203776e7bd6d62d35fb2a08cf7c19fdef9b1c528))
* Fixed an issue where the header would keep it's background when option "Keep Background" was off. ([203776e](https://github.com/clarinetJWD/bolder-container-card/commit/203776e7bd6d62d35fb2a08cf7c19fdef9b1c528))
* Fixed an issue with the header background color not defaulting to the theme color when the theme uses "--card-background-color" instead of "--ha-card-color". ([203776e](https://github.com/clarinetJWD/bolder-container-card/commit/203776e7bd6d62d35fb2a08cf7c19fdef9b1c528))

## [1.1.4](https://github.com/clarinetJWD/bolder-container-card/compare/v1.1.3...v1.1.4) (2025-04-22)


### Bug Fixes

* Fixed an issue where when "gap" was NOT specified in the config, it would use the incorrect value. ([e11a61f](https://github.com/clarinetJWD/bolder-container-card/commit/e11a61f1edefc72a2e83a2ab7b6942ad541c21f6))

## [1.1.3](https://github.com/clarinetJWD/bolder-container-card/compare/v1.1.2...v1.1.3) (2025-04-22)


### Bug Fixes

* Fixed an issue where conatiner card gap wouldn't be applied when specified in the yaml configuration instead of themes. ([dadf423](https://github.com/clarinetJWD/bolder-container-card/commit/dadf423bc2bd3993238748bc91129ec2fb618561))
* Fixed the gap between cards needing to be set on timeout. ([71594bf](https://github.com/clarinetJWD/bolder-container-card/commit/71594bfd0c19abb6481e38a83ae6d05cd7eb2df1))
* The gap is now applied immediately with no delayed layout change. ([71594bf](https://github.com/clarinetJWD/bolder-container-card/commit/71594bfd0c19abb6481e38a83ae6d05cd7eb2df1))

## [1.1.2](https://github.com/clarinetJWD/bolder-container-card/compare/v1.1.1...v1.1.2) (2025-04-15)


### Bug Fixes

* Fixed the gap between cards needing to be set on timeout. The gap is now applied immediately with no delayed layout change. ([acd6a19](https://github.com/clarinetJWD/bolder-container-card/commit/acd6a19a1243ab5a5403ab71c63da3aa5994cd84))

## [1.1.1](https://github.com/clarinetJWD/bolder-container-card/compare/v1.1.0...v1.1.1) (2025-04-14)


### Bug Fixes

* --bolder-container-card-padding is now only applied when keep_outer_padding is active, and uses fallback variables. ([6052a39](https://github.com/clarinetJWD/bolder-container-card/commit/6052a39a467fad55594c3582f0b828ca04355c17))
* Added assurance that gap style will be applied when the DOM loads too slowly. ([6052a39](https://github.com/clarinetJWD/bolder-container-card/commit/6052a39a467fad55594c3582f0b828ca04355c17))
* Better behavior for keep_outer_padding. ([6052a39](https://github.com/clarinetJWD/bolder-container-card/commit/6052a39a467fad55594c3582f0b828ca04355c17))

## [1.1.0](https://github.com/clarinetJWD/bolder-container-card/compare/v1.0.0...v1.1.0) (2025-04-14)


### Features

* Adds support for specifying theme variables in the card configuration. ([03c57bc](https://github.com/clarinetJWD/bolder-container-card/commit/03c57bcd4d0e4ec2e542a09bef393a90573e64f0))
* Full UI Configurator now works. ([3676769](https://github.com/clarinetJWD/bolder-container-card/commit/3676769b7f2920da36bf0cce3f2cb3ffcda92568))


### Bug Fixes

* Fixes a rendering issue affecting config specified styles. ([f9e1f5d](https://github.com/clarinetJWD/bolder-container-card/commit/f9e1f5d1ea0c97f0ca7c5a05c4649b7b0e29abee))

## 1.0.0 (2025-04-11)


### Features

* Initial Release ([7abac10](https://github.com/clarinetJWD/bolder-container-card/commit/7abac107e16ab1f68c66dd84fcf4a87c0da64cbb))
