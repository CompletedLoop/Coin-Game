import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";

interface Attributes {}

@Component({tag: "Coin"})
export class CoinClient extends BaseComponent<Attributes> implements OnStart {
    onStart() {
        
    }
}