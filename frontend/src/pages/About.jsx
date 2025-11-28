import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logos from "../assets/logo.png";
import headerimg from "../assets/headerimg.png";
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="about-page">
      <section
       className="about-header text-center py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2015/03/28/17/04/fort-696157_1280.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.h1
          className="text-white text-4xl font-bold relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-blue-400">Joint Travels</span>
        </motion.h1>
        <motion.p
          className="text-white mt-4 text-lg relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Trusted Travel Agency for Seamless Booking Experiences
        </motion.p>
      </section>

      <section className="about-intro py-16 px-4 bg-light-gray">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About <span className="text-blue-500">Joint Travels</span>
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Joint Travels is a Bengaluru-based travel organization specializing in trips, treks, and customized adventures. We bring together travel enthusiasts to explore new places, experience adventure, and create lifelong memories. From corporate trips to tailor-made itineraries, we handle everything so you can focus on the journey.
          </motion.p>
        </motion.div>
      </section>

      <section className="our-mission py-16">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our <span className="text-blue-500">Mission</span>
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our mission is to provide seamless, reliable, and memorable travel experiences. We aim to empower travelers to explore the world with ease, offering professional guidance, unique destinations, and curated trips at great value.
          </motion.p>
        </motion.div>
      </section>

      <section className="why-choose-us py-16 bg-light-gray">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Why Choose <span className="text-blue-500">Us?</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2tdlrgxcfJ2eLrNTzjTv9YrLxNnPVzwEgQ&s?w=1380",
                title: "Professional Service",
                desc: "We provide expert assistance and personalized guidance to ensure your trip is perfectly planned.",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYYvdQJu9URsiUX36dts4j17g1f2JQC5n_Q&s?w=1380",
                title: "Unique Destinations",
                desc: "We curate exclusive travel packages to unique destinations, ensuring a one-of-a-kind experience.",
              },
              {
                img: "https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg?w=1380",
                title: "Affordable Prices",
                desc: "We offer competitive rates to ensure our customers get the best value for their trips.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
              >
                <img
                  className="rounded-lg mb-4 h-60 mx-auto"
                  src={item.img}
                  alt={item.title}
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="our-team py-16 bg-white/20">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Meet Our <span className="text-blue-500">Team</span>
          </motion.h2>
          <p className="text-lg mb-8">
            Our team is passionate about travel and dedicated to helping you explore new destinations with ease.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              className="team-member w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <img
                className="rounded-full mb-4"
                src={logos}
                alt="Vinay"
              />
              <h3 className="text-xl font-semibold">Vinay</h3>
              <p>Travel Consultant</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="contact-info py-16 bg-light-gray text-center">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Get in <span className="text-blue-500">Touch</span>
          </motion.h2>
          <p className="text-lg mb-4">
            Have any questions or want to plan your next adventure? We're here to assist you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8 mb-4" />,
                title: "Email",
                content: "jointtravels9999@gmail.com",
              },
              {
                icon: <Phone className="w-8 h-8 mb-4" />,
                title: "WhatsApp",
                content: "+91 7975561103",
              },
              {
                icon: <MapPin className="w-8 h-8 mb-4" />,
                title: "Location",
                content: "Bengaluru, Karnataka, India",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/+917975561103"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
