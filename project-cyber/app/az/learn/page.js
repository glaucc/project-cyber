// learn.js
'use client';

import dynamic from "next/dynamic";


const LearnPage = dynamic(
  () => import('../../../components/CybersecurityTopics'),
  { ssr: false }
)

export default LearnPage;
