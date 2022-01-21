import React from "react";

export const AddProductForm = (props) => {
    return <div>
        <div className="field-input-group">
            <input
                placeholder="Image"
                type="text"
                name='avatar'
                className="ant-input"
                onChange={props.handleChangefunc}
            />
        </div>
        <div className="field-input-group">
            <input
                placeholder="Product name"
                type="text"
                className="ant-input"
                name='name' onChange={props.handleChangefunc}
            />
        </div>
        <div className="field-input-group">
            <input
                placeholder="Product description"
                type="text"
                className="ant-input"
                name='content'
                onChange={props.handleChangefunc}
            />
        </div>
        <div className="modal-new-user-footer">
            <button
                onClick={props.handleAdd}
                className="ant-btn ant-btn-primary"
            >
                Save
            </button>
            <button className="ant-btn" style={{ marginLeft: 10 }} >
                Cancel
            </button>
        </div>
    </div>
}
