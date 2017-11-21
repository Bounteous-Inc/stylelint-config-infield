# stylelint-config-infield

A Stylelint configuration following Infield Digital's CSS/SCSS Coding Guidelines.

## Usage

You should install this configuration and peer dependencies as `devDependencies` in your project:

```
npm install --save-dev stylelint-config-infield stylelint
```

Next, simply extend the configuration from your project's `.stylelintrc.js` file:

```
"extends": "stylelint-config-infield",
```

## Development

If you clone this repository to your local machine and modify it, you can test changes without having to push and publish them to the NPM repository. Do this by linking your module globally – type:

```
npm link
```

Then, in your project where you want to test the updated config, type:

```
npm link stylelint-config-infield
```

Refer to the [Stylelint documentation on Shareable Configs](https://stylelint.io/user-guide/configuration/#extends) for more information.
