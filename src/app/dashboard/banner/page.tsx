"use client";

import { useRef } from "react";
import BannerForm from "@/components/banner/banner-form";
import { Breadcrumb } from "@/components/banner/breadcrumb";
import { Button } from "@/components/ui/button";
import { BannerFormHandle, FormValues } from "../../../../types";

export default function BannerPage() {
  const formRef = useRef<BannerFormHandle>(null);

  const handleSubmit = (values: FormValues) => {
    console.log("Form submitted with values:", values);
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      console.log("Form reset");
    }
  };

  return (
    <main className="container mx-auto py-6 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Banner</h1>
        <Breadcrumb />
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <BannerForm ref={formRef} onSubmit={handleSubmit} />
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" type="button" onClick={handleReset}>
          Reset
        </Button>
        <Button
          variant="primary"
          onClick={() => document.querySelector("form")?.requestSubmit()}
        >
          Submit
        </Button>
      </div>
    </main>
  );
}

// "use client";
// import BannerForm from "@/components/banner/banner-form";
// import { Breadcrumb } from "@/components/banner/breadcrumb";
// import { Button } from "@/components/ui/button";
// import { z } from "zod"; // Import zod if not already imported
// import { formSchema } from "@/components/banner/banner-form";

// export default function BannerPage() {
//   const handleSubmit = (values: z.infer<typeof formSchema>) => {
//     console.log("Form submitted with values:", values);
//   };
//   const defaultValues = {
//     title: "",
//     title_th: "",
//     zone: "",
//     bannerType: "",
//     startDate: "",
//     endDate: "",
//     informationLink: "",
//     bannerImage: "",
//   };

//   return (
//     <main className="container mx-auto py-6 px-4">
//       <div className="mb-6">
//         <h1 className="text-2xl font-semibold mb-2">Banner</h1>
//         <Breadcrumb />
//       </div>

//       <div className="bg-white rounded-lg shadow p-6 mb-4">
//         <BannerForm onSubmit={handleSubmit} />
//       </div>

//       {/* Submit button outside the form card */}
//       <div className="flex justify-end space-x-4">
//         <Button variant="outline" type="button">
//           Reset
//         </Button>
//         {/* <Button
//             variant="outline"
//             type="button"
//             onClick={() => form.reset(defaultValues)}
//           >
//           </Button> */}
//         <Button onClick={() => document.querySelector("form")?.requestSubmit()}>
//           Submit
//         </Button>
//       </div>
//     </main>
//   );
// }
