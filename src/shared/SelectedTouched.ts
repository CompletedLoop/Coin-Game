/*
    Only calls a callback to a touched event if the touching object is whitelisted

    The SelectedTouch Object is passed to the callback as the second object
*/

export type SelectedTouchCallback = (hit: BasePart, SelectedTouchObject: SelectedTouch) => void

export class SelectedTouch {
    constructor(Object: BasePart, SelectedObjects: BasePart[], callback: SelectedTouchCallback) {
        this.SelectedObjects = SelectedObjects

        // Create Connection
        this.connection = Object.Touched.Connect((hit: BasePart) => {
            if (this.SelectedObjects.includes(hit)) {
                callback(hit, this)
            }
        })
    }
}

export interface SelectedTouch {
    SelectedObjects: Instance[]
    connection: RBXScriptConnection
}