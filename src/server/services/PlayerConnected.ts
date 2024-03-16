import { Service, OnStart, OnInit } from "@flamework/core";
import { Players, StarterPlayer } from "@rbxts/services";

@Service({})
export class PlayerConnected implements OnStart {
    onStart(): void {
        // Connect to PlayerAdded and catch all currently connectedPlayers
        Players.GetPlayers().forEach(player => this.PlayerConnected(player));
        Players.PlayerAdded.Connect((player) => this.PlayerConnected(player));
    }

    PlayerConnected(player: Player): void {
        // Ignore if player is already connected
        if (player.GetAttribute("Connected")) return
        player.SetAttribute("Connected", true)

        // Create Leaderstats
        this.CreateLeaderstatsForPlayer(player)

        // Add Character Tag
        if (player.Character) player.Character.AddTag("Character")
        player.CharacterAdded.Connect((character) => {
            character.AddTag("Character")
        })
    }

    CreateLeaderstatsForPlayer(player: Player): void {
        // leaderstats Folder
        let leaderstats = new Instance("Folder")
        leaderstats.Name = "leaderstats"
        leaderstats.Parent = player

        // Money
        let money = new Instance("NumberValue")
        money.Name = "Money"
        money.Parent = leaderstats
    }
}