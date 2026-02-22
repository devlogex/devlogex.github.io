import React from 'react';
import './GoalProgress.css';

interface Goal {
  id: string;
  title: string;
  category: string;
  target: number;
  current: number;
  unit: string;
  startDate: string;
  endDate: string;
  color: string;
}

interface GoalProgressProps {
  goal: Goal;
}

export default function GoalProgress({ goal }: GoalProgressProps) {
  const percentage = Math.min((goal.current / goal.target) * 100, 100);
  const remaining = goal.target - goal.current;

  return (
    <div className="goal-card">
      <div className="goal-header">
        <h3>{goal.title}</h3>
        <span className="goal-category">{goal.category}</span>
      </div>

      <div className="goal-stats">
        <div className="stat">
          <span className="stat-value">{goal.current}</span>
          <span className="stat-label">Current</span>
        </div>
        <div className="stat">
          <span className="stat-value">{goal.target}</span>
          <span className="stat-label">Target</span>
        </div>
        <div className="stat">
          <span className="stat-value">{remaining}</span>
          <span className="stat-label">Remaining</span>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: goal.color
          }}
        />
      </div>

      <div className="progress-info">
        <span>{percentage.toFixed(1)}% complete</span>
        <span>{goal.current} / {goal.target} {goal.unit}</span>
      </div>
    </div>
  );
}
