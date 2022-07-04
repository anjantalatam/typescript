import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Dragged", e);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={handleDrag}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
