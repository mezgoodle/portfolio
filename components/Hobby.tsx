import React from "react";

interface HobbyProps {
  name: string;
  description?: string;
  icon?: string;
}

const HobbyComponent: React.FC<HobbyProps> = ({ name, icon, description }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          {icon && <i className={`${icon} fa-2x mb-2`} />}
          <h5 className="card-title">{name}</h5>
          {description && <p className="card-text">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default HobbyComponent;
