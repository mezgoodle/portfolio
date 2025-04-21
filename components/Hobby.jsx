import React from "react";

const HobbyComponent = ({ name, icon, description }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          {icon && <i className={`${icon} fa-2x mb-2`} aria-hidden="true" />}
          <h5 className="card-title">{name}</h5>
          {description && <p className="card-text">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default HobbyComponent;
