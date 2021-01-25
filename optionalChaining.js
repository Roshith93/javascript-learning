let user = {}; // user has no address

console.log( user?.address?.street ); // undefined (no error)
console.log( user?.address.street ); // Type Error