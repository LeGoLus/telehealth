// "use client";

// import { ReactElement } from "react";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import { AppSidebar } from "@/components/app-sidebar";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// interface DashboardLayoutProps {
//   children: React.ReactNode;
// }

// const DashboardLayout = ({ children }: DashboardLayoutProps): ReactElement => {
//   return (
//     <div className="flex h-screen">
//       <div>
//         <SidebarProvider>
//           <AppSidebar />
//         </SidebarProvider>
//       </div>
//       <div className="flex flex-col flex-auto">
//         <div className="m-2 p-2 rounded-lg bg-white">
//           <Header />
//         </div>
//         <div className="flex-grow bg-white">
//           <div className="m-2 p-2 rounded-lg  bg-white ">{children}</div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

"use client";

import { ReactElement } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import MobileHeader from "@/components/mobile-header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps): ReactElement => {
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
        <div className="flex-grow bg-white">
          <div className="m-2 p-2 rounded-lg  bg-white ">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;

// "use client";

// import { ReactElement } from "react";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import { AppSidebar } from "@/components/app-sidebar";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import MobileHeader from "@/components/mobile-header";

// interface DashboardLayoutProps {
//   children: React.ReactNode;
// }

// const DashboardLayout = ({ children }: DashboardLayoutProps): ReactElement => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar remains constant on both mobile and desktop */}
//       <div>
//         <SidebarProvider>
//           <AppSidebar />
//         </SidebarProvider>
//       </div>
//       <div className="flex flex-col flex-auto">
//         {/* Container for the header, which can switch between desktop and mobile versions */}
//         <div className="m-2 p-2 rounded-lg bg-white">
//           <div className="hidden sm:block">
//             <Header />
//           </div>
//           <div className="block sm:hidden">
//             <MobileHeader />
//           </div>
//         </div>

//         {/* Main content area where children components are rendered */}
//         <div className="flex-grow bg-white">
//           <div className="m-2 p-2 rounded-lg bg-white">{children}</div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
