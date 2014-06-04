Package.describe({
  summary: "Painless JavaScript unit testing"
})

Npm.depends({
  'jest-cli': '0.1.15'
});

Package.on_use(function (api, where) {
  api.add_files('jest.js', 'server')


  api.export && api.export('Jest');
})