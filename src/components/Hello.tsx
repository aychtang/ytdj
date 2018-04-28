import * as React from "react";
import { UnitState } from "../types/UnitState";

export interface HelloProps {
    world: string;
}

export class Hello extends React.PureComponent<HelloProps, UnitState> {
    render () {
        return (
            <h1>
                Hello {this.props.world}!
            </h1>
        );
    }
}
