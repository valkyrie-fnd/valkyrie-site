# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Generate docs
```
yarn gen-api-docs
```
This command generates md documentation for openapi specifications. Requires Valkyrie to be present on the system

```
yarn gen-provider-docs
```
This command generates md documentation from provider modules inside Valkyrie. Requires Valkyrie to be present on the system
### Deployment

Update version in `package.json` and then push a tag with the same version number with the format `v1.2.3`. This will trigger a build of the site and push it to GCS.