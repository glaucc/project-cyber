// learn.js
'use client';

import dynamic from "next/dynamic";


const LearnPage = dynamic(
  () => import('../../../components/CybersecurityTopicsAz'),
  { ssr: false }
)

export default LearnPage;
