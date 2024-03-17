import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { SelectedTouch } from "shared/SelectedTouched";
import { Players } from "@rbxts/services";
import { Functions } from "client/network";

const player: plr = Players.LocalPlayer as plr
const character = () => player.Character || player.CharacterAdded.Wait()[0]

interface Attributes {}

@Component({tag: "Coin"})
export class CoinClient extends BaseComponent<Attributes, Part> implements OnStart {
    onStart() {
        this.awaitingAcceptance = false

        //Bind Touched
        this.TouchConnection = new SelectedTouch(
            this.instance, 
            character().GetChildren(), 
            (hit, SelectedTouchObject) => this.onTouched(hit as Part, SelectedTouchObject) 
        )
    }
    
    private async onTouched(hit: Part, SelectedTouchObject: SelectedTouch): Promise<void> {
        if (this.awaitingAcceptance) return

        this.awaitingAcceptance = true
        let accepted = Functions.CollectCoin(this.instance)

        if (await accepted) {
            SelectedTouchObject.connection.Disconnect()
            print("less goo")
        }
        else {
            this.awaitingAcceptance = false
        }
    }
}

export interface CoinClient {
    TouchConnection: SelectedTouch
    awaitingAcceptance: boolean
}