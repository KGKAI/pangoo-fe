import React, { useState, useEffect } from "react";
import { useDrop, DragPreviewImage } from "react-dnd";
import Draggable from "react-draggable";
import { Tooltip } from "antd";
import GridLayout, { Layout } from "react-grid-layout";
import { observer } from "mobx-react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "../../store";
import ParseEngine from "../../components/Pangoo-core/ParseEngine";

const DropTargetBox = observer((props: any) => {
	const store: any = useStore();
	// console.log(store.curPoint);
	// console.log(store.pointData);
	const pointData = store.pointData ? store.pointData : [];
	const allTypes = props.allTypes;
	const [isShowTip, setIsShowTip] = useState(true);
	const [canvasRect, setCanvasRect] = useState<number[]>([]);
	const [{ isOver, canDrop, item }, drop] = useDrop({
		accept: allTypes, // 定义可放置的类型
		drop: (item, monitor) => {
			let parentDiv: HTMLElement = document.getElementById("canvas")!,
				pointRect: DOMRect = parentDiv!.getBoundingClientRect(),
				top: number = pointRect.top,
				pointEnd = monitor.getSourceClientOffset(),
				y = pointEnd!.y < top ? 0 : pointEnd!.y - top,
				col = 24,
				cellHeight = 2,
				w = col;
			// console.log(pointRect, pointEnd);
			let gridY = Math.ceil(y / cellHeight);
			// console.log(gridY);
			store.addPointData({
				id: uuidv4(),
				item,
				point: {
					i: `x-${pointData.length}`,
					x: 0,
					y: gridY,
					w: 2,
					h: (item as any).h,
					isBounded: true,
				},
			});
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
			item: monitor.getItem(),
		}),
	});

	useEffect(() => {
		let { width, height } = document
			.getElementById("canvas")!
			.getBoundingClientRect();
		setCanvasRect([width, height]);
	}, []);

	const onDragStop = (
		layout: any,
		oldItem: any,
		newItem: any,
		placeholder: any,
		e: any,
		element: any
	) => {
		const curPointData = pointData.filter(
			(v: any) => v.id === newItem.i
		)[0];
		store.setCurPoint(curPointData);
		// console.log(store.curPoint)
	};

	const onDragStart = (
		layout: any,
		oldItem: any,
		newItem: any,
		placeholder: any,
		e: any,
		element: any
	) => {
		const curPointData = pointData.filter(
			(v: any) => v.id === newItem.i
		)[0];
		store.setCurPoint(curPointData);
	};
	const opacity = isOver ? 0.7 : 1;
	return (
		// <Draggable>
		<div className="canvas-box">
			<div
				id="canvas"
				ref={drop}
				className="canvas"
				style={{
					opacity,
				}}
			>
				<GridLayout
					cols={24}
					rowHeight={2}
					width={canvasRect[0]}
					isDraggable={true}
					onDragStart={onDragStart}
					onDragStop={onDragStop}
				>
					{pointData.map((point: any) => {
						return (
							<div key={point.id} data-grid={point.point}>
								<ParseEngine {...point.item} isTpl={false} />
							</div>
						);
					})}
				</GridLayout>
			</div>
		</div>
		// </Draggable>
	);
});

export default DropTargetBox;
