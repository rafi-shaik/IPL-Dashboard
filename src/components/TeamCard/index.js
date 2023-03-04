// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, teamImageUrl, id} = details

  return (
    <li className="card">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
