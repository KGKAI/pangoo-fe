import React, { memo, CSSProperties } from "react";
import { useDrag } from "react-dnd";
import schema from "../../components/Pangoo-core/schema";
import { BasicTemplateKeyType } from "../../components/Pangoo-core/BaseTemplate";

const DragBox = memo((props: any) => {
	const { item } = props;
	let type: BasicTemplateKeyType = item.type;
	const [{ isDragging }, drag] = useDrag({
		item: {
			type,
			config: schema[type].config,
			h: item.h,
			editableData: schema[type].editableData,
		},
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			// console.log('dropped result:' + JSON.stringify(dropResult))
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const style: CSSProperties = {
		border: "1px dashed gray",
		backgroundColor: "white",
		padding: "0.5rem 1rem",
		marginRight: "1.5rem",
		marginBottom: "1.5rem",
		cursor: "move",
		float: "left",
	};
	const opacity = isDragging ? 0.4 : 1;
	return (
		<div ref={drag} style={{ ...style, opacity }}>
			{props.children}
		</div>
	);
});

export default DragBox;
