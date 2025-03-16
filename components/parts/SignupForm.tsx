'use client';

import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { toast } from "sonner";
import { db, analytics } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { logEvent } from 'firebase/analytics';

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [formInteracted, setFormInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already signed up
    const hasSignedUp = localStorage.getItem("waitlistSignup");
    if (hasSignedUp) {
      const signupData = JSON.parse(hasSignedUp);
      setIsSubmitted(true);
      setEmail(signupData.email);
      
      // Track returning signed up user
      if (analytics) {
        logEvent(analytics, 'returning_waitlist_user', {
          email: signupData.email,
          signup_date: signupData.timestamp
        });
      }
    }
  }, []);

  // Track form focus
  const handleFormFocus = () => {
    if (!formInteracted && analytics) {
      logEvent(analytics, 'form_interaction', {
        action: 'focus',
        form_type: 'waitlist_signup'
      });
      setFormInteracted(true);
    }
  };

  // Track email input changes
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Track when user starts typing email
    if (newEmail.length === 1 && analytics) {
      logEvent(analytics, 'form_interaction', {
        action: 'start_typing',
        form_type: 'waitlist_signup'
      });
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    // Track submission attempt
    if (analytics) {
      logEvent(analytics, 'form_submit_attempt', {
        form_type: 'waitlist_signup',
        email_length: email.length
      });
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      if (analytics) {
        logEvent(analytics, 'signup_error', {
          error_type: 'invalid_email',
          email: email,
          email_domain: email.split('@')[1] || 'no_domain'
        });
      }
      return;
    }

    setIsLoading(true);

    try {
      const timestamp = new Date().toISOString();
      
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp,
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent
      });

      // Save to localStorage
      localStorage.setItem("waitlistSignup", JSON.stringify({
        email,
        timestamp
      }));

      if (analytics) {
        logEvent(analytics, 'waitlist_signup_success', {
          email_domain: email.split('@')[1],
          referrer: document.referrer || 'direct',
          signup_time: new Date().getHours(),
          signup_day: new Date().getDay()
        });
      }

      setIsSubmitted(true);
      toast.success("Welcome aboard! You're now on the waitlist. 🚀");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Oops! Something went wrong. Please try again in a few minutes.");
      setIsSubmitted(false);
      localStorage.removeItem("waitlistSignup");
      
      if (analytics) {
        logEvent(analytics, 'signup_error', {
          error_type: 'submission_failed',
          error: error.message,
          email_domain: email.split('@')[1],
          timestamp: new Date().toISOString()
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl mx-auto"
      >
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="text-xl font-semibold text-green-900 mb-2">You're on the List!</h4>
          <p className="text-green-700">
            We'll notify {email} when we're ready to launch. Thank you for your interest!
          </p>
        </div>
      </m.div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4" >
            <div className="flex-1 relative" >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleFormFocus}
                placeholder="Enter your email for early access"
                className={`w-full px-6 py-4 rounded-full border ${
                  emailError ? "border-red-500" : "border-white/20"
                } bg-white/10 backdrop-blur-sm focus:border-primary/50 focus:outline-none text-white placeholder:text-white/70`}
                disabled={isLoading}
              />
              {emailError && (
                <p className="absolute -bottom-6 left-4 text-sm bg-white/90 text-red-600 px-2 py-1 rounded-md font-medium shadow-sm">
                  {emailError}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-4 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 min-w-[180px] ${
                isLoading
                  ? "bg-primary/80 cursor-not-allowed"
                  : "bg-primary hover:bg-primary-hover"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
          <p className="text-center text-sm text-white/70">
            🔒 We respect your privacy and will never share your information.
          </p>
        </form>
      </m.div>
    </LazyMotion>
  );
};

export default SignupForm;