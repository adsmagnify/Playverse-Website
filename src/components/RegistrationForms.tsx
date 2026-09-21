"use client";

import { FormEvent, ReactNode, useState } from "react";
import { playerGames } from "@/data/content";

const inputClass =
  "w-full border border-line bg-void px-4 py-3 outline-none transition focus:border-cyan focus:shadow-[0_0_20px_rgba(0,240,255,0.2)]";

const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-ghost-dim";

export function FormField({
  name,
  label,
  type = "text",
  required = true,
  placeholder,
  children,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  children?: ReactNode;
}) {
  if (children) {
    return (
      <label className="block">
        <span className={labelClass}>{label}</span>
        {children}
      </label>
    );
  }

  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

export function FormShell({
  title,
  subtitle,
  submitLabel,
  onSubmit,
  children,
}: {
  title: string;
  subtitle?: string;
  submitLabel: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(e);
    setSent(true);
  }

  return (
    <div className="pv-card pv-card--cyan relative bg-void-2/90 p-6 md:p-8">
      <div className="rgb-border absolute inset-0 -z-10 opacity-40" />
      <h2 className="font-display text-3xl tracking-[0.06em]">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-sm text-ghost-dim">{subtitle}</p>
      ) : null}
      {sent ? (
        <p className="mt-8 font-mono text-sm text-lime">
          {">"} REGISTRATION RECEIVED. See you at the event.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {children}
          <button type="submit" className="pv-btn pv-btn--solid">
            {submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}

export function RegularVisitorForm() {
  return (
    <FormShell
      title="Regular Visitor"
      subtitle="General entry for fans, friends, and spectators."
      submitLabel="Submit Registration"
      onSubmit={() => undefined}
    >
      <FormField name="name" label="Full Name" />
      <FormField name="email" label="Email" type="email" />
      <FormField name="phone" label="Phone" type="tel" />
      <FormField name="city" label="City" />
      <FormField name="age" label="Age" type="number" />
      <label className="block">
        <span className={labelClass}>Visit Day</span>
        <select name="visitDay" required className={inputClass}>
          <option value="">Select a day</option>
          <option value="day-1">Day 1</option>
          <option value="day-2">Day 2</option>
          <option value="both">Both Days</option>
        </select>
      </label>
    </FormShell>
  );
}

export function CosplayerForm() {
  return (
    <FormShell
      title="Cosplayer Registration"
      subtitle="Walk the stage, join the parade, and rep your character."
      submitLabel="Submit Registration"
      onSubmit={() => undefined}
    >
      <FormField name="name" label="Full Name" />
      <FormField name="email" label="Email" type="email" />
      <FormField name="phone" label="Phone" type="tel" />
      <FormField name="character" label="Character Name" />
      <FormField name="series" label="Series / Game" />
      <FormField name="instagram" label="Instagram Handle" required={false} />
      <label className="block">
        <span className={labelClass}>Costume Details</span>
        <textarea
          required
          name="costumeDetails"
          rows={4}
          placeholder="Prop size, stage needs, group cosplay info..."
          className={`${inputClass} resize-y focus:border-magenta focus:shadow-[0_0_20px_rgba(255,43,214,0.2)]`}
        />
      </label>
    </FormShell>
  );
}

export function SponsorForm() {
  return (
    <FormShell
      title="Sponsor Registration"
      subtitle="Partner with Asaiverse for branding, booths, and stage presence."
      submitLabel="Submit Registration"
      onSubmit={() => undefined}
    >
      <FormField name="company" label="Company / Brand Name" />
      <FormField name="contactName" label="Contact Person" />
      <FormField name="email" label="Email" type="email" />
      <FormField name="phone" label="Phone" type="tel" />
      <FormField name="website" label="Website" required={false} />
      <label className="block">
        <span className={labelClass}>Sponsorship Interest</span>
        <select name="tier" required className={inputClass}>
          <option value="">Select tier</option>
          <option value="title">Title Sponsor</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="booth">Booth / Activation</option>
        </select>
      </label>
      <label className="block">
        <span className={labelClass}>Message</span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell us about your brand and what you want at the event..."
          className={`${inputClass} resize-y focus:border-magenta focus:shadow-[0_0_20px_rgba(255,43,214,0.2)]`}
        />
      </label>
    </FormShell>
  );
}

export function PlayerRegistrationForm() {
  const [selectedGame, setSelectedGame] = useState<string>(
    playerGames[0]?.id ?? "bgmi"
  );
  const [detailsSaved, setDetailsSaved] = useState(false);
  const [paid, setPaid] = useState(false);

  const game =
    playerGames.find((g) => g.id === selectedGame) ?? playerGames[0];

  function handleDetailsSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDetailsSaved(true);
  }

  return (
    <div className="space-y-10">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
          Select Title
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-[0.06em] md:text-5xl">
          Pick your game
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {playerGames.map((g) => {
            const active = selectedGame === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setSelectedGame(g.id);
                  setDetailsSaved(false);
                  setPaid(false);
                }}
                className={`pv-card p-6 text-left ${
                  active
                    ? "pv-card--cyan bg-cyan/10 shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                    : "pv-card--magenta bg-void-2/80"
                }`}
              >
                <p className="font-display text-3xl tracking-[0.06em]">{g.title}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ghost-dim">
                  {g.format}
                </p>
                <p className="mt-4 font-display text-2xl text-lime">
                  ₹{g.fee.toLocaleString("en-IN")}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pv-card pv-card--magenta relative bg-void-2/90 p-6 md:p-8">
        <div className="rgb-border absolute inset-0 -z-10 opacity-40" />
        <h2 className="font-display text-3xl tracking-[0.06em]">Player Details</h2>
        <p className="mt-2 text-sm text-ghost-dim">
          Registering for {game.title} — {game.format}
        </p>
        {detailsSaved ? (
          <p className="mt-6 font-mono text-sm text-lime">
            {">"} PLAYER DETAILS SAVED. Proceed to payment below.
          </p>
        ) : (
          <form onSubmit={handleDetailsSubmit} className="mt-8 space-y-5">
            <FormField name="name" label="Full Name" />
            <FormField name="email" label="Email" type="email" />
            <FormField name="phone" label="Phone" type="tel" />
            <FormField name="inGameId" label="In-Game ID / IGN" />
            <FormField name="teamName" label="Team Name" required={false} />
            <FormField name="city" label="City" />
            <button type="submit" className="pv-btn pv-btn--solid">
              Save Details
            </button>
          </form>
        )}
      </div>

      <div className="pv-card pv-card--lime relative bg-void-2/90 p-6 md:p-8">
        <div className="rgb-border absolute inset-0 -z-10 opacity-40" />
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-magenta">
          Payment
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-[0.06em]">
          Complete registration
        </h2>
        <div className="mt-6 space-y-3 border border-line/60 bg-void/60 p-5 font-mono text-sm">
          <div className="flex justify-between text-ghost-dim">
            <span>Game</span>
            <span className="text-ghost">{game.title}</span>
          </div>
          <div className="flex justify-between text-ghost-dim">
            <span>Category</span>
            <span className="text-ghost">Player Entry</span>
          </div>
          <div className="flex justify-between border-t border-line/40 pt-3 font-display text-xl tracking-wide">
            <span>Total</span>
            <span className="text-lime">₹{game.fee.toLocaleString("en-IN")}</span>
          </div>
        </div>
        {paid ? (
          <p className="mt-6 font-mono text-sm text-lime">
            {">"} PAYMENT INITIATED. You will be redirected to the gateway to
            finish checkout.
          </p>
        ) : (
          <>
            <p className="mt-4 text-sm text-ghost-dim">
              {detailsSaved
                ? "Secure checkout via payment gateway."
                : "Save your player details above before proceeding to payment."}
            </p>
            <button
              type="button"
              disabled={!detailsSaved}
              onClick={() => setPaid(true)}
              className="pv-btn pv-btn--solid mt-6 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Pay ₹{game.fee.toLocaleString("en-IN")} & Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}
