import { z } from "zod";

export const formSchemaBanner = z.object({
  title: z.string().min(1, "Title is required"),
  title_th: z.string().optional(),
  zone: z.string().min(1, "Zone is required"),
  bannerType: z.string().min(1, "Banner type is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  informationLink: z.string().optional(),
  bannerImage: z.instanceof(File).optional().nullable(),
});

export type FormValues = z.infer<typeof formSchemaBanner>;

export type BannerFormHandle = {
  reset: () => void;
  getValues: () => FormValues;
};