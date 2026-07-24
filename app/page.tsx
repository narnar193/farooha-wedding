"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";




export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

const [playingIntro, setPlayingIntro] = useState(false);
const [backgroundImage, setBackgroundImage] = useState("/images/window-cover.jpg");

  const [opened, setOpened] = useState(false);
  const [showHeroText, setShowHeroText] = useState(false);
 

  const weddingDate = new Date("2026-09-04T16:00:00").getTime();

  const flowers = Array.from({ length: 20 });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    guest_name: "",
    attendance: "",
    guests: "",
    message: "",
  });
  useEffect(() => {
  document.body.style.overflow = opened ? "auto" : "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [opened]);
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
          (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_5ae2sal",
        "template_tivajwg",
        formData,
        "Yj3T58pMdEWRRFQW9"
      );

      alert("RSVP sent successfully 💍");

      setFormData({
        guest_name: "",
        attendance: "",
        guests: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
  
 <main className="relative min-h-screen text-white">
<div
  className="fixed inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
  }}
/>



{playingIntro && (
  <video
  ref={videoRef}
  className={`fixed inset-0 w-full h-full object-cover ${
    showHeroText ? "z-10" : "z-50"
  }`}
    src="/videos/mainvid.mp4"
    autoPlay
    playsInline
    muted
onEnded={(e) => {
  const video = e.currentTarget;

  video.pause();
  video.currentTime = video.duration - 0.05;

  setShowHeroText(true);
}}
  />
)}


{/* SOFT OVERLAY */}
<div className="fixed inset-0 bg-black/10" />

      {/* SOFT GLOWS */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#F8C8DC] rounded-full blur-[120px] opacity-20" />

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[#BFD7ED] rounded-full blur-[120px] opacity-20" />

      <div className="fixed top-[40%] left-[40%] w-[300px] h-[300px] bg-[#FCEEB5] rounded-full blur-[100px] opacity-10" />

      {/* FLOWER EXPLOSION */}
      {opened && (
        <div className="absolute inset-0 pointer-events-none z-50">

          {flowers.map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 1,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1.5,
                x: Math.random() * 1000 - 500,
                y: Math.random() * 800 - 400,
              }}
              transition={{
                duration: 2,
                delay: i * 0.05,
              }}
              className="absolute left-1/2 top-1/2 text-4xl"
            >
              🌸
            </motion.div>
          ))}

        </div>
      )}
      

    {/* HERO SECTION */}
    
  
<section className="relative z-10 h-screen w-full">

  <div className="relative min-h-screen flex items-center justify-center px-6 z-40">

  
    {/* Top Text */}
    <motion.p
    initial={false}
animate={{
  opacity: showHeroText ? 1 : 0,
  y: showHeroText ? 0 : 80,
}}
transition={{
  duration: 1.2,
  delay: 0.2,
}}
      className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        
        text-center
text-black
        text-xl
        md:text-2xl
       leading-snug
        w-[90%]
