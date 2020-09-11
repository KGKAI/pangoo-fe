const pointData = localStorage.getItem('userData') || '[]'

export const appState = {
    pointData: JSON.parse(pointData),
    curPoint: null
}