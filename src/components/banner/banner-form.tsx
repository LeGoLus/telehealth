"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useImperativeHandle, forwardRef } from "react";
import { translations } from "@/lib/translations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FileUpload from "../file-upload";
import { FormValues, BannerFormHandle, formSchemaBanner } from "../../../types";

interface BannerFormProps {
  onSubmit: (values: FormValues) => void;
}

const BannerForm = forwardRef<BannerFormHandle, BannerFormProps>(
  ({ onSubmit }, ref) => {
    const [currentLang, setCurrentLang] = useState<"default" | "th">("default");
    const t = translations.th;

    const form = useForm<FormValues>({
      resolver: zodResolver(formSchemaBanner),
      defaultValues: {
        title: "",
        title_th: "",
        zone: "",
        bannerType: "",
        startDate: "",
        endDate: "",
        informationLink: "",
        bannerImage: null,
      },
    });

    useImperativeHandle(ref, () => ({
      reset: () => {
        form.reset();
        return;
      },
      getValues: () => form.getValues(),
    }));

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center gap-4 border-b pb-4">
            <div className="text-sm text-gray-500">
              {currentLang === "th" ? "รายการ" : "List"}
            </div>
            <div className="text-sm text-blue-600">
              {currentLang === "th" ? "เพิ่มแบนเนอร์ใหม่" : "Add New Banner"}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-6">
              {currentLang === "th" ? t.bannerInfo : "Banner Info"}
            </h2>

            <Tabs
              defaultValue="default"
              className="w-full"
              onValueChange={(value) =>
                setCurrentLang(value as "default" | "th")
              }
            >
              <TabsList className="mb-4">
                <TabsTrigger value="default">Default</TabsTrigger>
                <TabsTrigger value="th">Thai-lng (TH)</TabsTrigger>
              </TabsList>

              {["default", "th"].map((lang) => (
                <TabsContent key={lang} value={lang} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 space-y-2">
                      <FormField
                        control={form.control}
                        name={lang === "th" ? "title_th" : "title"}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {lang === "th" ? t.title : "Title(Default)"}{" "}
                              {lang === "default" && "*"}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {currentLang === "th" ? t.zone : "Zone"} *
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder={
                                      currentLang === "th"
                                        ? t.selectZone
                                        : "Select zone"
                                    }
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="zone1">Zone 1</SelectItem>
                                <SelectItem value="zone2">Zone 2</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="bannerType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {currentLang === "th"
                                ? t.bannerType
                                : "Banner type"}{" "}
                              *
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder={
                                      currentLang === "th"
                                        ? t.selectType
                                        : "Select type"
                                    }
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="promotion">
                                  {currentLang === "th"
                                    ? t.promotion
                                    : "Promotion"}
                                </SelectItem>
                                <SelectItem value="announcement">
                                  {currentLang === "th"
                                    ? t.announcement
                                    : "Announcement"}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="bannerImage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {currentLang === "th"
                                ? t.bannerImage
                                : "Banner Image"}{" "}
                              *
                            </FormLabel>
                            <FormControl>
                              <div className="px-20 py-10 w-80 h-50">
                                <FileUpload
                                  label="Upload Banner Image"
                                  onChange={(file) => field.onChange(file)}
                                  value={field.value}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="flex space-x-4 mt-2">
              <div className="flex-none w-30">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {currentLang === "th" ? t.startDate : "Date"} *
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-auto">
                          <Input
                            placeholder="start date"
                            type="date"
                            {...field}
                            className="w-full"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-none w-30">
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>&nbsp;</FormLabel>
                      <FormControl>
                        <div className="flex flex-auto">
                          <Input
                            placeholder="end date"
                            type="date"
                            {...field}
                            className="w-full"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-none w-2/4">
                <FormField
                  control={form.control}
                  name="informationLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>&nbsp;</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={
                            currentLang === "th"
                              ? t.informationLink
                              : "Information Link (Optional)"
                          }
                          type="text"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
    );
  }
);

BannerForm.displayName = "BannerForm";

export default BannerForm;
