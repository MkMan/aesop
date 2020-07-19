# Aesop code challenge

Node version can be set automatically using nvm with `nvm use` or manually by reading the `.nvmrc` file
and using the version of node specified.

## Scripts

- `start` will run the mock backend on port 3000 and build and serve the frontend on port 1234
- `test` will run all unit tests in watch mode
- `test:unit` will run all unit tests once and generate code coverage report

### Enhancements

I would have liked to do the following but had already spent a lot of time on this.

- Move to `semantic ui` accordion instead of Bootstrap accordion. I haven't used either library much
  so I wasn't aware of what components they had. Usually, I prefer building the component myself unless
  strapped for time.
- Break up the Shop route component and write tests for it.
