import { Networking } from "@flamework/networking";

interface ClientToServerEvents {}

interface ServerToClientEvents {}

interface ClientToServerFunctions {
    CollectCoin(Coin: Part): boolean
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
