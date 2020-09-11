import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import Draggable from "react-draggable";
import { Tooltip } from "antd";
import GridLayout from "react-grid-layout";
import {inject, observer} from "mobx-react";
import {appState} from "../../store";

@inject(() => appState)
@observer
const DropTargetBox = (props: any) => {
	const { pState } = props;
	const pointData = pState ? pState.pointData : {};
	const [isShowTip, setIsShowTip] = useState(true);
	const [canvasRect, setCanvasRect] = useState<number[]>([]);
	const [collectedProps, drop] = useDrop({
		accept: ["Text", "Button"],
		drop: (item, monitor) => {},
	});

	useEffect(() => {
		let element = document.getElementById("canvas");
		let { width = 0, height = 0 } = element
			? element.getBoundingClientRect()
			: {};
		setCanvasRect([width, height]);
    }, []);
    
    // const onDragStart = (layout, oldItem, newItem, placeholder, e, element) => {
    //     const curPointData = pointData.filter(item => item.id === newItem.i)[0];
        
    // };

	return (
		<Draggable handle=".js_box">
			<div className="canvas-box">
				<div id="canvas" ref={drop}>
					<Tooltip
						placement="right"
						title="鼠标按住此处拖拽画布"
						visible={isShowTip}
					>
						<div
							className="js_box"
							style={{
								width: "10px",
								height: "100%",
								position: "absolute",
								borderRadius: "0 6px 6px 0",
								backgroundColor: "#2f54eb",
								right: "-10px",
								top: "0",
								color: "#fff",
								cursor: "move",
							}}
						/>
					</Tooltip>

					{pointData.length > 0 ? (
						<GridLayout cols={24} rowHeight={2} width={canvasRect[0]} margin={[0, 0]}></GridLayout>
					) : null}
				</div>
			</div>
		</Draggable>
	);
};

export default DropTargetBox;
