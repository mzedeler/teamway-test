# Personality test app test

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### npm test

Runs tests using mocha. To tests in watch mode, run `npm test -- -w`.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

## Notes
The file layout reflects what I used for a large client.

I only included a single test. Usually I also test components, but I ran out of time.
Usually I try to have a test coverage of about 70-90%.

As you can see, I do not use TDD, but I do use tests to drive development where it
makes sense for me, which means that I write tests first when I develop more complex
code.

There is a lot of small bugs and tweaks that should be made before this could be
said to be ready for real use.

Note that the result screen is missing - the test that is being referred to doesn't
seem to reveal how the result is calculated. I do have some ideas for how that could
be done, though.
