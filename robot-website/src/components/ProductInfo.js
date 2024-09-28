import React from 'react';

function ProductInfo() {
    return (
        <div className="product-info-container">
            <h1>Product Information: Floor-Cleaning Robot Max</h1>

            <section className="product-description">
                <h2>Description</h2>
                <p>
                    The Floor-Cleaning Robot Max is a next-generation autonomous cleaning solution
                    designed for large-scale industrial and commercial applications. Equipped with
                    advanced sensors, AI-driven algorithms, and a powerful cleaning mechanism,
                    this robot ensures efficient and thorough cleaning of floors in warehouses,
                    factories, shopping malls, and other high-traffic areas.
                </p>
            </section>

            <section className="technical-details">
                <h2>Technical Specifications</h2>
                <ul>
                    <li><strong>Dimensions:</strong> 2.5m x 1.5m x 0.7m</li>
                    <li><strong>Weight:</strong> 80kg</li>
                    <li><strong>Max Speed:</strong> 1.5 m/s</li>
                    <li><strong>Cleaning Coverage:</strong> 1500 m² per hour</li>
                    <li><strong>Battery Life:</strong> 8 hours continuous operation</li>
                    <li><strong>Trash Payload Capacity:</strong> 25kg</li>
                    <li><strong>Sensor Suite:</strong> LIDAR, ultrasonic sensors, cameras</li>
                    <li><strong>Connectivity:</strong> Wi-Fi, IoT enabled for real-time monitoring</li>
                    <li><strong>Operating Modes:</strong> Auto, Manual, Scheduled</li>
                </ul>
            </section>

            <section className="features">
                <h2>Key Features</h2>
                <ul>
                    <li>Real-time obstacle detection and avoidance</li>
                    <li>Autonomous route planning and cleaning optimization</li>
                    <li>Smart scheduling and remote control via IoT integration</li>
                    <li>Modular design for easy maintenance and upgrades</li>
                    <li>Energy-efficient with extended battery life</li>
                    <li>Environment-friendly waste disposal and recycling options</li>
                </ul>
            </section>

            <section className="use-cases">
                <h2>Use Cases</h2>
                <ul>
                    <li>Cleaning large warehouses and industrial spaces</li>
                    <li>Maintaining cleanliness in airports and shopping malls</li>
                    <li>Handling high-traffic commercial areas with minimal human supervision</li>
                    <li>Enabling automated cleaning for public infrastructures</li>
                </ul>
            </section>

            <section className="environmental-impact">
                <h2>Environmental Impact</h2>
                <p>
                    The robot's eco-friendly design ensures minimal environmental impact. It collects
                    trash and debris, which can be processed through recycling or plastic-to-fuel
                    conversion mechanisms, contributing to sustainability efforts. Additionally, the
                    robot's energy-efficient operation helps reduce power consumption and carbon
                    footprint in commercial cleaning operations.
                </p>
            </section>
        </div>
    );
}

export default ProductInfo;
