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
import { LockIcon } from "@/components/icons/lock"

export function InternshipModal() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem("hasSeenInternshipModalClosed")
      if (!hasSeenModal) {
        setIsOpen(true)
        sessionStorage.setItem("hasSeenInternshipModalClosed", "true")
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-destructive p-8 text-destructive-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-0 w-32 h-32 bg-white/10 blur-2xl translate-x-1/2 -translate-y-1/2" />
          
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-none">
            Cohort Updates
          </Badge>
          
          <DialogHeader className="relative z-10">
            <DialogTitle className="text-3xl font-bold leading-tight">
              Batch A <br /> Applications Closed
            </DialogTitle>
            <DialogDescription className="text-destructive-foreground/80 mt-2 text-base">
              Applications for our first cohort are now closed. Thank you to everyone who applied!
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-8 bg-background flex flex-col gap-4">
          <div className="flex items-start gap-4 p-4 bg-secondary/50 border border-secondary">
            <div className="w-10 h-10 bg-destructive/10 flex items-center justify-center shrink-0">
              <LockIcon size={20} className="text-destructive" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Batch A is Full</h4>
              <p className="text-xs text-muted-foreground">Stay tuned for future opportunities.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-2">
            <Button asChild variant="outline" className="w-full h-12 font-bold text-lg" onClick={() => setIsOpen(false)}>
              <Link href="/internship">
                View Internship Page
              </Link>
            </Button>
            <Button className="w-full h-12 font-medium" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
