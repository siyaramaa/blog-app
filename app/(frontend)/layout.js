"use client";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";

import LayoutWrapper from "@/components/Wrapper";
import { ThemeProvider } from "next-themes";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="dark:bg-slate-900">
        <ThemeProvider attribute="class" defaultTheme={"light"}>

          <LayoutWrapper>
            <NavBar />
            {children}
          </LayoutWrapper>
        </ThemeProvider>
        <ProgressBar
            height="4px"
            color="#F05B4F"
            options={{ showSpinner: true }}
            shallowRouting
            appDirectory
          />
      </body>
    </html>
  );
}
