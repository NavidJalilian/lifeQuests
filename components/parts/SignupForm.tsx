import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const storedSuccess = localStorage.getItem("signupSuccess");
    if (storedSuccess === "true") {
      setSubmissionSuccessful(true);
    }
  }, []);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    setIsLoading(true);

    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: new Date().toISOString(),
      });

      toast.success(
        "Awesome! You're on the list. We'll let you know when we're ready!"
      );
      localStorage.setItem("signupSuccess", "true");
      setSubmissionSuccessful(true);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(
        "Oops! Something went wrong. Please try again in a few minutes."
      );
      localStorage.removeItem("signupSuccess");
      setSubmissionSuccessful(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Be Among the First
        </h2>
        <p className="text-text-light text-lg mb-8">
          Sign up for early access and start your journey to a more rewarding
          life.
        </p>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center ${
            submissionSuccessful ? "pointer-events-none" : ""
          }`}
        >
          {submissionSuccessful ? (
            <div className="flex-1 px-6 py-3 rounded-full text-green-600 font-semibold text-center">
              Awesome! You're on the list!
            </div>
          ) : (
            <>
              <input
                type="email"
                value={email}
                id='early-access'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`flex-1 px-6 py-3 rounded-full border ${
                  emailError ? "border-red-500" : "border-gray-200"
                } focus:border-primary/50 focus:outline-none text-text`}
                required
                disabled={submissionSuccessful}
              />
             
            </>
          )}
          <button
            type="submit"
            disabled={isLoading || submissionSuccessful}
            className={`px-8 py-3 text-white rounded-full font-medium transition-colors duration-200 transform hover:scale-105 disabled:hover:scale-100 ${
              isLoading
                ? "bg-gray-500"
                : submissionSuccessful
                ? "bg-green-500" // Solid Green
                : "bg-primary hover:bg-primary-hover"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {submissionSuccessful ? (
              <span className="flex items-center">
                Signed Up!{" "}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            ) : isLoading ? (
              "Signing up..."
            ) : (
              "Get Early Access"
            )}
          </button>
        </form>

        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </motion.div>
    </section>
  );
};

export default SignupForm;