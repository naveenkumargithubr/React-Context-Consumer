import Playtime from '../Playtime'
import NewWaysToConnect from '../NewWaysToConnect'

import './index.css'

// the features section is return the child Elements (playtime,newWaysToconnect)
const FeaturesSection = () => (
  <div className="features-section-container">
    <Playtime />
    <NewWaysToConnect />
  </div>
)

export default FeaturesSection
