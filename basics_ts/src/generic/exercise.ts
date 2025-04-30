function echo2<T>(arg: T): T {
  return arg;
}

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

/**
 * An Entity should have a unique identi er. The type of identi er, however, is dependent
   on the use case. In some cases, the ID might be a number, in other cases, it might be a
   string, GUID, etc. Represent the entity using a generic class.
 */
class Entity<T> {
  constructor(public id: T) {}
}

interface User {
  userId: number;
  username: string;
}

//keyOf T -> 'userId' | 'username'
