import './InfoTag.css';
import { NavLink } from 'react-router-dom';

export default function InfoTag({ id, title, description, highlight, riskLevel }) {
  // Map risk levels to class names
  const riskClassMap = {
    Safe: 'HighlightSafe',
    'High Risk': 'HighlightRisk',
  };

  // Get class based on riskLevel prop
  const riskClass = riskClassMap[riskLevel] || '';

  // Condition: if highlight is "Safe" or "High Risk", render a <span>, else NavLink
  const isRiskHighlight = highlight === 'Safe' || highlight === 'High Risk';


  return (
    <div className="InfoTag">
      <div className="Information">
        <p className="Title">{title}</p>
        <p className="Description">{description}</p>
      </div>
      {isRiskHighlight ? (
        // Render a styled <span> for Safe / High Risk - no redirect
        <span className={`Highlight ${riskClass}`}>{highlight}</span>
      ) : (
        // Render a NavLink for others
        <NavLink className={`Highlight`} to={`/api/NewsFeedMore/${id}`}>
          {highlight}
        </NavLink>
      )}
    </div>
  );
}