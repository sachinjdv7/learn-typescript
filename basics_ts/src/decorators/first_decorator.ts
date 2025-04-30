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

function Pipe(constructor: Function) {
  console.log("Pipe constuctor called");
  constructor.prototype.pipe = true;
}

@Component({ selectors: "#my-profile" })
@Pipe
class ProfileComponent {}

// Pipe constuctor called
// ProfileComponent is called
