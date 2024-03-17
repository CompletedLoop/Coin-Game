import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";

interface Attributes {}

@Component({tag: "Coin"})
export class CoinClient extends BaseComponent<Attributes, Part> implements OnStart {
    onStart() {
        //Bind Touched
        this.TouchConnection = this.instance.Touched.Connect((hit) => this.onTouched(hit))
    }
    
    private onTouched(hit: BasePart) {

    }
}

export interface CoinClient {
    TouchConnection: RBXScriptConnection
}