function render(document: any) {
  document.fly();
  document.jump();
  document.swim();
}

function render1(document: unknown) {
  // narrowing the type
  if (typeof document == "string") {
    document.toLocaleLowerCase();
    // typeof for the premitive data type
  }
  if (document instanceof Word) {
    // instace of for the class
  }
  document.fly();
  document.jump();
  document.swim();
}
