import { BaseComponent, Component } from "@flamework/components";
import { OnStart, OnTick } from "@flamework/core";
import { Players, TweenService } from "@rbxts/services";

const upDownTweenInfo = new TweenInfo(
    1.5, 
    Enum.EasingStyle.Quad,
    Enum.EasingDirection.InOut,
    9999999999,
    true
)

const rotate_by = new Vector3(0, 2.5, 0)

@Component({tag: "Coin"})
export class CoinServer extends BaseComponent<{}, Part> implements OnStart, OnTick {
    onStart(): void {
        // Play up and down tween
        // const animatedPositon = this.instance.Position.sub(new Vector3(0, 2.5, 0))
        // TweenService.Create(
        //     this.instance, upDownTweenInfo, {Position: animatedPositon}
        // ).Play()

        
    }

    onTick(dt: number): void {
        // Rotating animation
        // this.instance.Orientation = rotate_by.add(
        //     this.instance.Orientation
        // )
    }

    onTouched(hit: BasePart) {
        // Checks
        let player = Players.GetPlayerFromCharacter(hit.Parent) as plr
        if (!player) return

        // End Connection
        //this.TouchConnection.Disconnect()

        // Increment Money
        player.leaderstats.Money.Value += 2

        // Destory
        this.instance.Destroy()
    }
}