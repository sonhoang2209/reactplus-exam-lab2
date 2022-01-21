import React, {useState,useEffect} from 'react';
import { Modal } from 'antd';

import ListProduct from './components/ListProduct'
import {AddProductForm} from './components/AddProductForm'
import EditProduct from './components/EditProduct';

import 'antd/dist/antd.css'
import './App.css';

import axios from './axios/config';

function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [products,setProducts] = useState([])
    const [newProduct, setNewProduct] = useState({
        name:'',
        avatar:'',
        content:''
    });
    const [editProduct, setEditProduct] = useState();

    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
        setIsEdit(false)
    }

    const ClickEditUser = ( data ) => {
        setIsEdit(true)
        setEditProduct(data)
        handleOpenModal()
    }

    const getProducts = async () => {
        try {
            const listProducts = await axios.get('/post')
            setProducts(listProducts.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getProducts()
    },[])

    const handleChange = (event) => {
        setNewProduct({ ...newProduct, [event.target.name]: event.target.value })
    };
    const handleChangeEdit = (event) => {
        setEditProduct({ ...editProduct, [event.target.name]: event.target.value })
    };

    const handleAddUser = async () => {
        try {
            const addUser = await  axios.post('/post', newProduct)
            addUser && getProducts()
            addUser && handleCancel()
        } catch (e) {
            console.log(e);
        }
    };

    const handleEditUser = async (data) => {
        try {
            const addUser = await  axios.put(`/post/${data}`, editProduct)
            addUser && getProducts()
            addUser && handleCancel()
        } catch (e) {
            console.log(e);
        }
    };

    const handleDelUser  = async (data) => {
        try {
            const deleteUser = await axios.delete(`/post/${data}`)
            deleteUser && getProducts()
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="App">
            <h2>List product</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New Product
                </button>
            </div>
            <ListProduct 
                products={products}
                handleDel={handleDelUser}
                ClickEditUser= {ClickEditUser}
            />
            {
                isEdit ? (
                    <Modal title="Edit Product" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                        <EditProduct 
                            handleChangefunc={handleChangeEdit}
                            handleEditUser={handleEditUser}
                            product = {editProduct}
                        />
                    </Modal>
                ) : (
                    <Modal title="Add Product" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                        <AddProductForm 
                            handleChangefunc={handleChange}
                            handleAdd={handleAddUser}
                        />
                    </Modal>
                )
            }
        </div>
    );
}

export default App;
