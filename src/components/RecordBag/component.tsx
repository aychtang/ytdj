/*
 * RecordBag: View which encompasses one deck that can play a record, and modify
 * the speed by + or - 8%:
 */

import * as T from "./types";
import * as React from "react";
import { connect } from "react-redux";

import EmptyState from "../../types/EmptyState";

import { SET_TURNTABLE_RECORD } from "../../actions/constants";

// -----------------------------------------------------------------------------

class RecordBag extends React.PureComponent<T.RecordBagProps, any> {

    state = {
        value: this.props.default,
    }

    onChange = (evt: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            value: evt.currentTarget.value,
        });
    }

    onKeyUp = (evt: any) => {
        if (evt.keyCode === 13) {
            this.props.setRecord(this.props.id, this.state.value);
        }
    }

    render () {
        return (
            <div className="App-RecordBag">
                <input
                    type="text"
                    value={this.state.value}
                    onKeyUp={this.onKeyUp}
                    onChange={this.onChange}
                />
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setRecord: (id: number, videoId: string) : void =>
            dispatch({
                id,
                videoId,
                type: SET_TURNTABLE_RECORD,
            })    
    };
};

// -----------------------------------------------------------------------------

export default connect<any, T.RecordBagDispatchFromProps, void>(
    () => ({}),
    mapDispatchToProps,
)(RecordBag);
