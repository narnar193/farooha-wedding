"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {

  const [opened, setOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const weddingDate = new Date("2026-09-09T15:00:00").getTime();

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

     {/* FLORAL BACKGROUND */}
<div
  className="fixed inset-0 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/images/floral-bg.jpg')",
  }}
/>

{/* SOFT OVERLAY */}
<div className="fixed inset-0 bg-white/35" />

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
      <section
        className="relative z-10 min-h-screen flex flex-col
        items-center justify-center text-center px-6"
      >

        

        {/* CONTENT */}
        <div className="relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[8px]
            text-[#8E7BAF] mb-8 text-sm"
          >
            Together With Our Families
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-[70px] md:text-[120px]
            leading-none text-[#B497D6]
            italic"
            style={{
              fontFamily: "cursive",
            }}
          >
            Farooha & Shaboo7a
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 text-[#6F6187]
            text-xl tracking-wide"
          >
            September 9, 2026 &nbsp;&nbsp; | &nbsp;&nbsp; 3:00 PM
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setOpened(true);
              setShowContent(true);

              setTimeout(() => {
                document
                  .getElementById("main-content")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }, 500);
            }}
            className="mt-14 px-10 py-4
            border border-[#C9B6E4]
            rounded-full
            text-[#9D84C2]
            tracking-[3px]
            uppercase text-sm
            bg-white/50 backdrop-blur-md
            hover:bg-white/70 transition"
          >
            RSVP Now
          </motion.button>

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
                    September 9, 2026
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
                    Kamel el 3adad Venue
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

          {/* GALLERY */}
          <section className="relative z-10 py-32 px-6">

            <div className="max-w-6xl mx-auto">

              <h2 className="text-5xl font-bold text-center mb-20 text-[#8E7BAF]">
                Our Memories 📸
              </h2>

           <div className="columns-2 md:columns-3 gap-6 space-y-6">

  <motion.img
    whileHover={{ scale: 1.03, rotate: 0 }}
    src="/images/photo1.jpg"
    className="w-full rounded-[30px]
    rotate-[-4deg]
    shadow-2xl mb-6"
  />

  <motion.img
    whileHover={{ scale: 1.03, rotate: 0 }}
    src="/images/photo2.jpg"
    className="w-full rounded-[30px]
    rotate-[3deg]
    shadow-2xl mb-6"
  />

  <motion.img
    whileHover={{ scale: 1.03, rotate: 0 }}
    src="/images/photo3.jpg"
    className="w-full rounded-[30px]
    rotate-[-2deg]
    shadow-2xl mb-6"
  />

  <motion.img
    whileHover={{ scale: 1.03, rotate: 0 }}
    src="/images/photo4.jpg"
    className="w-full rounded-[30px]
    rotate-[5deg]
    shadow-2xl mb-6"
  />

  <motion.img
    whileHover={{ scale: 1.03, rotate: 0 }}
    src="/images/photo5.jpg"
    className="w-full rounded-[30px]
    rotate-[-5deg]
    shadow-2xl mb-6"
  />

  <motion.img
    whileHover={{ scale: 1.03, rotate: 0 }}
    src="/images/photo6.jpg"
    className="w-full rounded-[30px]
    rotate-[2deg]
    shadow-2xl mb-6"
  />

  <motion.img
    whileHover={{ scale: 1.03, rotate: 0 }}
    src="/images/photo7.jpg"
    className="w-full rounded-[30px]
    rotate-[-3deg]
    shadow-2xl mb-6"
  />
<motion.img
  whileHover={{ scale: 1.03, rotate: 0 }}
  src="/images/photo8.jpg"
  className="w-full rounded-[30px]
  rotate-[4deg]
  shadow-2xl mb-6"
/>

<motion.img
  whileHover={{ scale: 1.03, rotate: 0 }}
  src="/images/photo9.jpg"
  className="w-full rounded-[30px]
  rotate-[-4deg]
  shadow-2xl mb-6"
/>
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