/*
    Only calls a callback to a touched event if the touching object is whitelisted

    The SelectedTouch Object is passed to the callback as the second object
*/

export type SelectedTouchInput = Instance | Instance[]
export type SelectedTouchCallback = (hit: BasePart, SelectedTouchObject: SelectedTouch) => void

export class SelectedTouch {
    constructor(input: SelectedTouchInput, callback: SelectedTouchCallback, whitelistDescendants: boolean = false) {
        this.input = input


    }
}

export interface SelectedTouch {
    input: SelectedTouchInput
    connection: RBXScriptConnection
}