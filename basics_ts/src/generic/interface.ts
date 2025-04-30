// myweb.com/users
// myweb.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User1 {
  username: string;
}

interface Products {
  title: string;
}

const result = fetch<Products>("url");
result.data?.title
