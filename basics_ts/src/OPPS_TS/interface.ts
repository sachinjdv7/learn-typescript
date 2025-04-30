// abstract class Calender {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent: () => void;
  removeEvent: () => void;
}

interface CloudCalender extends Calender {
  sync: () => void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}
  addEvent(): void {}
  removeEvent(): void {}
}

/**
 *  interface is same like abstract class but it better
 *  It define the shape of the object
 */
