import { Service, OnStart, OnTick, Dependency } from "@flamework/core";
import { ReplicatedStorage, RunService, Workspace } from "@rbxts/services";
import { TimedConnection } from "shared/TimedConnection";

const Baseplate = Workspace.Baseplate
const CoinAsset: Part = ReplicatedStorage.Assets.WaitForChild("Coin") as Part

const random = (mul: number) => (new Random().NextNumber() * 2 - 1) * mul

const spawn_range = 20
const spawn_height = 13
const max_coins = 1000

@Service({})
export class CoinSpawner implements OnStart {
    onStart() {
        task.wait(5) // allow the client to load first

        // Init counter
        this.coinsSpawned = 0
        
        // Spawn coin in a random position every second
        this.coinSpawnerConnection = new TimedConnection(RunService.Heartbeat, () => this.onHeartbeat(), .5)
    }
    
    private onHeartbeat() {
        let CoinClone = this.cloneCoin()
        this.coinsSpawned += 1
    
        // Check if max coins is reached
        if (this.coinsSpawned >= max_coins) { this.coinSpawnerConnection.connection.Disconnect() }
    }

    private cloneCoin() {
        let CoinClone = CoinAsset.Clone()
        CoinClone.Position = new Vector3(random(spawn_range), spawn_height, random(spawn_range))
        CoinClone.Parent = Workspace.Coins
        return CoinClone
    }
}

export interface CoinSpawner{
    coinSpawnerConnection: TimedConnection
    coinsSpawned: number
}