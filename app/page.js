'use client';

import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <div className="dark:text-white dark:bg-gray-800">
        <div className="container mx-auto min-h-screen">
          <header className="py-5 sticky top-0 bg-white dark:bg-gray-800">
            <nav className="flex justify-between">
              <h1 className="text-xl font-mono">DeveloperHao</h1>
              <ul className="flex items-center gap-5">
                <li>
                  <BsMoonStarsFill className="cursor-pointer" onClick={() => setDarkMode(!darkMode)} />
                </li>
                <li>
                  <a
                    href="/CV_2023_EN.pdf"
                    target="_blank"
                    className="bg-gradient-to-r from-cyan-500 to-cyan-900 text-white py-2 px-5 rounded transition-all hover:bg-gradient-to-r hover:from-cyan-600 hover:to-cyan-950"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <section className="p-16 text-center">
              <h2 className="py-2 text-cyan-500 text-5xl">Tran Vu Hao</h2>
              <h3 className="py-2 text-3xl">Front end developer</h3>
              <p className="py-3 leading-7 text-lg">
                I was graduated at HUFLIT University with Technology Infomation,
                then I was found a job to make website template in Japan company and
                I'm keep on it for now!
              </p>
            </section>
            <section className="flex justify-center text-5xl gap-16 text-gray-500">
              <a href="https://www.facebook.com/uzumaki.naruto.vietnam" target="_blank" className="hover:text-gray-900 transition-all"><AiFillFacebook /></a>
              <a href="https://github.com/vuhaovn" target="_blank" className="hover:text-gray-900 transition-all"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/hao-tran-a28546117/" target="_blank" className="hover:text-gray-900 transition-all"><AiFillLinkedin /></a>
            </section>
            <section className="flex justify-center py-16">
              <Image src='/bakahao.png' width={300} height={300} alt='Tran Vu Hao' className="rounded-full object-cover w-80 h-80" />
            </section>
            <section>
              <h3 className="text-3xl py-1">Portfolio</h3>
              <div className="md:grid md:gap-10 md:grid-cols-3">
                <div className="flex items-center gap-5 flex-col p-5">
                  <a href="https://expense-tracking-coral.vercel.app/" target="_blank">
                    <h4 className="mb-3">Expense Tracker React App</h4>
                    <Image src='/expense.png' width={300} height={300} alt="Expense Tracker React App" className="object-cover w-80 h-80"/>
                  </a>
                </div>
                <div className="flex items-center gap-5 flex-col p-5">
                  <a href="https://qrcodegenerator-six.vercel.app/" target="_blank">
                    <h4 className="mb-3">QR Code Generate</h4>
                    <Image src='/qrcode.png' width={300} height={300} alt="QR Code Generate" className="object-cover w-80 h-80"/>
                  </a>
                </div>
              </div>
            </section>
          </main>
          <footer className="py-5">
            <p className="text-center">Copyright &copy; 2023 by Bakahao</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
