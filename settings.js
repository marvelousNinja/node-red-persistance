module.exports = {
  // Default storage module
  // storageModule: require('node-red/red/runtime/storage/localfilesystem'),

  // Blackhole storage module
  // storageModule: require('./lib/blackhole'),

  // S3 storage module
  storageModule: require('./lib/s3'),

  // Unrelated to storage settings
  uiPort: process.env.VCAP_APP_PORT || 1880
};
