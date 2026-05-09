'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function StoryPage() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <main className="min-h-screen bg-cotton overflow-hidden selection:bg-soil selection:text-cotton">
      {/* 1. Emotional Hero Statement */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-soil/60 uppercase tracking-widest text-sm mb-6 block font-medium">The Origin</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink max-w-4xl leading-tight">
            “Every big change starts with a small concern.”
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-soil/50"
        >
          <span className="text-sm tracking-widest uppercase">Scroll to discover</span>
          <div className="w-[1px] h-12 bg-soil/20 overflow-hidden">
             <motion.div 
               animate={{ y: [0, 48, 0] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
               className="w-full h-1/2 bg-soil"
             />
          </div>
        </motion.div>
      </section>

      {/* 2. Core Emotional Question */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-soil leading-tight"
          >
            “Why should menstrual care harm either women’s health or the environment?”
          </motion.h2>
        </div>
      </section>

      {/* 3. Founder Story */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeUpVariant}
             className="relative aspect-[4/5] w-full rounded-soft overflow-hidden shadow-paper group"
          >
             <Image 
               src="/images/story/pop.jpg" 
               alt="Founder Manshi Kumari at an awareness drive"
               fill
               className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-soil/10 mix-blend-multiply"></div>
          </motion.div>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeUpVariant}
             className="flex flex-col justify-center"
          >
             <h3 className="font-serif text-3xl md:text-5xl text-ink mb-8 leading-snug">
               “Founded by Manshi Kumari, Aantrika began as a mission to create affordable, sustainable, and dignified menstrual solutions for every woman.”
             </h3>
             <p className="text-lg text-soil/80 leading-relaxed max-w-lg font-sans">
               The vision was clear: to redefine feminine care from a luxury to a fundamental right, ensuring that no woman has to compromise on comfort, and no community has to compromise on the environment.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Community Journey */}
      <section className="py-32 px-6 bg-sand relative overflow-hidden">
         <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="font-serif text-3xl md:text-5xl text-soil max-w-4xl mx-auto leading-relaxed"
            >
              “During community workshops, rural internships, and awareness drives, we witnessed the challenges women face due to limited access to safe and eco-friendly menstrual products.”
            </motion.p>

            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
               className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
               {[
                 { src: '/images/story/img1.jpg', offset: 'md:translate-y-12' },
                 { src: '/images/story/img3.jpg', offset: 'md:-translate-y-4' },
                 { src: '/images/story/img6.jpg', offset: 'md:translate-y-8' }
               ].map((img, idx) => (
                 <motion.div key={idx} variants={fadeUpVariant} className={`relative aspect-[4/5] md:aspect-square rounded-soft overflow-hidden shadow-paper ${img.offset}`}>
                   <Image src={img.src} alt="Community awareness" fill className="object-cover" />
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 5. Transformation & Product Vision */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <span className="text-terracotta uppercase tracking-[0.2em] font-semibold text-sm mb-6 block">The Transformation</span>
            <h2 className="font-serif text-4xl md:text-6xl text-ink mb-12 leading-tight">
              “That journey inspired us to build something different.”
            </h2>
            
            <div className="w-px h-24 bg-soil/20 mx-auto mb-12"></div>

            <p className="text-xl md:text-2xl text-soil/80 leading-relaxed font-sans font-light">
              “Aantrika combines comfort, sustainability, and innovation through eco-friendly menstrual pads designed with reusable and biodegradable elements.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Mission Manifesto & Vision */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-soil text-cotton">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeUpVariant}
          >
            <h3 className="uppercase tracking-widest text-sage text-sm mb-6 font-semibold">Our Mission</h3>
            <p className="font-serif text-4xl md:text-5xl leading-tight">
              “To make menstrual hygiene sustainable, accessible, and stigma-free for every woman.”
            </p>
          </motion.div>
          
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeUpVariant}
          >
            <h3 className="uppercase tracking-widest text-sage text-sm mb-6 font-semibold">Our Vision</h3>
            <p className="font-serif text-4xl md:text-5xl leading-tight">
              “A future where periods are managed with dignity, confidence, and environmental responsibility.”
            </p>
          </motion.div>
        </div>

        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeUpVariant}
           className="mt-32 max-w-4xl mx-auto text-center"
        >
          <p className="font-serif text-3xl md:text-4xl text-sand/90 italic leading-relaxed">
            “Our vision is not only to provide a product, but also to spread awareness, confidence, and menstrual dignity. From grassroots villages to startup conclaves, the journey of Aantrika has been driven by purpose, resilience, and impact.”
          </p>
        </motion.div>
      </section>

      {/* 7. Why Aantrika Cards */}
      <section className="py-32 px-6 bg-cotton">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-20"
          >
            <span className="text-soil/60 uppercase tracking-widest text-sm mb-4 block font-medium">The Foundation</span>
            <h2 className="font-serif text-4xl md:text-6xl text-ink">Why Aantrika</h2>
            <p className="mt-6 text-soil/80 font-sans text-lg max-w-2xl mx-auto">“What started as an idea is now growing into a movement for healthier women and a cleaner planet.”</p>
          </motion.div>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Eco-friendly & biodegradable approach", desc: "Crafted with materials that return to the earth, leaving no trace behind." },
              { title: "Comfortable and reusable innovation", desc: "Designed for the modern woman who refuses to compromise on physical well-being." },
              { title: "Women-centered impact", desc: "Built by women, for women, understanding the nuances of feminine health intimately." },
              { title: "Awareness-driven mission", desc: "Breaking stigmas and fostering open conversations in communities nationwide." },
              { title: "Sustainable future for the next generation", desc: "Paving the way for a world where periods are powerful, not problematic." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUpVariant}
                className="bg-white p-10 rounded-[32px] shadow-paper hover:-translate-y-2 transition-transform duration-500 border border-soil/5 group"
              >
                 <div className="w-12 h-12 rounded-full bg-sand/30 flex items-center justify-center mb-6 group-hover:bg-sand transition-colors duration-500 text-soil font-serif text-xl">
                   0{idx + 1}
                 </div>
                 <h4 className="font-serif text-2xl text-ink mb-4">{feature.title}</h4>
                 <p className="text-soil/70 font-sans leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Final Closing Statement */}
      <section className="h-screen flex items-center justify-center px-6 bg-soil text-cotton text-center relative overflow-hidden">
        <motion.div
           style={{ y: yParallax, scale: scaleParallax }}
           className="absolute inset-0 opacity-20"
        >
          <Image 
            src="/images/story/img4.jpg" 
            alt="Aantrika Community"
            fill
            className="object-cover mix-blend-overlay grayscale"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-soil/60 mix-blend-multiply z-0"></div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-tight relative z-10 text-white"
        >
          “Aantrika is not just a brand. It is a story of change, courage, and conscious living.”
        </motion.h2>
      </section>
    </main>
  );
}
