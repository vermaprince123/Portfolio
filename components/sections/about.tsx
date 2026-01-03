"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <motion.div variants={itemVariants} className="space-y-6">
                {/* Profile Photo in About Section */}
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center mb-6"
                >
                  <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg ring-2 ring-primary/10">
                    <Image
                      src="/profile-photo.png"
                      alt="Prince Verma"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {personalInfo.about}
                </p>

                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Location</h3>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="pt-6 border-t"
                >
                  <h3 className="font-semibold mb-4">What I Do</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      "Web Development",
                      "UI/UX Design",
                      "Performance Optimization",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-muted/50 text-center"
                      >
                        <p className="font-medium">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

