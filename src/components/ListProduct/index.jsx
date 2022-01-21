import React from 'react';
import AntItem from './item';

function ListProduct(props) {
    return (
        <div className="ant-list-items">
        {
            props.products.map((item, index)=> {
                return <AntItem data={item} key={index} handleDel={props.handleDel} ClickEditUser={props.ClickEditUser} />
            })
        }
        </div>
    );
}

export default ListProduct;