export class TimedConnection {
    constructor(event: RBXScriptSignal, callback: (args: any[]) => any, sleep: number) {
        this.sleep = sleep
        this.timer = 0
        
        this.connection = event.Connect((args: any[]) => {
            let time = tick()
            if (time > this.timer) {
                callback(args)
                this.timer = time + this.sleep
            }
        })
    }
}

export interface TimedConnection {
    connection: RBXScriptConnection
    sleep: number
    timer: number
}