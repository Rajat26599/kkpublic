import { useSelector } from "react-redux"

const Dashboard = () => {
    const user = useSelector(state => state.authReducer)
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Hello {user.username}</h2>
        </>
    )
}

export default Dashboard