function Folder() {
  return new Proxy(
    {},
    {
      get: (target, property) => {
        // Log all readings to our object
        console.log(`Reading ${property}`);

        if (!(property in target)) {
          target[property] = new Folder();
        }

        return target[property];
      },
    }
  );
}

// Create empty root folder
const rootFolder = new Folder();

try {
  // Requesting a value of an uninitialized property triggers its creation
  rootFolder.ninjasDir.firstNinjaDir.ninjaFile = 'yoshi.txt';
  console.log('An exception was not arised');
} catch (error) {
  console.log('Exception occured');
}
