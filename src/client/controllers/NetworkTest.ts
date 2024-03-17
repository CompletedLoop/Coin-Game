import { Controller, OnStart, OnInit } from "@flamework/core";
import { RunService } from "@rbxts/services";
import { Events } from "client/network";
import { TimedConnection } from "shared/TimedConnection";

@Controller({})
export class NetworkTest implements OnStart {
    onStart() {
        this.messagesSent = 0
        //new TimedConnection(RunService.Heartbeat, () => this.sendMessage(), 1)
    }

    sendMessage() {
        this.messagesSent += 1
        Events.message.fire(`Client has sent ${tostring(this.messagesSent)} messages!`)
    }
}

export interface NetworkTest {
    messagesSent: number
}