import { Service, OnStart, OnInit } from "@flamework/core";
import { Events } from "server/network";

@Service({})
export class NetworkTestServer implements OnStart {
    onStart() {
        Events.message.connect((player: Player, str: string) => {
            warn(str)
        })
    }
}