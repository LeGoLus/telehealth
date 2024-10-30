import * as React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import MobileHeader from "@/components/mobile-header";

export default function Component() {
  return (
    <div className="flex h-screen">
      <div>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      <div className="flex flex-col flex-auto">
        <div className="m-2 p-2 rounded-lg bg-white">
          <div className="hidden sm:block">
            <Header />
          </div>
          <div className="block sm:hidden">
            <MobileHeader />
          </div>
        </div>
        <main className="flex-1">
          <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                Your Health, Our Priority
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Experience healthcare from the comfort of your home. Connect
                with certified doctors, schedule appointments, and manage your
                health records all in one place.
              </p>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <Link href="dashboard/items/1">Dashboard Items Update</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="dashboard/banner">Dashboard Banner</Link>
                </Button>
              </div>
            </div>
          </section>
          <section className="container space-y-6 py-8 md:py-12 lg:py-24">
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-bold">24/7 Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with healthcare professionals anytime, anywhere.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-bold">Secure Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Your health data is protected with enterprise-grade
                    security.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-bold">Easy Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Book appointments with just a few clicks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
