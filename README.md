**🧠 Advanced Assistive Brain-Controlled Smart Wheelchair**

**📌 Overview:**

- The Advanced Assistive Brain-Controlled Smart Wheelchair is an intelligent mobility solution designed to assist individuals with paralysis or severe motor disabilities.
- This system integrates Brain-Computer Interface (BCI), Eye Tracking, Voice Control, Health Monitoring, and IoT technologies to provide safe, autonomous, and user-friendly mobility.

The goal is simple:

👉 Enhance independence, safety, and quality of life for differently-abled individuals.

**📸 Project Image:**

<p align="center">
  <img src=images/Circuit_Diagram.png width="900"/>
</p>

<p align="center">
  <img src=images/Block Diagram.png width="900"/>
</p>

<p align="center">
  <img src=images/Mind_Map.png width="900"/>
</p>

| Feature Category | Description | Details |
|-----------------|------------|---------|
| 🧠 Brain-Controlled Navigation (BCI) | EEG-based control system | Uses EEG signals to control movement, enables hands-free operation, converts brain signals into directional commands |
| 👁️ Eye Tracking Control | Gaze-based navigation | Controls wheelchair using eye movement, useful for fully immobilized users |
| 🎤 Voice Control System | Voice command interface | Accepts voice commands via mobile or embedded system |
| ❤️ Health Monitoring System | Real-time health tracking | Monitors Heart Rate, SpO₂, Body Temperature, sends alerts for abnormal conditions |
| 📍 GPS & GSM Tracking | Location & emergency system | Live location tracking and SMS alerts in emergencies |
| 🚧 Obstacle Detection & Safety | Collision prevention system | Uses Ultrasonic/LiDAR sensors, automatic obstacle avoidance, emergency fail-safe |
| 🔋 Battery & Power Management | Energy optimization | Efficient power usage and battery monitoring system |

**🧠 System Architecture:**

The system consists of multiple modules:

| Module | Description | Key Functions |
|--------|------------|---------------|
| Signal Acquisition | Collects input signals from user | EEG signal acquisition (brain signals), Eye movement tracking |
| Signal Processing | Cleans and prepares data | Noise filtering (Kalman Filter), Feature extraction |
| Decision Making | Converts signals into actions | ML model / threshold logic, Command generation |
| Control System | Executes movement commands | Motor driver control, PID-based motion control |
| Safety Layer | Ensures user safety | Obstacle detection, Emergency stop mechanism |

**⚙️ Working Principle:**

| Step | Process | Description |
|------|--------|------------|
| 1 | Signal Capture | EEG sensor captures brain signals |
| 2 | Signal Processing | Signals are filtered and classified |
| 3 | Multi-Input Control | Eye tracking / voice used as alternative input |
| 4 | Command Transmission | Commands sent to microcontroller |
| 5 | Motion Execution | Motors move wheelchair (forward, left, right, stop) |
| 6 | Safety Check | Sensors detect obstacles and prevent collisions |
| 7 | Health Monitoring | Vital data monitored and transmitted in real-time |

**📂 Project Structure:**

| Directory/File | Description |
|---------------|------------|
| hardware/ | Contains circuit diagrams, PCB design, and hardware schematics |
| firmware/ | Embedded code for microcontrollers (Arduino, STM32) |
| ai-model/ | Machine Learning / Deep Learning models for EEG & gaze detection |
| mobile-app/ | Application for user control and monitoring |
| docs/ | Documentation including reports, diagrams, and presentations |
| README.md | Main project documentation file |


**🚀 Installation & Setup:**

**1️⃣ Clone Repository:**

git clone https://github.com/yashi7421/Advanced-Assistive-Brain-Controlled-Smart-Wheelchair.git
cd Advanced-Assistive-Brain-Controlled-Smart-Wheelchair

**2️⃣ Hardware Setup:**

- Connect sensors to microcontroller
- Assemble motor driver and wheelchair base
- Ensure proper power supply

**3️⃣ Software Setup:**

- Upload firmware using Arduino IDE / STM32CubeIDE
- Install required Python libraries:
- pip install opencv-python numpy tensorflow

**4️⃣ Run System:**

- Power ON system
- Connect sensors
- Start control interface

**📊 Applications:**

- Assistive technology for disabled individuals
- Smart healthcare systems
- Rehabilitation robotics
- AI-based mobility solutions

**🔮 Future Enhancements:**

- Deep Learning-based EEG classification
- Autonomous navigation using SLAM
- Computer vision-based obstacle detection (YOLO)
- Mobile app with real-time analytics
- Cloud-based health monitoring dashboard
