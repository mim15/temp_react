import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
      <div>
        Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily
        unavailable
      </div>
      <Link to="/">Back</Link>
    </>
  )
}

export default NotFound
