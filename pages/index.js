import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  const countdownDate = new Date('2023-07-10T08:00:00Z'); // Specify the target date and time
  const [countdown, setCountdown] = useState(getCountdownTime()); // Initial countdown value

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdownTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function getCountdownTime() {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    if (difference < 0) {
      // Countdown has ended
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    // Calculate the remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <div className="container">
      <Head>
        <title>Sims Powerpoint Uploader</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`.forms-studio{position:relative;padding-bottom:56.25%;overflow:hidden;width:100%;height:600px;}`}</style>
      </Head>

      <style>{`.forms-studio iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}`}</style>

      <main>
        <Header title="Hello Sacha!" />
        <div className="forms-studio" style={{ width: '800px' }}>
          <iframe src="https://script.google.com/macros/s/AKfycbyZIkglD6OdW_5UCtnFyJ2Qn2fLK4J19yCGQJxPdGmY2BDWUn6bbSQiOiXd2Edohl_8/exec" />
        </div>
		<p className="description">You have time until monday, the 10th of july, 8 am to upload your Powerpoint!</p>
        <p className="description">		  
          {countdown.days > 0 && `${countdown.days} days, `}
          {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds
        </p>
      </main>

      <Footer />
    </div>
  );
}
