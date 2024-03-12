import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { v4 as uuid } from 'uuid'

function DataTables() {

    const column = [{

        name: 'Id',
        selector: (row) => row.id,
        sortable: true,
    },
    {
        name: 'title',
        selector: (row) => row.title,
        sortable: true,
    },
    {
        name: 'price',
        selector: (row) => row.price,
        sortable: true,
    },

    ]
    const [records, setRecords] = useState([]);
    const [input, setInput] = useState({
        title:"",
        price:"",
    })

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((res) => {
                setRecords(res.products)
            })
    }, [])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('hello')
        let id = uuid();
         let uid = id.slice(0, 4)


        const products = {
            id: uid,
            title: input.title,
            price: input.price,
        }
        console.log(products)
        setRecords([ ...records, products ])
        alert('hi')

    }

    return (
        <div>
            <div>
                <Form>
                    <Form.Label>title</Form.Label>
                    <Form.Control
                        type='text'
                        name='title'
                        value={input.title}
                        onChange={handleChange}
                    />

                    <Form.Label>price</Form.Label>
                    <Form.Control
                        type='text'
                        name='price'
                        value={input.price}
                        onChange={handleChange}
                    />
                    <Button type='submit' onClick={(e) => handleSubmit(e)}>Add</Button>
                </Form>
            </div>

            <div>
                <DataTable
                    columns={column}
                    data={records}
                    fixedHeader
                    pagination
                    paginationRowsPerPageOptions={[5, 10, 20]}
                    paginationPerPage={10}
                    selectableRowsHighlight
                    selectableRows
                    highlightOnHover
                ></DataTable>

            </div>
        </div>
    )
}

export default DataTables
