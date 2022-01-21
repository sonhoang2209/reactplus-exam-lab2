import React from 'react';

function AntItem(props) {
    const data = props.data

    const clickDel = (data) => () => {
        props.handleDel(data)
    }

    const clickEdit = (data) => () => {
        props.ClickEditUser(data)
    }

    return (
        <div className="ant-list-item">
            <div className="ant-list-item-meta">
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-image-img">
                        <img alt={data.name} src={data.avatar} style={{width: 100, height:100}}/>
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>{data.name}</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                        {data.content}
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li>
                        <a onClick={clickEdit(data)}>Edit</a>
                    </li>
                    <li>
                        <a onClick={clickDel(data.id)}>Remove</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AntItem;