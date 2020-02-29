import React from 'react';

export default function({ children }) {
  return (
    <div className="body">
      {children || <div className="no-data">No data</div>}
    </div>
  );
}
