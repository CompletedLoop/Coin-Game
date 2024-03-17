/*
    Only calls a callback to a touched event if the touching object is whitelisted
*/

export type SelectedTouchInput = Instance | Instance[]

export class SelectedTouch {
    constructor(input: SelectedTouchInput, callback: () => void, whitelistDescendants: boolean = false) {
        this.input = input


    }
}

export interface SelectedTouch {
    input: SelectedTouchInput
    connection: RBXScriptConnection
}