type WatchParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchParameters: WatchParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}
console.log(watchParameters);
