import "./listUsers.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataUsersTable from "../../components/datatable/DataUsersTable"

const ListUsers = () => {
  return (
    <div className="listUser">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataUsersTable/>
      </div>
    </div>
  )
}

export default ListUsers