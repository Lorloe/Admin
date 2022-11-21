import "./listWords.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataWordsTable from "../../components/datatable/DataWordsTable"

const ListWords = () => {
  return (
    <div className="listLesson">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataWordsTable/>
      </div>
    </div>
  )
}

export default ListWords