max-w-md
        z-20
        bg-[#C0BBB3]/90
backdrop-blur-sm
px-6
py-2
rounded-full
shadow-lg
      "
     
    >
      Together With Our Families,
    </motion.p>
  
    {/* Names */}
    <motion.h1
initial={false}

animate={{
  opacity: showHeroText ? 1 : 0,
  y: showHeroText ? 0 : 120,
  scale: showHeroText ? 1 : 0.95,
}}

transition={{
  duration: 1.5,
  ease: [0.22, 1, 0.36, 1], // حركة ناعمة
}}
   className="
absolute
left-1/2
top-[20%]
-translate-x-1/2
text-center
leading-[0.82]
text-[#1F3A2E]
text-[80px]
md:text-[140px]
z-20
"
      style={{
        fontFamily: "'Great Vibes', cursive",
      }}
    >
      Omar
      <br />
      <span className="text-[56px] md:text-[90px]">&</span>
      <br />
      Farah
    </motion.h1>

    {/* Bottom Text */}
    <motion.p
   initial={false}
animate={{
  opacity: showHeroText ? 1 : 0,
  y: showHeroText ? 0 : 80,
}}
transition={{
  duration: 1.2,
  delay: 0.6,
}}
      className="
absolute
top-[83%]
left-1/2
-translate-x-1/2
text-center
text-black
text-xl
md:text-2xl
leading-snug
w-[90%]
max-w-md
z-20
bg-[#C0BBB3]/90
backdrop-blur-sm
px-8
py-4
rounded-2xl
shadow-lg
"
    >
      Would love for you to join us
      <br />
      on Our Big Day
    </motion.p>

<motion.button
  initial={false}
  animate={{
    opacity: showHeroText ? 1 : 0,
    y: showHeroText ? 0 : 30,
  }}
  transition={{
    duration: 1,
    delay: 1,
  }}
onClick={() => {
  setOpened(true);

  setBackgroundImage("/images/venue.png");

  setTimeout(() => {
    setPlayingIntro(false);
  }, 500);
  setTimeout(() => {
    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, 300);
}}
  className="
    absolute
    top-[72%]
    left-1/2
    -translate-x-1/2
    px-10
    py-4
    rounded-full
    bg-[#7F9486]
    text-white
    font-semibold
    tracking-widest
    shadow-xl
    hover:scale-105
    transition
    z-30
  "
>
  RSVP NOW
</motion.button>

   <div
  className="
    absolute
    left-1/2
    top-[60%]
    -translate-x-1/2
    -translate-y-1/2
    z-50
  "
>
  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      if (!playingIntro && !showHeroText) {
        setPlayingIntro(true);
      } else if (showHeroText) {
        setOpened(true);

        setTimeout(() => {
          detailsRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }, 300);
      }
    }}


    className="
      w-[170px]
      h-[170px]
      rounded-full
      bg-transparent
      cursor-pointer
    "
  />
</div>

  </div>
</section>

      {/* MAIN CONTENT */}
      

  <motion.div
  ref={detailsRef}
  initial={{ opacity: 0, y: 80 }}
  animate={{
    opacity: opened ? 1 : 0,
    y: opened ? 0 : 80,
  }}
  transition={{ duration: 1 }}
  className="
    relative
    text-center
    min-h-screen
  "
><div className="absolute inset-0 bg-white/25 backdrop-blur-[2px]" />

<div className="relative z-10">
          {/* WEDDING DETAILS */}
          <section className="relative z-10 py-32 px-6">

            <div className="max-w-5xl mx-auto bg-white/30 border border-white/30 backdrop-blur-md rounded-[40px] p-10 shadow-xl">

              <h2 className="text-5xl font-bold text-center mb-16 text-[#1F3A2E] " style={{
        fontFamily: "'Great Vibes', cursive",
      }}>
                Wedding Details 
              </h2>

              <div className="grid md:grid-cols-3 gap-8 text-center">

                <div className="bg-white/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#1F3A2E]">
                    Date
                  </h3>

                  <p className="text-[#000000]">
                    September 4, 2026
                  </p>
                </div>

                <div className="bg-white/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#1F3A2E]">
                    Time
                  </h3>

                  <p className="text-[#000000]">
                    4:00 PM
                  </p>
                </div>

                <div className="bg-white/40 rounded-3xl p-8 text-center">
  <h3 className="text-2xl font-semibold mb-4 text-[#1F3A2E]">
    Venue
  </h3>

  <p className="text-black mb-4">
    Casa Novelle
  </p>

  <a
    href="https://maps.app.goo.gl/Ydwa9ruBqbZgmhxH9?g_st=ic"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/location-qr.jpeg"
      alt="Venue QR Code"
      className="w-28 h-28 mx-auto rounded-lg hover:scale-105 transition"
    />
  </a>

  <p className="mt-3 text-sm text-[#1F3A2E]">
    Scan to Open Location
  </p>
</div>

              </div>

            </div>

          </section>

          {/* COUNTDOWN */}
          <section className="relative z-10 py-32 px-6">

            <div className="max-w-6xl mx-auto text-center">

              <h2 className="text-5xl font-bold mb-16 text-[#1F3A2E]"style={{
        fontFamily: "'Great Vibes', cursive",
      }}>
                Countdown To Forever 
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="bg-white/30 border border-white/30 backdrop-blur-md rounded-[30px] p-10">
                  <h3 className="text-5xl font-black text-[#8499a9]">
                    {timeLeft.days}
                  </h3>

                  <p className="mt-4 text-[#000000]">
                    Days
                  </p>
                </div>

                <div className="bg-white/30 border border-white/30 backdrop-blur-md rounded-[30px] p-10">
                  <h3 className="text-5xl font-black text-[#8e9548]">
                    {timeLeft.hours}
                  </h3>

                  <p className="mt-4 text-[#000000]">
                    Hours
                  </p>
                </div>

                <div className="bg-white/30 border border-white/30 backdrop-blur-md rounded-[30px] p-10">
                  <h3 className="text-5xl font-black text-[#cc7c73]">
                    {timeLeft.minutes}
                  </h3>

                  <p className="mt-4 text-[#000000]">
                    Minutes
                  </p>
                </div>

                <div className="bg-white/30 border border-white/30 backdrop-blur-md rounded-[30px] p-10">
                  <h3 className="text-5xl font-black text-[#d5c7d6]">
                    {timeLeft.seconds}
                  </h3>

                  <p className="mt-4 text-[#000000]">
                    Seconds
                  </p>
                </div>

              </div>

            </div>

          </section>

         
 
         

         
          {/* dress code */}
<section className="relative z-10 py-32 px-6">

  <div
    className="max-w-5xl mx-auto
    bg-white/30
    border border-white/40
    backdrop-blur-md
    rounded-[50px]
    p-12 shadow-xl
    relative overflow-hidden"
  >


    {/* CONTENT */}
    <div className="relative z-10 text-center">

      <h2
        className="text-6xl mb-10 text-[#1F3A2E]"
       style={{
        fontFamily: "'Great Vibes', cursive",
      }}
      >
       Dress Code
      </h2>
<div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-8">

  <motion.img
    whileHover={{ scale: 1.05 }}
    src="/images/girl-dress-code.png"
    alt="Ladies Dress Code"
    className="w-[420px] rounded-3xl shadow-xl"
  />

  <motion.img
    whileHover={{ scale: 1.05 }}
    src="/images/boy-dress-code.png"
    alt="Gentlemen Dress Code"
    className="w-[420px] rounded-3xl shadow-xl"
  />

</div>
     
   </div>
   </div>
   </section>
        

{/*photos */}
          <section className="relative z-10 py-32 px-6">

            <div className="max-w-3xl mx-auto bg-white/30 border border-white/30 backdrop-blur-md rounded-[40px] p-10 shadow-xl">

              <h2 className="text-5xl font-bold text-center mb-12 text-[#1F3A2E]"style={{
        fontFamily: "'Great Vibes', cursive",
      }}>
        Help Us Relive The Magic
                
              </h2>
              <p className="text-black mb-4 text-center">
    Scan and share your favorite moments and all the memories with the happy couple
  </p>
   <a
    href="https://drive.google.com/drive/folders/1ywEIz9Nnw6GQWxOQTw3FKSTGLExfNK4o?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/google-drive-qr.png"
      alt="Venue QR Code"
      className="w-28 h-28 mx-auto rounded-lg hover:scale-105 transition"
    />
  </a>

 
</div>
</section>
          {/* RSVP */}
          <section className="relative z-10 py-32 px-6">

            <div className="max-w-3xl mx-auto bg-white/30 border border-white/30 backdrop-blur-md rounded-[40px] p-10 shadow-xl">

              <h2 className="text-5xl font-bold text-center mb-12 text-[#1F3A2E]"style={{
        fontFamily: "'Great Vibes'"
      }}>
                RSVP 
              </h2>

              <form onSubmit={sendEmail} className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.guest_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guest_name: e.target.value,
                    })
                  }
                  className="w-full p-5 rounded-2xl bg-white/50 border border-white/40 outline-none text-[#6F6187]"
                  required
                />

                <select
                  value={formData.attendance}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      attendance: e.target.value,
                    })
                  }
                  className="w-full p-5 rounded-2xl bg-white/50 border border-white/40 outline-none text-[#6F6187]"
                  required
                >
                  <option value="">Will you attend?</option>
                  <option value="Yes">Yes, attending ✨</option>
                  <option value="No">Sorry, can't attend</option>
                </select>

                <input
                  type="number"
                  placeholder="Number of Guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guests: e.target.value,
                    })
                  }
                  className="w-full p-5 rounded-2xl bg-white/50 border border-white/40 outline-none text-[#6F6187]"
                />

                <textarea
                  placeholder="Write a sweet message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full p-5 rounded-2xl bg-white/50 border border-white/40 outline-none h-40 text-[#6F6187]"
                />

                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl
                  bg-[#8096ad]
                  text-[#ffffff]
                  text-lg font-bold
                  hover:scale-[1.02]
                  transition"
                >
                  Send RSVP 
                </button>

              </form>

            </div>

          </section>

       

      </div>

 </motion.div>
      
              
                 </main> )}
                 
