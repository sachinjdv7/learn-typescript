interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is product
  //key of T -> 'name' | 'price'
  find1(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.find1("name", "1"),
  store.find1("name", 1),
  // store.find1("nonexisting key", "1"), -> catch this issue at the compile time
  // pass on the generic type parameter
  class CompressibleStore<T> extends Store<T> {
    compress() {}
  };
// restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// fix the generic typ parameter

class ProductStore extends Store<Product> {
  filterByCategory(_: string): Product[] {
    return [];
  }
}
// let store  = new SearchableStore<Product>()
