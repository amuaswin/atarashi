import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { logDOM } from "@testing-library/react";

let customStyles = {
  headRow: {
    style: {
      backgroundColor: "mediumspringgreen",
      fontSize: "18px",
      marginTop: "20px",
      
    },
  },
  headCells: {
    style: { color: "black", textAlign: "center", margin: "1rem" },
  },
  cells: {
    style: {
      color: "black",
      backgroundColor: "ghostwhite",
      fontSize: "14px",
      textAlign: "center",
      
    },
  },
};

function Datatableapi() {
  const [result, setResult] = useState({
    createdBy: 1,
    categoryId: 0,
    category: "",
    description: "",
  });
  const [records, setRecords] = useState([]);
  let [edit, setEdit] = useState(false);
  let [text, setText] = useState("Save");

  const handleChange = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get("http://catodotest.elevadosoftwares.com//Category/GetAllCategories")
      .then((res) => {
        setRecords(res.data.categoryList);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      handleUpdate();
    } else {
      handleSave();
    }
  };

  let handleSave = () => {
    console.log(result);
    let data = {
      createdBy: 1,
      categoryId: 0,
      category: result.category,
      description: result.description,
    };
    console.log(data);

    axios.post(
      "http://catodotest.elevadosoftwares.com/Category/InsertCategory",
      data
    );

    Swal.fire({
      title: "Good job!",
      text: "The data Was be saved!",
      icon: "success",
    });
  };

  let handleUpdate = () => {
    console.log(result);
    let data = {
      createdBy: 1,
      categoryId: result.categoryId,
      category: result.category,
      description: result.description,
    };
    console.log(data);

    axios.post(
      "http://catodotest.elevadosoftwares.com/Category/InsertCategory",
      data
    );
    Swal.fire({
      title: "Good job!",
      text: "The data Was be updated!",
      icon: "success",
    });
  };

  let handleDelete = (id) => {
    let cId = id;
    console.log(cId);
    let data = {
      categoryId: id,
      removedRemarks: "Test",
      createdBy: 1,
    };

    axios.post(
      "http://catodotest.elevadosoftwares.com/Category/RemoveCategory",
      data
    );

    Swal.fire({
      title: "Good job!",
      text: "Deleted",
      icon: "success",
    });
  };

  const columns = [
    {
      name: "createdBy",
      selector: (row) => row.createdBy,
      sortable: true,
    },
    {
      name: "categoryId",
      selector: (row) => row.categoryId,
      sortable: true,
    },
    {
      name: "category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Button
            variant="secondary"
            onClick={() => handleEdit(row.categoryId)}
          >
            Edit
          </Button>
          &nbsp;&nbsp;
          <Button variant="danger" onClick={() => handleDelete(row.categoryId)}>
            delete
          </Button>
        </div>
      ),
    },
  ];

  let handleEdit = (id) => {
    let res = records.filter((val) => val.categoryId == id);
    res.map((item) => {
      setResult({
        ...result,
        categoryId: item.categoryId,
        category: item.category,
        description: item.description,
      });

      setText("Update");
      setEdit(true);
    });
  };

  return (
    <div>
      <h3 className="h3" style={{color:""}}>DataTable</h3>
      <div className="form-db">
        <Form onSubmit={handleSubmit}>
          <Row className="md=12">
            <Form.Label className="lbl">Category:</Form.Label>
            <Form.Group as={Col} md="3" className="inp">
              <Form.Control
                required
                type="text"
                name="category"
                value={result.category}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Label className="lbl">Description:</Form.Label>
            <Form.Group as={Col} md="3">
              <Form.Control
                required
                type="text"
                name="description"
                value={result.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Button type="submit" className="sbt">
            {text}
          </Button>
          &nbsp;
          <Button>Cancel</Button>
        </Form>
      </div>
      <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        selectableRows
        selectableRowsHighlight
        highlightOnHover
      />
    </div>
  );
}

export default Datatableapi;