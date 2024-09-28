import React from 'react';

function Algorithm() {
    return (
        <div>
            <h1>Robot's Navigation Algorithm</h1>
            <p>
                Our robot uses a combination of path-planning and obstacle-avoidance algorithms,
                enhanced with AI to autonomously clean areas. It uses a real-time decision-making
                system, analyzing the environment through sensors like LIDAR, cameras, and ultrasonic sensors.
            </p>
            <h2>How it Works:</h2>
            <ol>
                <li>
                    **Environment Mapping**: The robot first maps the area using its sensors to
                    understand the layout and potential obstacles.
                </li>
                <li>
                    **Path Planning**: Using Dijkstra's or A* (A-star) algorithm, the robot determines
                    the most efficient cleaning path.
                </li>
                <li>
                    **Dynamic Obstacle Avoidance**: If an obstacle is detected, the robot recalculates
                    its path in real time.
                </li>
                <li>
                    **Cleaning Optimization**: The algorithm adjusts cleaning intensity based on the
                    surface's dirtiness levels using real-time data.
                </li>
            </ol>
        </div>
    );
}

export default Algorithm;
