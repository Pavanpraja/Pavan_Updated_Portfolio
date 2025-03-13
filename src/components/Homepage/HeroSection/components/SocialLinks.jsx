import React from "react";
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div>
      <p className="mb-3 text-indigo-800 dark:text-indigo-500 font-bold">
        Find me on:
      </p>
      <div className="flex space-x-4">
        <Link
          href="https://github.com/Pavanpraja"
          className="bg-purple-100 p-3 rounded-full"
        >
          <Github className="h-5 w-5 text-purple-800" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/pavan-prajapati-8a348626b/"
          className="bg-blue-100 p-3 rounded-full"
        >
          <Linkedin className="h-5 w-5 text-blue-800" />
        </Link>
        <Link
          href="https://www.instagram.com/pavanprajapati9206/"
          className="bg-pink-100 p-3 rounded-full"
        >
          <Instagram className="h-5 w-5 text-pink-800" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
