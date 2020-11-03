import React, { useContext } from "react";
import { useLocalStore } from "mobx-react";

const pointData = localStorage.getItem("userData") || "[]";
export function createStore() {
	return {
		curPoint: null,
		pointData: JSON.parse(pointData),
		setCurPoint(point: any) {
			this.curPoint = point;
		},
		addPointData(point: any) {
			this.pointData.push(point);
		},
		modifyPointData(id: string, values: any) {
			const point = this.pointData.find((item: any) => item.id === id);
			point.item.config = values;
		},
		deletePointData(id: string) {
			const index = this.pointData.findIndex(
				(item: any) => item.id === id
			);
			let points = this.pointData.splice(index, 1);
			if (points[0].id === (this.curPoint as any).id) {
				// 如果删除了当前的元素，那么要相应地将curPoint置空
				this.curPoint = null;
			}
		},
	};
}

const storeContext = React.createContext(null);

export const StoreProvider = (props: any) => {
	const store: any = useLocalStore(createStore);
	return (
		<storeContext.Provider value={store}>
			{props.children}
		</storeContext.Provider>
	);
};

export const useStore = () => {
	const store = useContext(storeContext);
	return store;
};
