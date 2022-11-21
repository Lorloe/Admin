import "./dataLessonTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { lessonColumns, lessonRows } from "../../dataLessonTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datalessonstable = () => {
  const [data, setData] = useState(lessonRows);

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
            <Link to="/lessons/test" style={{ textDecoration: "none" }}>
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
    <div className="datalessontable">
      <div className="datalessontableTitle">
        Add New Lesson
        <Link to="/lessons/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={lessonColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datalessonstable;
