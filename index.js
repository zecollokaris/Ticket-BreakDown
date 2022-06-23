const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({
    name: 'Collins'
}));