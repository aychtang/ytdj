import * as React from "react";

export interface UnitState {}

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
