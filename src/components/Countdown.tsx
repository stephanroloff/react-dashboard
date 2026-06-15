import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

const CountdownDigit: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="relative h-16 w-8 overflow-hidden w-[28px]">
      <AnimatePresence>
        <motion.div
          key={value}
          initial={{ y: -64 }}
          animate={{ y: 0 }}
          exit={{ y: 64 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-green-400"
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const CountdownUnit: React.FC<{
  value: number;
  label: string;
  className?: string;
}> = ({ value, label, className }) => {
  const { t } = useTranslation();
  const hundreds = Math.floor(value / 100);
  const tens = Math.floor((value % 100) / 10);
  const ones = value % 10;

  return (
    <div className={`text-center ${className}`}>
      <div className="flex">
        {label === t("countdown.days") && hundreds !== 0 ? (
          <CountdownDigit value={hundreds} />
        ) : (
          ""
        )}
        <CountdownDigit value={tens} />
        <CountdownDigit value={ones} />
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-between pr-20 pl-15 pt-3">
      <CountdownUnit value={timeLeft.days} label={t("countdown.days")} />
      <CountdownUnit value={timeLeft.hours} label={t("countdown.hours")} />
      <CountdownUnit value={timeLeft.minutes} label={t("countdown.minutes")} />
      <CountdownUnit value={timeLeft.seconds} label={t("countdown.seconds")} />
    </div>
  );
};

export default Countdown;
//
