import { OnStart, OnTick } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { SelectedTouch } from "shared/SelectedTouched";
import { Players, TweenService } from "@rbxts/services";
import { Functions } from "client/network";

const player: plr = Players.LocalPlayer as plr
const character = () => player.Character || player.CharacterAdded.Wait()[0]

const quad = Enum.EasingStyle.Quad
const linr = Enum.EasingStyle.Linear
const inOut = Enum.EasingDirection.InOut

interface Attributes {}

@Component({tag: "Coin"})
export class CoinClient extends BaseComponent<Attributes, Part> implements OnStart, OnTick {
    onStart() {
        this.awaitingAcceptance = false

        //Bind Touched
        this.TouchConnection = new SelectedTouch(
            this.instance, 
            character().GetChildren(), 
            (hit, SelectedTouchObject) => this.onTouched(hit as Part, SelectedTouchObject) 
        )

        // Tweens
        const animatedPositon = this.instance.Position.sub(new Vector3(0, 2.5, 0))
        const animatedOrientation = new Vector3(0, 360, 0)
        
        // The position and rotation need seperate tween since one reverses and the other doesnt
        TweenService.Create(this.instance, new TweenInfo(1.5, quad, inOut, math.huge, true), { Position: animatedPositon }).Play()
        TweenService.Create(this.instance, new TweenInfo(1.5, linr, inOut, math.huge, false), { Orientation: animatedOrientation }).Play()
    }

    onTick(dt: number): void {
        
    }
    
    private async onTouched(hit: Part, SelectedTouchObject: SelectedTouch): Promise<void> {
        if (this.awaitingAcceptance) return
        this.awaitingAcceptance = true
        Functions.CollectCoin(this.instance)
        .andThen((response: boolean) => {
            if (response) 
            {
                SelectedTouchObject.connection.Disconnect()
                //print("server accepted")
            }
            else
            {   
                this.awaitingAcceptance = false
                //warn("server rejected")
            }
        })
    }
}

export interface CoinClient {
    TouchConnection: SelectedTouch
    awaitingAcceptance: boolean
}