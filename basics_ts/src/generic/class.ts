class KeyValue<K, V> {
  constructor(public key: K, public value: V) {}
}

const pair = new KeyValue<string, string>("1", "sachin");
pair.key;
