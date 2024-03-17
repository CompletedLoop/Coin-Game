import { Components } from "@flamework/components";
import { Service, OnStart, OnTick, Dependency } from "@flamework/core";
import { ReplicatedStorage, RunService, Workspace } from "@rbxts/services";
import { Coin } from "server/components/Coin";
import { TimedConnection } from "shared/TimedConnection";

const Baseplate = Workspace.Baseplate
const CoinAsset: Part = ReplicatedStorage.Assets.WaitForChild("Coin") as Part

const random = (mul: number) => (new Random().NextNumber() * 2 - 1) * mul

const spawn_range = 20
const spawn_height = 14
const max_coins = 1000

const components = Dependency<Components>()

@Service({})
export class CoinSpawner implements OnStart {
    onStart() {
        this.coinsSpawned = 0
        
        // Spawn coin in a random position every second
        this.coinSpawnerConnection = new TimedConnection(RunService.Heartbeat, () => this.onHeartbeat(), .5)
    }
    
    onHeartbeat() {
        let CoinClone = CoinAsset.Clone()
        CoinClone.Position = new Vector3(random(spawn_range), spawn_height, random(spawn_range))
        CoinClone.Parent = Workspace.Coins
        this.coinsSpawned += 1
    
        // Add Coin component
        components.addComponent<Coin>(CoinClone)
    
        // Check if max coins is reached
        if (this.coinsSpawned >= max_coins) { this.coinSpawnerConnection.connection.Disconnect() }
    }
}

export interface CoinSpawner{
    coinSpawnerConnection: TimedConnection
    coinsSpawned: number
}