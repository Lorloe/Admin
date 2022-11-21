import "./dataCourseTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { courseColumns, courseRows } from "../../dataCourseTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datacoursestable = () => {
  const [data, setData] = useState(courseRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/courses/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datacoursetable">
      <div className="datacoursetableTitle">
        Add New Course
        <Link to="/courses/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={courseColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datacoursestable;
