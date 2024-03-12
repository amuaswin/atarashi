
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MdOutlineEdit } from "react-icons/md";
import { CiTrash } from "react-icons/ci";

let customStyles = {
  row: {
    style: {
      background: 'mediumspringgreen',
      fontSize: '18px',
      marginTop: '20px',
    },
  },
  headCells: { styles: { color: 'black', textAlign: "center", margin: '1rem' } },
  cells: {
    style: {
      color: 'black',
      backgroundColor: "ghostwhite",
      fontSize: "14px",
      textAlign: 'center',
    },
  },
};

function DataTables() {
  const columns = [
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: 'CategoryID',
      selector: (row) => row.categoryId,
      sortable: true,
    },
    {
      name: 'CreatedBy',
      selector: (row) => row.createdBy,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <div>
          <Button variant="outline-success" onClick={() => handleedit(row)}><MdOutlineEdit /> </Button>
          <Button variant="outline-danger" onClick={() => handleDelete(row.categoryId)}> <CiTrash /> </Button>
        </div>
      ),
    },
  ];

  const [records, setRecords] = useState([]);
  const [input, setInput] = useState({
    category: "",
    categoryId: 0,
    createdBy: '1',
    description: '',
  });

  useEffect(() => {
    axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
      .then((res) => {
        setRecords(res.data.categoryList);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to delete this category.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      input: 'text',
      inputLabel: 'Feedback',
      inputPlaceholder: 'Enter your feedback'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('http://catodotest.elevadosoftwares.com/Category/RemoveCategory', { categoryId: id })
          .then(() => {
            setRecords(records.filter(record => record.categoryId !== id));
            Swal.fire('Deleted!', 'Your category has been deleted.', 'success');
          })
          .catch(error => {
            console.error('Error deleting category:', error);
            Swal.fire('Error!', 'Failed to delete category.', 'error');
          });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.categoryId !== 0) {
      handleUpdate();
    } else {
      const newRecord = {
        category: input.category,
        description: input.description,
      };
      Swal.fire({
        title: 'Are you sure?',
        text: "You are about to submit the form.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit!',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", newRecord)
            .then(() => {
              axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
                .then((res) => {
                  setRecords(res.data.categoryList);
                })
                .catch((error) => {
                  console.error('Error fetching data:', error);
                });
              setInput({ category: "", categoryId: 0, createdBy: '', description: '' });
              Swal.fire('Submitted!', 'Your form has been submitted.', 'success');
            })
            .catch(error => {
              console.error('Error inserting category:', error);
              Swal.fire('Error!', 'Failed to insert category.', 'error');
            });
        } else {
          Swal.fire("Not Saved", "Your data has not been stored yet.", "info");
        }
      });
    }
  };

const handleedit = (row) => {
  setInput({
    category: row.category,
    categoryId: row.categoryId,
    createdBy: row.createdBy,
    description: row.description,
  });
 
};

const handleUpdate = () => {
  const updatedRecord = {
    category: input.category,
    description: input.description,
    categoryId: input.categoryId, 
  };
    axios.post(
      "http://catodotest.elevadosoftwares.com/Category/InsertCategory",
      updatedRecord
    )
      .then(() => {
        axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
          .then((res) => {
            setRecords(res.data.categoryList);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });

        Swal.fire({
          title: "Success!",
          text: "The data was updated successfully!",
          icon: "success",
        });
      })
      .catch(error => {
        console.error('Error updating category:', error);
      });
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            name='category'
            value={input.category}
            onChange={handleChange}
          />

          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            name='description'
            value={input.description}
            onChange={handleChange}
          />
          <Button type='submit'>{input.categoryId !==0 ? 'Update':'Add'}</Button>
        </Form>
      </div>

      <div>
        <DataTable
          columns={columns}
          data={records}
          fixedHeader
          pagination
          paginationRowsPerPageOptions={[10, 20, 30]}
          paginationPerPage={10}
          selectableRowsHighlight
          selectableRows
          highlightOnHover
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default DataTables;