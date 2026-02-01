"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, BookOpen, GraduationCap, Calendar, CheckCircle2, Clock, X, ZoomIn } from "lucide-react";
import { certificates, courses, books } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TabType = "certificates" | "courses" | "books";

export function Achievements() {
  const [activeTab, setActiveTab] = useState<TabType>("certificates");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tabs = [
    { id: "certificates" as TabType, label: "Certificates", icon: Award, count: certificates.length },
    { id: "courses" as TabType, label: "Courses", icon: GraduationCap, count: courses.length },
    { id: "books" as TabType, label: "Books", icon: BookOpen, count: books.length },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="achievements" className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Certifications, courses, and books that have shaped my journey as a developer
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 font-medium",
                  isActive
                    ? "bg-primary/10 border-primary text-primary terminal-border"
                    : "bg-muted/50 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
                <span className="px-2 py-0.5 rounded-full bg-primary/20 text-xs font-semibold">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <motion.div key={cert.id} variants={itemVariants}>
                  <Card className="h-full hover:border-primary/50 transition-colors group overflow-hidden">
                    {cert.image && (
                      <div 
                        className="relative w-full h-48 bg-muted overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(cert.image || null)}
                      >
                        <Image
                          src={cert.image}
                          alt={`${cert.title} certificate`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-1">{cert.title}</CardTitle>
                            <CardDescription className="text-primary font-medium">
                              {cert.issuer}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{cert.date}</span>
                        </div>
                        {cert.certificateId && (
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs bg-muted px-2 py-1 rounded border border-border">
                              ID: {cert.certificateId}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "courses" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <motion.div key={course.id} variants={itemVariants}>
                  <Card className="h-full hover:border-primary/50 transition-colors group overflow-hidden">
                    {course.image && (
                      <div 
                        className="relative w-full h-48 bg-muted overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(course.image || null)}
                      >
                        <Image
                          src={course.image}
                          alt={`${course.title} course`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-1">{course.title}</CardTitle>
                            <CardDescription>{course.platform}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {course.status === "Completed" ? (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          ) : (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{course.year}</span>
                        <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          {course.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "books" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.map((book) => (
                <motion.div key={book.id} variants={itemVariants}>
                  <Card className="h-full hover:border-primary/50 transition-colors group overflow-hidden">
                    {book.image && (
                      <div 
                        className="relative w-full h-64 bg-muted overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(book.image || null)}
                      >
                        <Image
                          src={book.image}
                          alt={`${book.title} by ${book.author}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <BookOpen className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-1">{book.title}</CardTitle>
                            <CardDescription>by {book.author}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {book.status === "Completed" ? (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          ) : (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {book.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{book.year}</span>
                        </div>
                        <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          {book.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors z-10"
                aria-label="Close image"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative w-full h-full rounded-lg overflow-hidden terminal-border">
                <Image
                  src={selectedImage}
                  alt="Full size view"
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
