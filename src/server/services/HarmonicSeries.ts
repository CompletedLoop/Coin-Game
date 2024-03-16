import { Service, OnStart, OnInit } from "@flamework/core";

//@Service({})
export class HarmonicSeries implements OnStart {
    onStart() {
        const depth = 10000000
        let result = 0
        for (let n = 1; n <= depth; n++) {
            result += 1/n
        }
        print(result)
    }
}