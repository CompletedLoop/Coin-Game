import { Service, OnStart, OnInit } from "@flamework/core";
import { Functions } from "server/network";

const max_distance_from_coin = 8

@Service({})
export class CoinEventHandler implements OnStart {
    onStart() {
        Functions.CollectCoin.setCallback(
            (player, Coin): boolean => this.CollectCoinRequest(player as plr, Coin)
        )  
    }

    private CollectCoinRequest(player: plr, Coin: Part): boolean {
        if (player.DistanceFromCharacter(Coin.Position) <= max_distance_from_coin) {
            task.spawn(() => {this.CollectCoin(player, Coin)})
            return true
        }
        return false
    }

    private CollectCoin(player: plr, Coin: Part): void {
        player.leaderstats.Money.Value += 1
        Coin.Destroy()
    }
}