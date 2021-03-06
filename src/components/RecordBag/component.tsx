/*
 * RecordBag: View which encompasses one deck that can play a record, and modify
 * the speed by + or - 8%:
 */

import * as React from "react";
import { connect, Dispatch } from "react-redux";

import * as T from "./types";
import EmptyState from "../../types/EmptyState";
import { setRecord } from "../../actions/pureActionCreators";

// -----------------------------------------------------------------------------

class RecordBag extends React.PureComponent<T.RecordBagProps, T.RecordBagState> {

    state = {
        value: this.props.default,
    }

    onInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            value: evt.currentTarget.value,
        });
    }

    onInputKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>) => {
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
                    onKeyUp={this.onInputKeyUp}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }

}

// -----------------------------------------------------------------------------

export default connect<any, T.RecordBagDispatchFromProps, {}>(
    () => ({}),
    (dispatch: Dispatch<T.RecordBagDispatchFromProps>) => ({
        setRecord: (id: number, videoId: string) : void => {
            dispatch(setRecord(id, videoId))
        }
    })
)(RecordBag);
