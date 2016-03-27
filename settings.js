module.exports = {
  // Default storage module
  // storageModule: require('node-red/red/runtime/storage/localfilesystem')

  // Blackhole storage module
  storageModule: require('./lib/blackhole')
}
