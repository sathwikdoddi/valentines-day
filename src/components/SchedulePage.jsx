import { useState, useEffect } from "react";

const schedule = {
  "February 14": [
    { date: 14, time: 10, hidden: false, event: "Sathy Leaves Atlanta 😝", reason: "Erm...because I want to see my girlfriend.", options: ["Make him leave because you hate him", "You can kill him if you want too I guess", "Please let me come"] },
    { date: 14, time: 15, hidden: false, event: "Sathy Arrives in Gainesville 😼", reason: "Same reasons as before, duh, I love you", options: ["You have no choice lol I'm arriving"] },
    { date: 14, time: 16, hidden: false, event: "Sathy's Secret Business", reason: "I have some business to attend to... DO NOT PICK ME UP FROM BUS STATION, I will arrive at your doorstep.", options: ["No choice once again :P"] },
    { date: 14, time: 17, hidden: true, event: "Romantic Stroll around the Lake 💋", reason: "I really want to see the lake and all the bats and love how the sunset looked here in the piccys you sent me. It's okay if we wanna go tomorrow instead and do something else today.", options: ["GYMMYYYYYY", "Relax (ROT 😉)"] },
    { date: 14, time: 18, hidden: true, event: "Return from lake and take showiez :)", reason: "We can come back and get ready for dinner after coming back from the lake, or we can have a later dinner and go to the lake NOW for a little bit and watch the sunset.", options: ["LETS GO TO THE LAKE"] },
    { date: 14, time: 19, hidden: true, event: "Dinner at Piesanos", reason: "We wanted to try Piesanos and make a reservation and everything but if you think the Reitz pizza is more yummy we can also go get that if its open baby 😋", options: ["Reitz Pizza", "Subway", "Quesadillas", "Small Snackiez", "Other dinner idea (I'm sowwee)"] },
    { date: 14, time: 21, hidden: false, event: "Our Pre-Pre Freaky Pre 🤗", reason: "Pretty self-explanatory I'd say... if it's too much of a hassle to get all the goods to your apartment we can have a small one and then go to one of the other pres.", options: ["Why u want sumting else ? 😔"] },
    { date: 14, time: 22, hidden: false, event: "PRE/PARTAYYYYYY", reason: "WE GET TO PARTY AND DANCE TOEGETHER AGAIN WOOOHOOOOOOO, WE CAN GO TO ANY OF THE OTHER PRES OR STRAIGHT TO THE PARTY", options: ["GO TO ONE OF THE OTHER PRES", "PARTAYYYYYYYYYYYYY!!!!! (THIS IS HAPPENING ANYWAYS)"] },
  ],
  "February 15": [
    { date: 15, time:  3, hidden: false, event: "Coming back from the partay and we get freaky 😏", reason: "We missed out on this opportunity last time and you were so sad, gotta make up for it by being twice as freaky 😜", options: ["We eepy like kittens after long night 🐱😴🫂"] },
    { date: 15, time: 11, hidden: false, event: "After last night, we're probably getting up around this time...", reason: "Even if we wake up we need our rotting time 😋 We could also get food and then come back and rot if we want tbh", options: ["Wake up earlier and get brekky together at the new bagel place"] },
    { date: 15, time: 12, hidden: true, event: "Get ready and go pick up Ciabatta materials from Publix 😋", reason: "It has been on our bucket list for SOOOO long, we must...", options: ["Reitz Pizza place if we didn't get to before??", "Just get food from somewhere else"] },
    { date: 15, time: 14, hidden: true, event: "WE MAKE DA CIABATTAAAAAA AND WE EAT DA CIABATTAAA", reason: "Just a continuation of the previous step teehee", options: ["Or we just finish up eating whatever else we decided to do around this time"] },
    { date: 15, time: 16, hidden: true, event: "We can go to the lake if we didn't get to go yesterdayyy", reason: "I just really want to spend some time with you at this lake this time at UF baby", options: ["GYMMYY TODAY IF WE DIDN'T GET TO YESTERDAYY", "GO TO THE MOVIESSSSS NOW"] },
    { date: 15, time: 17, hidden: true, event: "TIME FOR THE MOVIESSSSS", reason: "We wanted to go to the movies and see that whole downtown/Waterfordy", options: ["We might still be at the gym/lake if we decided to do that", "Spend a night in instead and watch a movie in your apartment", "Go to the lake now instead??", "Rot some moreeee"] },
    { date: 15, time: 18, hidden: true, event: "Go to the lake now if we decided to gym and skip the movies", reason: "WE CAN SCOOTER THERE AND SEE THE SUNSET IT'LL BE SO KEWLLLL", options: ["We might be watching the movie right now if we decided to do that"] },
    { date: 15, time: 20, hidden: true, event: "DINNER TIMEEEE - We could go out to eat or just make quesadillas/ciabatta now insteaddd", reason: "I'm okay with anything pookay but if we didn't get to make ciabatta before I really want to now otherwise we can just make quesadilla's or order food in", options: ["Quesadillas", "Go out", "Eat ciabatta", "Other dinner idea (I sowwee again)", "Meet with your friends if you want (I've never experienced one of your Honors nights)"] },
    { date: 15, time: 21, hidden: true, event: "Rest of the night is up for grabs... (More freakiness perhaps). We can also all-nighter if we want 🤗.", reason: "More alone time with you my sexy perfact baby gorjus gorl", options: ["Stay in", "Walk around campus at night", "Meet with your friends if you want (Experience the Honors night and then come back and mind our businesss 😉)"] },
  ],
  "February 16": [
    { date: 16, time: 8, hidden: false, event: "Sathy has to leave Gainesville ☹️", reason: "If only the pooja was still next week baby I could've gotten some extra time with you this day 😢", options: ["I wish we had other options baby"] },
    { date: 16, time: 10, hidden: false, event: "Cry for the rest of the day 😕", reason: "I'm gonna miss you so much Kayomi I just know this weekend with you is going to be/is so perfect and amazing. I really hope you can come to Atlanta soon and we can repeat spending a whole weekend together 🤗.", options: ["JUST COME BACK TO ATLANTA WITH ME NOW"] },
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
        Sathy and Kayummy's Valentine's Day Weekend Schedule for {day} 💞
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
          {((currentDate !== item.date) || (currentHour < item.time - 6)) && item.hidden ? (
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