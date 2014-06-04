moduleMocker = Npm.require('jest-cli/src/lib/moduleMocker.js')
// console.log("moduleMocker", moduleMocker);

var test = {
  a:1,
  fn: function (a){return a}
}

var metadata = moduleMocker.getMetadata(test);
// console.log("metadata", metadata);
var mock = moduleMocker.generateFromMetadata(metadata);
// console.log('mock', mock);

mock.fn.mockReturnValueOnce("heya")
console.log('mock should return "heya":', mock.fn("nope"));
console.log('mock should return undefined:', mock.fn("yup"));

console.log('calls:', mock.fn.mock.calls)
// console.log('instances', mock.fn.mock.instances)



// Meteor thinks the following failed, maybe because it calls process.exit()?

Jest = Npm.require('jest-cli/bin/jest.js');
// console.log("here's jest:");
// Jest.runCLI({_: []}, ''); 