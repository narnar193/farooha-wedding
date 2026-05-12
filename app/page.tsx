"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {

  const weddingDate = new Date("2026-09-09T15:00:00").getTime();

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

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CFAA7D] via-[#CC7C72] to-[#8096AD]" />

      {/* GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#CC7C72] rounded-full blur-[120px] opacity-30" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8096AD] rounded-full blur-[120px] opacity-30" />

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-[#B9AF5F] rounded-full blur-[100px] opacity-20" />

      {/* GLASS */}
      <div className="absolute inset-0 backdrop-blur-[80px]" />

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-40 h-40 bg-white/8 border border-white/20 rounded-[30px] backdrop-blur-[30px] rotate-12"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-52 h-52 bg-white/8 border border-white/20 rounded-full backdrop-blur-[30px]"
      />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[10px] text-[#F3EBDD] mb-6"
        >
          Wedding Invitation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-8xl font-bold tracking-wide leading-tight"
        >
          Farooha
          <span className="block text-[#F6E7E1]">&</span>
          Shaboo7a
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-2xl text-lg md:text-2xl text-white/80"
        >
          Together with their families invite you to celebrate
          a night filled with love, joy, and forever memories.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-5 rounded-full bg-white/8 border border-white/20 backdrop-blur-[30px] text-lg font-semibold shadow-2xl hover:bg-white/20 transition"
        >
          Open Invitation ✨
        </motion.button>

      </section>

      {/* WEDDING DETAILS */}
      <section className="relative z-10 py-32 px-6">

        <div className="max-w-5xl mx-auto bg-white/8 border border-white/20 backdrop-blur-[30px] rounded-[40px] p-10 shadow-2xl">

          <h2 className="text-5xl font-bold text-center mb-16">
            Wedding Details ✨
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-white/8 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Date</h3>
              <p className="text-white/70">
                September 9, 2026
              </p>
            </div>

            <div className="bg-white/8 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Time</h3>
              <p className="text-white/70">
                3:00 PM
              </p>
            </div>

            <div className="bg-white/8 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Venue</h3>
              <p className="text-white/70">
                Kamel el 3adad Venue
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 py-32 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-16">
            Countdown To Forever ⏳
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white/8 border border-white/20 backdrop-blur-[30px] rounded-[30px] p-10">
              <h3 className="text-5xl font-black text-[#F6E7E1]">
                {timeLeft.days}
              </h3>
              <p className="mt-4 text-white/70">
                Days
              </p>
            </div>

            <div className="bg-white/8 border border-white/20 backdrop-blur-[30px] rounded-[30px] p-10">
              <h3 className="text-5xl font-black text-[#F6E7E1]">
                {timeLeft.hours}
              </h3>
              <p className="mt-4 text-white/70">
                Hours
              </p>
            </div>

            <div className="bg-white/8 border border-white/20 backdrop-blur-[30px] rounded-[30px] p-10">
              <h3 className="text-5xl font-black text-[#F6E7E1]">
                {timeLeft.minutes}
              </h3>
              <p className="mt-4 text-white/70">
                Minutes
              </p>
            </div>

            <div className="bg-white/8 border border-white/20 backdrop-blur-[30px] rounded-[30px] p-10">
              <h3 className="text-5xl font-black text-[#F6E7E1]">
                {timeLeft.seconds}
              </h3>
              <p className="mt-4 text-white/70">
                Seconds
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* RSVP */}
      <section className="relative z-10 py-32 px-6">

        <div className="max-w-3xl mx-auto bg-white/8 border border-white/20 backdrop-blur-[30px] rounded-[40px] p-10 shadow-2xl">

          <h2 className="text-5xl font-bold text-center mb-12">
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
              className="w-full p-5 rounded-2xl bg-white/8 border border-white/20 outline-none"
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
              className="w-full p-5 rounded-2xl bg-white/8 border border-white/20 outline-none"
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
              className="w-full p-5 rounded-2xl bg-white/8 border border-white/20 outline-none"
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
              className="w-full p-5 rounded-2xl bg-white/8 border border-white/20 outline-none h-40"
            />

            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-[30px] text-lg font-bold hover:scale-[1.02] transition"
            >
              Send RSVP ✨
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}