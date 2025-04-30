interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}
// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
// restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// fix the generic typ parameter

class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
// let store  = new SearchableStore<Product>()
