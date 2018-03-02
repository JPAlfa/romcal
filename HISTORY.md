# Version history

## 1.3.0 /2018-02-25
* Revamp code to use ES6 syntax
* Integration with `std/esm` to read `.mjs` and `babel` to ensure compatibility and seamless usage with lower version of node and requiring via CommonJS
* Expose constants and calendar helper functions and via module exports
* Various bug fixes
* Added more test cases for better test coverage

## 1.2.4 /2017-03-22
* Added French translations for France, Canada and Belgium.
* Updated French Calendar

## 1.2.3 / 2017-03-21
* Fix issue where national feasts appear more than once in the calendar output

## 1.2.2 / 2017-03-21
* Merge PRs containing bug fixes and improvements, thanks [Etienne Magnier](https://github.com/emagnier) and [Damiaan Dufaux](https://github.com/Dev1an)

## 1.2.1
* Added caching mechanism for common celebration dates in the liturgical calendar to improve calendar processing output performance. Added more titles metadata to national and general celebrations.

## 1.2.0
* Major rewrite for better extensibility and functionality. All previous revisions have been marked for deprecation in favor of this new rewrite.
