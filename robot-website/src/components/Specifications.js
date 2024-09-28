import React from 'react';

function Specifications() {
    return (
        <div className="specifications-container">
            <h1>Specifications of Floor-Cleaning Robot Max</h1>

            <section className="technical-specs">
                <h2>Technical Specifications</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dimensions</td>
                            <td>2.5m x 1.5m x 0.7m</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>80kg</td>
                        </tr>
                        <tr>
                            <td>Max Speed</td>
                            <td>1.5 m/s</td>
                        </tr>
                        <tr>
                            <td>Cleaning Coverage</td>
                            <td>1500 m² per hour</td>
                        </tr>
                        <tr>
                            <td>Battery Life</td>
                            <td>8 hours continuous operation</td>
                        </tr>
                        <tr>
                            <td>Trash Payload Capacity</td>
                            <td>25kg</td>
                        </tr>
                        <tr>
                            <td>Sensor Suite</td>
                            <td>LIDAR, ultrasonic sensors, cameras</td>
                        </tr>
                        <tr>
                            <td>Connectivity</td>
                            <td>Wi-Fi, IoT enabled for real-time monitoring</td>
                        </tr>
                        <tr>
                            <td>Operating Modes</td>
                            <td>Auto, Manual, Scheduled</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="operational-capabilities">
                <h2>Operational Capabilities</h2>
                <ul>
                    <li>Real-time obstacle detection and avoidance</li>
                    <li>Autonomous route planning and cleaning optimization</li>
                    <li>Energy-efficient operation with low noise levels</li>
                    <li>Remote monitoring and control via a dedicated app</li>
                    <li>Smart scheduling for unattended cleaning</li>
                </ul>
            </section>

            <section className="safety-features">
                <h2>Safety Features</h2>
                <ul>
                    <li>Emergency stop button</li>
                    <li>Automatic return to charging station when battery is low</li>
                    <li>Robust design to withstand various environmental conditions</li>
                    <li>Regular software updates for enhanced security</li>
                </ul>
            </section>
        </div>
    );
}

export default Specifications;
