import { OnStart, OnTick } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Players, Workspace } from "@rbxts/services";

interface Attributes {}

@Component({tag: "Character"})
export class Character extends BaseComponent<Attributes> implements OnStart, OnTick {
    onStart() {
        this.setAttribute("Speed", 1)

        task.delay(1, () => {this.instance.Parent = Workspace.Characters})

        // Get Humanoid
        this.humanoid = this.instance.WaitForChild("Humanoid") as Humanoid

        // Get Player
        this.player = Players.GetPlayerFromCharacter(this.instance) as plr
    }

    onTick(dt: number): void {
        if (!this.humanoid) return

        this.setAttribute("Speed", this.player.leaderstats.Money.Value/10 + 1)

        this.applySpeed()
    }

    applySpeed() {
        this.humanoid.WalkSpeed = 16 * (this.getAttribute("Speed") as number)
    }

    getAttribute = (name: string) => {return this.instance.GetAttribute(name)}
    setAttribute = (name: string, value: any) => {this.instance.SetAttribute(name, value)}
}

export interface Character {
    humanoid: Humanoid
    player: plr
}