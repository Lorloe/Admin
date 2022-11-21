import "./listCourses.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataCoursesTable from "../../components/datatable/DataCoursesTable"

const ListCourses = () => {
  return (
    <div className="listCourse">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataCoursesTable/>
      </div>
    </div>
  )
}

export default ListCourses