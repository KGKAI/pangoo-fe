import React, { memo } from "react";
import { useDrag } from "react-dnd";
import schema from "../../components/Pangoo-core/schema";
import { BasicTemplateKeyType } from "../../components/Pangoo-core/BaseTemplate";

const DragBox = memo((props: any) => {
  const { item } = props;
  let type: BasicTemplateKeyType = item.type;
  const [ collectedProps , drag] = useDrag({
    item: {
      type: item.type,
      config: schema[type].config,
      h: item.h,
      editableData: schema[type].editableData,
    },
    collect: (monitor) => {
      isDragging: monitor.isDragging()
    },
  });
  return <div ref={drag}>{props.children}</div>;
});

export default DragBox;
