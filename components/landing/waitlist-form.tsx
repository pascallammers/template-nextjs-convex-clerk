"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  className?: string;
  dark?: boolean;
}

export function WaitlistForm({ className, dark = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "already" | "error"
  >("idle");
  const joinWaitlist = useMutation(api.waitlist.join);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const result = await joinWaitlist({ email });
      setStatus(result.alreadyJoined ? "already" : "success");
      if (!result.alreadyJoined) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success" || status === "already") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl p-4",
          dark
            ? "bg-white/10 text-white"
            : "bg-primary/10 text-primary",
          className
        )}
      >
        <CheckCircle className="h-5 w-5 shrink-0" />
        <p className="text-sm font-medium">
          {status === "success"
            ? "Du bist dabei! Wir melden uns bei dir."
            : "Du stehst bereits auf der Warteliste!"}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full flex-col gap-3 sm:flex-row", className)}
    >
      <Input
        type="email"
        placeholder="Deine E-Mail-Adresse"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        required
        className={cn(
          "h-12 flex-1 rounded-xl px-4 text-base",
          dark
            ? "border-white/20 bg-white/10 text-white placeholder:text-white/50"
            : "border-border/50 bg-white placeholder:text-muted-foreground/50"
        )}
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 cursor-pointer rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-200 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Jetzt 15% sichern
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      {status === "error" && (
        <p className="text-sm text-destructive sm:col-span-2">
          Etwas ist schiefgelaufen. Bitte versuche es erneut.
        </p>
      )}
    </form>
  );
}
