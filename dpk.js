const crypto = require("crypto");

exports.deterministicPartitionKey = (data) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (data) {
    const stringifiedData = JSON.stringify(data);
    // Hash data provided if no partition key else return the partition key
    candidate = (data.partitionKey) ? data.partitionKey : crypto.createHash("sha3-512").update(stringifiedData).digest("hex");
  }

  if (candidate) {
    // Assignes a stringified partitionKey key if it isnt a string
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    // If no input is received by the function return the TRIVIAL_PARTITION_KEY
    candidate = TRIVIAL_PARTITION_KEY;
  }

  return (candidate.length > MAX_PARTITION_KEY_LENGTH) ? crypto.createHash("sha3-512").update(candidate).digest("hex") : candidate;
};