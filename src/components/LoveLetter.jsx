import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const letterParts = [
  "HAPPY FUCKING VALENTINE’S DAY MY BEAUTIFUL GORGEOUS PERFECT LOVELY GIRL.",
  "The other day we were talking about this on call but this is basically our THIRD valentines day together kayomi. We’ve been together for two years but three years ago we were still decorating cards for each other and having so much fun pretending to be a couple and just looking back at that and thinking about how good our chemistry is and how well we got along, well enough for us to be doing things like that and having SO much fun just fucking around with each other and laughing about every little thing and enjoying every moment just confirms that I need no other evidence to know we’re a perfect fit for each other.",
  "You’ve always  meant so much to me and even before we were together, we valued so many little things with each other like putting up the card that I gave you and smelling the bracelets we gave each other and making a point to never miss a hug. I was literally a fucking “where my hug at?” guy with you and you didn’t care at all because we are and always have been such a perfect fit for each other. Since middle school, time with you has always been nothing but laughter and our conversations are always so long and every single day since we started to get close in 10th grade I’ve looked forward to talking to you. Even when we didn’t talk for a while I loved seeing a message from you because it was like one of the most special/favorite things in my life came back to me even for just a moment. I’ve always valued you so much kayomi and it goes past just romance. We have a literal soul tie and it is SO obvious like it couldn’t be more clear, there’s so much invisible string theory between us and the way we were raised and the values we have and the things we notice about each other all fit together just perfectly.",
  "The way our relationship evolved during junior and senior year made me so much closer to you and being able to understand you at this level and getting to notice all the small things about what makes you as a person and just KNOW you the way that I do feels like such a privilege. Every time I hear the words “I’m so lucky to have you” come out of your mouth I just think about how lucky I am to have a Kayomi who feels that way, because I’ll always feel that way about you. You are such a unique and special person and it’s a true love and soul tie connection between us that’s let us come this far and make it past so  many challenges, because at the end of the day, if we REALLY didn’t understand each other, we wouldn’t be how we are now. You always make me want to strive to become a better person just because of how much I look up to who you are as a person and idolize you, without thinking about solely our relationship. You have such a beautiful character and you are SO lovable you’re genuinely just irresistible. I’m really glad you feel like I’m worthy to get the attention that I do and get to spend time with you that I do and I love you so much. I can’t emphasize enough the way that I see you and how irreplaceable you are and just how incredibly impactful you’ve been in my life just because of these things and that’s honestly how love should be. I hope I’ve had as much of an effect in your life as you have mine because the past two years with you have just been incredible with how much I’ve learned about you, from you, with you and how much of live we’re just experienced together. You’re who I go to about everything in between, not who I have to explain everything to after. You’re my person now and forever.",
  "This weekend is going to be so amazing with you just like any amount of time with you always is and I’m not looking forward to having to leave you at all Kayomi. I hope you know how much I’m affected by a lot of things like being away from you or whenever we’re off in general even though I know I don’t make it clear on my own. I’m really trying to work on my communication and I want to be better both for myself and for our relationship but I really just want you to realize how attached I am to you and how much you mean to me. I never take you for granted even if I act like I don’t care sometimes I’m always so upset about the smallest things because of how much you mean to me. I love you unconditionally and that’s something I’ve been saying from the start because I just KNOW who you are and how much I need you in my life and how much I need to be enough for you and I will be. Just stick around baby please. I’m honored to be your Valentine this year and we definitely have a lifetime’s worth of Valentine’s Days left to come 😋",
  "To maintaining our roots, To more hugs and more sniffing 🔔, Happy Valentine's Day my beautiful baby Kayummy."
];

export default function LoveLetter() {
    const [displayedLines, setDisplayedLines] = useState([]);
  
    useEffect(() => {
        let index = 0;
  
        const interval = setInterval(() => {
            if (index < letterParts.length) {
                setDisplayedLines((prevLines) => [...prevLines, letterParts[index]]);
                index++;
            }
        }, 500);
  
        return () => clearInterval(interval);
    }, []);
  
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to right, #ff758c, #ff7eb3)",
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "flex-start",  // Align content at the top
            color: "white",
            textAlign: "center",
            paddingTop: "12px",
            overflowY: "auto", // Allow scrolling if necessary
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center content horizontally
                padding: "12px",
                maxHeight: "100vh",  // Restrict the height to the viewport size
                overflowY: "auto",   // Enable scrolling if content overflows
            }}>
                {displayedLines.map((line, i) => (
                    <h2 key={i} style={{ fontSize: "1.5rem", maxWidth: "80%" }}>
                        <Typewriter 
                            words={[line]} 
                            loop={1}
                            typeSpeed={25} 
                            cursor={i === displayedLines.length - 1}
                            delaySpeed={1000}
                        />
                    </h2>
                ))}
            </div>
        </div>
    );
}
