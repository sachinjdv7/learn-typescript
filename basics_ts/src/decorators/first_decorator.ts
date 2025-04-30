type ComponentOptions = {
  selectors: string;
};

// Decorator Factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log(`${constructor.name} is called`);
    constructor.prototype.options = options;
    constructor.prototype.uniquId = Date.now();
    constructor.prototype.insertDOM = () => {
      console.log("Inserting the component to DOM");
    };
  };
}

@Component({ selectors: "#my-profile" })
class ProfileComponent {}
