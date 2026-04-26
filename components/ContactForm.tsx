"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Terminal } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "[ERROR: NAME_TOO_SHORT]" }),
  email: z.string().email({ message: "[ERROR: INVALID_EMAIL_FORMAT]" }),
  mobile: z.string().min(7, { message: "[ERROR: INVALID_COMM_FREQ]" }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "[ERROR: MESSAGE_INSUFFICIENT_DATA]" }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Replace YOUR_FORMSPREE_ID with the final ID you get from Formspree
      const response = await fetch("https://formspree.io/f/mqewnkbg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSuccess(true);
      } else {
        // If it fails, we revert state to let them try again
        console.error("Transmission failed");
      }
    } catch (error) {
      console.error("Uplink error:", error);
    }
    
    setIsSubmitting(false);
  };

  if (success) {
    return (
      <div className="glass-card p-8 rounded-xl border border-[#00e5ff] text-center font-mono">
        <Terminal className="w-12 h-12 text-[#00e5ff] mx-auto mb-4" />
        <h3 className="text-xl text-[#00e5ff] mb-2">[SYSTEM NOTIFICATION]</h3>
        <p className="text-gray-300">Transmission successful. An engineer will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full bg-[#111827] border border-[#1e293b] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00e5ff]/5 to-transparent rounded-bl-full pointer-events-none" />
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-8 relative z-10"
      >
      <div className="space-y-2 relative group">
        <div className="absolute inset-x-0 bottom-0 scan-line hidden group-focus-within:block" />
        <input
          {...register("name")}
          placeholder="ENTER_DESIGNATION (Name)"
          className="w-full bg-[#111827]/50 border-b border-[#1e293b] py-4 px-2 text-white font-mono focus:outline-none focus:border-[#00e5ff] transition-colors"
        />
        {errors.name && <span className="text-red-500 font-mono text-sm block">{errors.name.message}</span>}
      </div>

      <div className="space-y-2 relative group">
        <div className="absolute inset-x-0 bottom-0 scan-line hidden group-focus-within:block" />
        <input
          {...register("email")}
          placeholder="ENTER_UPLINK (Email)"
          className="w-full bg-[#111827]/50 border-b border-[#1e293b] py-4 px-2 text-white font-mono focus:outline-none focus:border-[#00e5ff] transition-colors"
        />
        {errors.email && <span className="text-red-500 font-mono text-sm block">{errors.email.message}</span>}
      </div>

      <div className="space-y-2 relative group">
        <div className="absolute inset-x-0 bottom-0 scan-line hidden group-focus-within:block" />
        <input
          {...register("mobile")}
          placeholder="ENTER_COMM_FREQ (Mobile Number)"
          className="w-full bg-[#111827]/50 border-b border-[#1e293b] py-4 px-2 text-white font-mono focus:outline-none focus:border-[#00e5ff] transition-colors"
        />
        {errors.mobile && <span className="text-red-500 font-mono text-sm block">{errors.mobile.message}</span>}
      </div>

      <div className="space-y-2 relative group">
        <div className="absolute inset-x-0 bottom-0 scan-line hidden group-focus-within:block" />
        <textarea
          {...register("message")}
          placeholder="ENTER_DATA_PACKET (Message)"
          rows={4}
          className="w-full bg-[#111827]/50 border-b border-[#1e293b] py-4 px-2 text-white font-mono focus:outline-none focus:border-[#00e5ff] transition-colors resize-none"
        />
        {errors.message && <span className="text-red-500 font-mono text-sm block">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0b1220] border border-[#00e5ff]/40 hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] transition-all duration-300 py-4 mt-8 text-[#00e5ff] font-mono tracking-widest uppercase flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.25)]"
      >
        {isSubmitting ? (
          <span className="animate-pulse">[TRANSMITTING_DATA...]</span>
        ) : (
          <>
            <span>TRANSMIT_INQUIRY</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
    </div>
  );
}
