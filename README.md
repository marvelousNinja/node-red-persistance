# Node RED Persistance modules

This repo contains prototype versions of S3 and Redis storage modules for Node RED data.
Take a look at `settings.js` to see how to specify storage module.
`lib/blackhole.js` is a good starting point to start writing your own storage module.

## Deploying on Predix
* Clone the repo and `cd` into it
* Check the `manifest.yml` for application name and service dependencies
* `cf create-service redis-1 shared-vm <name-of-redis-service-instance>`
* `cf create-service predix-blobstore Tiered <name-of-blob-service-instance>`
* `cf push`
* Check the logs with `cf logs <application-name> --recent`

## Running locally
* Clone the repo and `cd` into it
* `npm install`
* `npm start` or `npm run-script debug` if you've setup breakpoints

As of know, only default `localstorage` and `blackhole` storage modules
work in local envs.

## TBD
* Postgres plugin
* MongoDB plugin
* Streamline configuration
