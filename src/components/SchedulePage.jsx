import { useState, useEffect } from "react";

const schedule = {
  "February 14": [
    { date: 14, time: 15, event: "Movie Night", reason: "Home Theater", options: ["Dinner Out", "Board Games"] },
  ],
  "February 15": [
    { date: 15, time: 12, event: "Picnic", reason: "Park", options: ["Brunch", "Museum Visit"] },
  ],
  "February 16": [
    { date: 16, time: 20, event: "Dinner Date", reason: "Restaurant", options: ["Cooking Together", "Ice Cream Outing"] },
  ],
};

export default function SchedulePage() {
  const [day, setDay] = useState("February 14");
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [chosenEvents, setChosenEvents] = useState({});
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
      setCurrentDate(new Date().getDate());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, newEvent) => {
    setChosenEvents((prev) => ({ ...prev, [index]: newEvent }));
  };

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div style={{ 
      padding: "16px", 
      backgroundColor: "#ffe6e6", 
      minHeight: "100vh", 
      position: "relative", 
      overflow: "hidden" 
    }}>
      {/* Hearts animation */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              fontSize: "24px",
              animation: `fall ${5 + Math.random() * 5}s linear infinite`,
            }}
          >❤️</div>
        ))}
      </div>
      
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
        <select 
          value={day} 
          onChange={(e) => setDay(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "2px solid #d6336c", backgroundColor: "#fff", color: "#d6336c", fontWeight: "bold" }}
        >
          {Object.keys(schedule).map((date) => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
      </div>
      
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#d6336c" }}>
        Schedule for {day}
      </h1>
      {schedule[day]?.map((item, index) => (
        <div 
          key={index} 
          style={{ 
            marginBottom: "16px", 
            padding: "5px 0px 5px 16px", 
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
            borderRadius: "8px", 
            backgroundColor: "#fff", 
            border: "2px solid #d6336c" 
          }}
        >
          {((currentDate !== item.date) || (currentHour < item.time - 1)) ? (
            <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#d6336c" }}>Plan for {item.time >= 12 ? item.time === 12 ? item.time + ":00 PM" : item.time % 12 + ":00 PM" : item.time + ":00 AM"} 🔒</h2>
          ) : (
            <>
              <h2 
                style={{ fontSize: "18px", fontWeight: "800", cursor: "pointer", color: "#d6336c" }} 
                onClick={() => toggleExpand(index)}
              >
                Plan for {item.time >= 12 ? item.time === 12 ? item.time + ":00 PM    " : item.time % 12 + ":00 PM    " : item.time + ":00 AM    "} {expanded[index] ? "▼" : "▶"}
              </h2>
              {expanded[index] && (
                <div>
                  <p style={{marginBottom: "-7px", fontSize: "14px"}}><strong>Event:</strong> {chosenEvents[index] || item.event}</p>
                  <p style={{marginBottom: "-7px", fontSize: "14px"}}><strong>Reasoning:</strong> {item.reason}</p>
                  <p style={{ fontWeight: "bold", marginBottom: "8px", fontSize: "14px" }}>Want to change the plan?</p>
                  {item.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleChange(index, option)}
                      style={{
                        margin: "0px 8px 12px 0px",
                        padding: "6px 8px",
                        border: "none",
                        borderRadius: "6px",
                        backgroundColor: "#d6336c",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "14px"
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}

      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}