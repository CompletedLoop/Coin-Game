import { Service, OnStart, OnInit } from "@flamework/core";
import { Players } from "@rbxts/services";

const player: plr = Players.LocalPlayer as plr
const character = () => player.Character || player.CharacterAdded.Wait()[0]

@Service({})
export class CharacterService implements OnStart {
    onStart() {
        
    }
}