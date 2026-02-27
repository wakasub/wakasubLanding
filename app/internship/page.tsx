"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Send,
  Users,
  Megaphone,
  Headset,
  Palette,
  ArrowRight,
  Calendar,
  Layers,
  Zap,
  Briefcase,
  GraduationCap,
  Lock,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  courseOfStudy: z.string().min(2, "Course of study is required"),
  level: z.string().min(1, "Level is required"),
  department: z.string().min(1, "Please select a department"),
  reasons: z
    .string()
    .min(10, "Please provide reasons (at least 10 characters)"),
});

type FormData = z.infer<typeof formSchema>;

export default function InternshipPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/internship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
        reset();
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const departments = [
    {
      id: "ambassadors",
      name: "Ambassadors",
      icon: Users,
      desc: "Represent Wakasub in your community.",
    },
    {
      id: "social-media",
      name: "Social Media Managers",
      icon: Megaphone,
      desc: "Help us grow our digital presence.",
    },
    {
      id: "customer-support",
      name: "Customer Supports",
      icon: Headset,
      desc: "Assist our users with their needs.",
    },
    {
      id: "graphics-design",
      name: "Graphics Design",
      icon: Palette,
      desc: "Create stunning visuals for our brand.",
    },
  ];

  const benefits = [
    {
      title: "Hands-on Impact",
      desc: "Don't just observe—contribute. Work on the actual engine that powers airtime and data for thousands of Nigerians daily.",
      icon: Zap,
    },
    {
      title: "Tech Stack Mastery",
      desc: "Get proficient with modern tools like Next.js, Tailwind CSS, and cloud-native architectures in a fast-paced environment.",
      icon: Layers,
    },
    {
      title: "Cross-Functional Collaboration",
      desc: "Bridge the gap between engineering, support, and marketing. Understand how a full-scale VTU platform operates.",
      icon: Users,
    },
    {
      title: "Early Career Acceleration",
      desc: "Kickstart your professional journey with a certificate and references from a leading fintech innovator in Nigeria.",
      icon: Briefcase,
    },
    {
      title: "Mentorship",
      desc: "Learn directly from industry experts who have built and scaled successful tech products from the ground up.",
      icon: GraduationCap,
    },
    {
      title: "Networking",
      desc: "Connect with like-minded individuals and build lasting professional relationships within the Nigerian tech ecosystem.",
      icon: CheckCircle2,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="destructive"
              className="mb-6 rounded-full px-4 py-1.5 bg-destructive/10 text-destructive border-none text-sm font-medium"
            >
              Applications Closed
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Launch Your Career <br />
            <span className="text-primary italic">with Wakasub</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
          >
            Join the Wakasub Internship program and gain hands-on experience in
            the fastest growing VTU platform in Nigeria. We're looking for
            passionate students to join our first-ever batch!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-sm font-medium bg-background px-4 py-2 rounded-full border shadow-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Deadline: Feb 22, 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Join Us?
            </h2>
            <p className="text-muted-foreground">
              Gain real-world experience and build your network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border bg-card hover:shadow-lg transition-all h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-[2.5rem] border-none shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 bg-primary text-primary-foreground">
                  <h2 className="text-3xl font-bold mb-6">Application Form</h2>
                  <p className="mb-10 text-primary-foreground/80 leading-relaxed">
                    Fill out the form to apply for the Batch A internship
                    program. Shortlisted candidates will be contacted via email.
                  </p>

                  <div className="space-y-6">
                    {departments.map((dept) => (
                      <div key={dept.id} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <dept.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold">{dept.name}</h4>
                          <p className="text-sm text-primary-foreground/60">
                            {dept.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 md:p-12 bg-background flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                    <Lock className="text-destructive w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Batch A Closed</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for your interest! Applications for the Batch A
                    internship program are now closed.
                  </p>
                  <Button asChild variant="outline" className="rounded-xl px-8">
                    <Link href="/">Return to Home</Link>
                  </Button>
                  <p className="mt-8 text-xs text-muted-foreground">
                    Follow us on social media for updates on future cohorts.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border mt-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wakasub Technologies. Internship
            Program Batch A.
          </p>
        </div>
      </footer>
    </main>
  );
}
