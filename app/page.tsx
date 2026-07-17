"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";




export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

const [playingIntro, setPlayingIntro] = useState(false);
const [backgroundImage, setBackgroundImage] = useState("/images/window-cover.jpg");

  const [opened, setOpened] = useState(false);
 

  const weddingDate = new Date("2026-09-04T15:00:00").getTime();

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
  
      <main className="relative min-h-screen overflow-hidden text-white">

<div
  className="fixed inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
  }}
/>

{playingIntro && (
  <video
    ref={videoRef}
    className="fixed inset-0 w-full h-full object-cover z-50"
    src="/videos/window-intro.mp4"
    autoPlay
    muted
    playsInline
    onEnded={() => {
      setPlayingIntro(false);
      setBackgroundImage("/images/venue.jpg");
      setOpened(true);

      setTimeout(() => {
        document
          .getElementById("main-content")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 300);
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

  <div className="relative w-full h-full">

    {/* Top Text */}
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
   className="
absolute
left-1/2
top-[23%]
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1 }}
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
    onClick={() => setPlayingIntro(true)}
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
      {opened && (

        <motion.div
          id="main-content"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >

          {/* WEDDING DETAILS */}
          <section className="relative z-10 py-32 px-6">

            <div className="max-w-5xl mx-auto bg-white/30 border border-white/30 backdrop-blur-md rounded-[40px] p-10 shadow-xl">

              <h2 className="text-5xl font-bold text-center mb-16 text-[#8E7BAF]">
                Wedding Details ✨
              </h2>

              <div className="grid md:grid-cols-3 gap-8 text-center">

                <div className="bg-white/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#8E7BAF]">
                    Date
                  </h3>

                  <p className="text-[#6F6187]">
                    September 4, 2026
                  </p>
                </div>

                <div className="bg-white/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#8E7BAF]">
                    Time
                  </h3>

                  <p className="text-[#6F6187]">
                    3:00 PM
                  </p>
                </div>

                <div className="bg-white/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#8E7BAF]">
                    Venue
                  </h3>

                  <p className="text-[#6F6187]">
                    Casa Novel
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* COUNTDOWN */}
          <section className="relative z-10 py-32 px-6">

            <div className="max-w-6xl mx-auto text-center">

              <h2 className="text-5xl font-bold mb-16 text-[#8E7BAF]">
                Countdown To Forever ⏳
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="bg-white/30 border border-white/30 backdrop-blur-md rounded-[30px] p-10">
                  <h3 className="text-5xl font-black text-[#B497D6]">
                    {timeLeft.days}
                  </h3>

                  <p className="mt-4 text-[#6F6187]">
                    Days
                  </p>
                </div>

                <div className="bg-white/30 border border-white/30 backdrop-blur-md rounded-[30px] p-10">
                  <h3 className="text-5xl font-black text-[#B497D6]">
                    {timeLeft.hours}
                  </h3>

                  <p className="mt-4 text-[#6F6187]">
                    Hours
                  </p>
                </div>

                <div className="bg-white/30 border border-white/30 backdrop-blur-md rounded-[30px] p-10">
                  <h3 className="text-5xl font-black text-[#B497D6]">
                    {timeLeft.minutes}
                  </h3>

                  <p className="mt-4 text-[#6F6187]">
                    Minutes
                  </p>
                </div>

                <div className="bg-white/30 border border-white/30 backdrop-blur-md rounded-[30px] p-10">
                  <h3 className="text-5xl font-black text-[#B497D6]">
                    {timeLeft.seconds}
                  </h3>

                  <p className="mt-4 text-[#6F6187]">
                    Seconds
                  </p>
                </div>

              </div>

            </div>

          </section>

         
 
         

         
          {/* GIFT REGISTRY */}
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

    {/* SOFT DECOR CIRCLES */}
    <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#F8C8DC]/40 rounded-full blur-3xl" />

    <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#BFD7ED]/40 rounded-full blur-3xl" />

    {/* CONTENT */}
    <div className="relative z-10 text-center">

      <h2
        className="text-6xl mb-10 text-[#9D84C2]"
        style={{
          fontFamily: "cursive",
        }}
      >
        Gift Registry
      </h2>

      <p className="text-[#6F6187] text-2xl leading-relaxed max-w-3xl mx-auto">
        We’re so grateful to celebrate with you.
        If you'd like to gift us something special,
        we've created a registry to make it easier to choose.
      </p>

     
      <motion.a
  href="https://docs.google.com/spreadsheets/d/1j8zAPhhqxMNLvoulmbSkOj47CWkpftykRVXtJXhUrU0/edit?usp=sharing"
  target="_blank"
  whileHover={{
    scale: 1.08,
    rotate: -2,
  }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex flex-col items-center
  justify-center mt-14"
>

  {/* GIFT BOX */}
  <div className="relative">

    {/* BOX */}
    <div
      className="w-32 h-32 rounded-[25px]
      bg-[#F8C8DC]
      shadow-2xl relative"
    >

      {/* RIBBON VERTICAL */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-6 h-full bg-[#B497D6]" />

      {/* RIBBON HORIZONTAL */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-6 w-full bg-[#B497D6]" />

      {/* BOW */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-5xl">
        🎀
      </div>

    </div>

  </div>

  {/* TEXT */}
  <p className="mt-6 text-[#8E7BAF] text-xl font-semibold">
    Open Gift Registry
  </p>

</motion.a>

    </div>

  </div>

</section>
        


  
  


          {/* RSVP */}
          <section className="relative z-10 py-32 px-6">

            <div className="max-w-3xl mx-auto bg-white/30 border border-white/30 backdrop-blur-md rounded-[40px] p-10 shadow-xl">

              <h2 className="text-5xl font-bold text-center mb-12 text-[#8E7BAF]">
                RSVP 💌
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
                  bg-[#E7D5F5]
                  text-[#8E7BAF]
                  text-lg font-bold
                  hover:scale-[1.02]
                  transition"
                >
                  Send RSVP ✨
                </button>

              </form>

            </div>

          </section>

        </motion.div>

      )}

   </main>
 
);
}