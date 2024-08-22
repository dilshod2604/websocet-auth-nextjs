"use client";
import Layout from "@/components/Layout";
import MyChat from "@/components/MyChat/MyChat";
import WhatsappSignIn from "@/components/WhatsappSignIn/WhatsappSignIn";
import { useSession } from "next-auth/react";
import React from "react";

const SignIn = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ SignIn ~ session:", session)
 
  return (
    <Layout>
      <WhatsappSignIn />
      {/* <MyChat /> */}
    </Layout>
  );
};

export default SignIn;
