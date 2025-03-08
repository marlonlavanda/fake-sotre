import React from 'react';

function EnvExample() {
  return (
    <div className="env-example">
      <h2>Environment Variables Example</h2>
      <ul>
        <li>
          <strong>API URL:</strong> {import.meta.env.VITE_API_URL}
        </li>
        <li>
          <strong>Feature X Enabled:</strong>{' '}
          {import.meta.env.VITE_ENABLE_FEATURE_X ? 'Yes' : 'No'}
        </li>
        {/* Note: Be careful exposing sensitive data */}
        <li>
          <strong>API Key:</strong> {import.meta.env.VITE_API_KEY}
        </li>
        <li>
          <strong>Mode:</strong> {import.meta.env.MODE}
        </li>
        <li>
          <strong>Development:</strong>{' '}
          {import.meta.env.DEV ? 'Yes' : 'No'}
        </li>
      </ul>
    </div>
  );
}

export default EnvExample; 