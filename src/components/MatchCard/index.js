// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails

  const resultClassName = matchStatus === 'Won' ? 'heading-won' : 'heading-lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="para">{result}</p>
      <p className={resultClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
