type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
