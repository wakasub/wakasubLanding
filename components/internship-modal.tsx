"use client"

import * as React from "react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, ArrowRight } from "lucide-react"

export function InternshipModal() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem("hasSeenInternshipModal")
      if (!hasSeenModal) {
        setIsOpen(true)
        sessionStorage.setItem("hasSeenInternshipModal", "true")
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-primary p-8 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
          
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-none">
            Batch A • First Cohort
          </Badge>
          
          <DialogHeader className="relative z-10">
            <DialogTitle className="text-3xl font-bold leading-tight">
              Join Wakasub <br /> Internship Program
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80 mt-2 text-base">
              Start your career in tech with Nigeria's fastest growing VTU platform. 
              Gain hands-on experience and build the future.
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-8 bg-background flex flex-col gap-4">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/50 border border-secondary">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Rocket className="text-primary w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Applications are Open!</h4>
              <p className="text-xs text-muted-foreground">Deadline: February 22, 2026</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-2">
            <Button asChild className="w-full h-12 rounded-xl font-bold text-lg" onClick={() => setIsOpen(false)}>
              <Link href="/internship">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" className="w-full h-12 rounded-xl font-medium" onClick={() => setIsOpen(false)}>
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
