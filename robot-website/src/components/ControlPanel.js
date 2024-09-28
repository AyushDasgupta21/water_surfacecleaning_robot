import React, { useState } from 'react';

function ControlPanel() {
    const [speed, setSpeed] = useState(1);           // Speed in m/s
    const [intensity, setIntensity] = useState(50);  // Cleaning intensity as a percentage
    const [schedule, setSchedule] = useState('');    // Cleaning schedule
    const [mode, setMode] = useState('Auto');        // Cleaning modes (Auto/Manual)
    const [batteryLevel, setBatteryLevel] = useState(100); // Simulated battery level in %

    const handleSpeedChange = (e) => {
        setSpeed(e.target.value);
    };

    const handleIntensityChange = (e) => {
        setIntensity(e.target.value);
    };

    const handleScheduleChange = (e) => {
        setSchedule(e.target.value);
    };

    const handleModeChange = (e) => {
        setMode(e.target.value);
    };

    const handleSubmit = () => {
        alert(`Settings saved:
           Speed: ${speed} m/s
           Intensity: ${intensity}%
           Schedule: ${schedule}
           Mode: ${mode}`);
    };

    const handleBatteryCheck = () => {
        // Simulate checking battery level
        alert(`Current Battery Level: ${batteryLevel}%`);
    };

    return (
        <div>
            <h1>Robot Control Panel</h1>

            <div style={{ marginBottom: '20px' }}>
                <label>Set Speed (m/s):</label>
                <input
                    type="number"
                    value={speed}
                    min="0.1"
                    max="1.5"
                    step="0.1"
                    onChange={handleSpeedChange}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Set Cleaning Intensity (%):</label>
                <input
                    type="range"
                    value={intensity}
                    min="0"
                    max="100"
                    onChange={handleIntensityChange}
                />
                <span>{intensity}%</span>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Set Cleaning Schedule:</label>
                <input
                    type="datetime-local"
                    value={schedule}
                    onChange={handleScheduleChange}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Cleaning Mode:</label>
                <select value={mode} onChange={handleModeChange}>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
                </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <button onClick={handleSubmit}>Save Settings</button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <button onClick={handleBatteryCheck}>Check Battery Level</button>
            </div>

            <div>
                <p><strong>Note:</strong> All settings will automatically update the robot in real-time.</p>
            </div>
        </div>
    );
}

export default ControlPanel;
