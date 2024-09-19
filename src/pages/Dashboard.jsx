import { Link, Outlet } from "react-router-dom"
import './Dashboard.css'

const Dashboard = () => {
  return (
    <main className="dashboard">
        <aside>
            <Link to='vegetarian'>Vegetarian</Link>
            <Link to='non-vegetarian'>Non Vegetarian</Link>
        </aside>
        <section>
          <span className="glass"></span>
            <h2>Info de recetas</h2>
            <Outlet />
        </section>
    </main>
  )
}

export default Dashboard