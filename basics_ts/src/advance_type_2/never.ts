function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    // read message from queue
  }
}

// processEvents();
reject("...");
console.log("helllo");

//  In config file change this  -> "allowUnreachableCode": false
