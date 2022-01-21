
function EditProduct(props) {
    return <div>
        <div className="field-input-group">
            <input
                placeholder="Image"
                type="text"
                name='avatar'
                className="ant-input"
                onChange={props.handleChangefunc}
                defaultValue={props.product?.avatar}
            />
        </div>
        <div className="field-input-group">
            <input
                placeholder="Product name"
                type="text"
                className="ant-input"
                name='name' onChange={props.handleChangefunc}
                defaultValue={props.product?.name}
            />
        </div>
        <div className="field-input-group">
            <input
                placeholder="Product description"
                type="text"
                className="ant-input"
                name='content'
                onChange={props.handleChangefunc}
                defaultValue={props.product?.content}
            />
        </div>
        <div className="modal-new-user-footer">
            <button
                onClick={() => props.handleEditUser(props.product?.id)}
                className="ant-btn ant-btn-primary"
            >
                Update
            </button>
            <button className="ant-btn" style={{ marginLeft: 10 }} >
                Cancel
            </button>
        </div>
    </div>
}

export default EditProduct;