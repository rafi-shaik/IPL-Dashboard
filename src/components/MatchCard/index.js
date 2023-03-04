// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails

  const resultClassName = matchStatus === 'Won' ? 'heading-won' : 'heading-lost'

  return (
    <div className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <h1 className="team-name">{competingTeam}</h1>
      <p className="para">{result}</p>
      <p className={resultClassName}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
