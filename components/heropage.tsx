'use client';

import React, { useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface HeroPageProps {
  onExploreClick?: () => void;
}

export function HeroPage({ onExploreClick }: HeroPageProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: "", description: "" });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showAlert = (title: string, description: string) => {
    setAlertContent({ title, description });
    setAlertOpen(true);
  };

  const handleDemoClick = async () => {
    if (!email.trim()) {
      showAlert("Email Required", "Please enter your email address to continue.");
      return;
    }

    if (!validateEmail(email)) {
      showAlert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      showAlert("Success! 🎉", "Thank you! Your email has been received. We'll be in touch soon!");
      setEmail(""); 
    }, 1500);
  };

  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-[80vh] md:min-h-[90vh]">
        <span className="poppins-regular bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-6xl py-4 relative z-20">
          Global payment infrastructure for modern commerce.
        </span>
        <p className="poppins-light max-w-xl md:max-w-2xl mx-auto text-sm md:text-base text-neutral-700 dark:text-neutral-400 text-center mt-4">
          Accept payments from anywhere, send money globally, and manage transactions across borders with ease. Powering the future of commerce.
        </p>
        
        <div className="relative mt-8 md:mt-16 z-20 px-2 w-full max-w-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button 
              onClick={onExploreClick}
              className="poppins-light rounded-full bg-black text-sm sm:text-base hover:bg-neutral-800 text-white px-6 sm:px-8 py-3 h-auto whitespace-nowrap cursor-pointer"
            >
              Explore use case
            </Button>
            <div className="flex items-center bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm pl-4 sm:pl-6 pr-1 py-1 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleDemoClick()}
                className="poppins-light bg-transparent outline-none text-neutral-900 dark:text-white placeholder:text-neutral-500 text-sm sm:text-base w-full sm:w-64 md:w-72"
              />
              <Button 
                onClick={handleDemoClick}
                disabled={isLoading}
                className="poppins-light rounded-full text-white px-4 sm:px-6 py-2 h-auto hover:bg-[#ff7419] text-sm sm:text-base whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed" 
                style={{ backgroundColor: '#fe6500' }}
              >
                {isLoading ? "..." : "Demo"}
              </Button>
            </div>
          </div>
        </div>
      </BackgroundLines>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="poppins-regular">{alertContent.title}</AlertDialogTitle>
            <AlertDialogDescription className="poppins-light">
              {alertContent.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="poppins-light">OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
