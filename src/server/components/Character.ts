import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";

interface Attributes {}

@Component({})
export class Character extends BaseComponent<Attributes> implements OnStart {
    onStart() {
        
    }
}