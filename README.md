<!--
# path

This is an exact copy of the NodeJS ’petite-arch’ module published to the NPM registry. 

[Documentation](http://nodejs.org/docs/latest/api/parch.html)

## Install

```sh
$ npm install --save pipe
```
-->

# PIPE

- pipe is a filter it basically takes a array of anything and returns N random objects

- N can be specified by the user along with other things


## Status

- This is have started as an experiment for a personal project. So we highly suggest the use of parse for inputs.
- Project is also Open Source so if anything that is needed it can be modified

## Usage

- How to use pipe

```js
import { funnel } from pipe

const res = funnel({
        data: [1,3,5,6], 
        index: 3
    }) //index mus'nt be larger than data length
```
or add tweak if you need to change something before returning the data

```js
import { funnel } from pipe

const res = funnel({
        data: [{h:1}, {l:2}, {f:4}], 
        index: 3
        tweak: {
            h: 4,
            l: 5
        }

    }) //index mus'nt be larger than data length
```


## Security and CSP
- in Order to avoid possible XSS attacks, use the parse utility

- in case of you having a backend, we recommend  the use of filters pipes or guards as well

## sources
- [Readme Template](https://github.com/vuejs/petite-vue)

## License

MIT
