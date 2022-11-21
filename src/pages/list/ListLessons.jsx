import "./listLessons.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataLessonsTable from "../../components/datatable/DataLessonsTable"

const ListLessons = () => {
  return (
    <div className="listLesson">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataLessonsTable/>
      </div>
    </div>
  )
}

export default ListLessons