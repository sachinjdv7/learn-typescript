let speed: number | null = null;

// falsy (undefined, null, '',false,0)

let ride = {
  //   speed: speed || 30, // plain javascipt way (what if user gives 0)-> then return 30
  //   speed: speed !==null ? speed : 30 // better way
  speed: speed ?? 30, // best way (gives fallback value if speed not there)
};
