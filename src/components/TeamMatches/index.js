// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamData: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getFormattedDetails = obj => ({
    umpires: obj.umpires,
    result: obj.result,
    manOfTheMatch: obj.man_of_the_match,
    id: obj.id,
    date: obj.date,
    venue: obj.venue,
    competingTeam: obj.competing_team,
    competingTeamLogo: obj.competing_team_logo,
    firstInnings: obj.first_innings,
    secondInnings: obj.second_innings,
    matchStatus: obj.match_status,
  })

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const newObject = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedDetails(data.latest_match_details),
      recentMatches: data.recent_matches.map(each =>
        this.getFormattedDetails(each),
      ),
    }
    console.log(newObject)
    this.setState({teamData: newObject, isLoading: false})
  }

  renderRecentMatches = () => {
    const {teamData} = this.state
    const {recentMatches} = teamData
    return (
      <ul className="match-details-container">
        {recentMatches.map(each => (
          <MatchCard key={each.id} matchDetails={each} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamData
    return (
      <div className="responsive-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <LatestMatch details={latestMatchDetails} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
