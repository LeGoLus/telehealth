"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { translations } from "@/lib/translations";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import FileUpload from "./file-upload";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  name_th: z.string().optional(),
  shortDescription: z.string().min(1, "Short description is required"),
  shortDescription_th: z.string().optional(),
  store: z.string().min(1, "Store is required"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().min(1, "Sub-category is required"),
  suitableFor: z.string().min(1, "Suitable for is required"),
  unit: z.string().min(1, "Unit is required"),
  maxPurchaseQuantity: z.string(),
  isBasicMedicine: z.boolean(),
  isPrescriptionRequired: z.boolean(),
  price: z.string().min(1, "Price is required"),
  totalStock: z.string().min(1, "Total stock is required"),
  discountType: z.string(),
  discountValue: z.string(),
  itemImage: z.instanceof(File).optional().nullable(),
  itemThumbnail: z.instanceof(File).optional().nullable(),
  attribute: z.string().optional(),
  tags: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ItemUpdateFormNew() {
  const [currentLang, setCurrentLang] = useState<"default" | "en" | "th">(
    "default"
  );
  const t = translations.th;

  const defaultValues: FormValues = {
    isBasicMedicine: false,
    isPrescriptionRequired: false,
    name: "",
    name_th: "",
    shortDescription: "",
    shortDescription_th: "",
    store: "",
    category: "",
    subCategory: "",
    suitableFor: "",
    unit: "",
    maxPurchaseQuantity: "",
    price: "",
    totalStock: "",
    discountType: "",
    discountValue: "",
    itemImage: null,
    itemThumbnail: null,
    attribute: "",
    tags: "",
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Card className="rounded-lg px-4 py-5 shadow-lg">
          <Tabs
            defaultValue="default"
            className="w-full"
            onValueChange={(value) =>
              setCurrentLang(value as "default" | "en" | "th")
            }
          >
            <TabsList className="mb-4">
              <TabsTrigger value="default">Default</TabsTrigger>
              <TabsTrigger value="en">English (EN)</TabsTrigger>
              <TabsTrigger value="th">Thai-lng (TH)</TabsTrigger>
            </TabsList>

            {["default", "en", "th"].map((lang) => (
              <TabsContent key={lang} value={lang} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1 space-y-2">
                    <div>
                      <FormField
                        control={form.control}
                        name={lang === "th" ? "name_th" : "name"}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {lang === "th" ? t.name : "Name"}{" "}
                              {lang === "default" && "*"}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={
                                  lang === "th" ? t.name : "New item"
                                }
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name={
                          lang === "th"
                            ? "shortDescription_th"
                            : "shortDescription"
                        }
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {lang === "th"
                                ? t.shortDescription
                                : "Short description"}{" "}
                              {lang === "default" && "*"}
                            </FormLabel>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="flex">
                      <div className="px-5 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <FormField
                            control={form.control}
                            name="itemImage"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Item Image</FormLabel>
                                <FormControl>
                                  <FileUpload
                                    label="Upload Item Image"
                                    onChange={(file) => field.onChange(file)}
                                    value={field.value}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="px-5 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <FormField
                            control={form.control}
                            name="itemThumbnail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Item Thumbnail</FormLabel>
                                <FormControl>
                                  <FileUpload
                                    label="Upload Thumbnail"
                                    onChange={(file) => field.onChange(file)}
                                    value={field.value}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        <Card className="rounded-lg px-4 py-5 shadow-lg">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              {currentLang === "th" ? t.itemDetails : "Item details"}
            </h2>
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="store"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.store : "Store"} *
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
                                ? t.selectStore
                                : "Select store"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="store1">Store 1</SelectItem>
                        <SelectItem value="store2">Store 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.category : "Category"} *
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
                                ? t.selectCategory
                                : "Select category"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="category1">Category 1</SelectItem>
                        <SelectItem value="category2">Category 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.subCategory : "Sub category"}
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
                                ? t.selectSubCategory
                                : "Select sub category"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sub1">Sub Category 1</SelectItem>
                        <SelectItem value="sub2">Sub Category 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="suitableFor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.suitableFor : "Suitable For"}
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
                                ? t.selectCondition
                                : "Select condition"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="condition1">Condition 1</SelectItem>
                        <SelectItem value="condition2">Condition 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.unit : "Unit"}
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
                                ? t.selectUnit
                                : "Select unit"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="unit1">Unit 1</SelectItem>
                        <SelectItem value="unit2">Unit 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxPurchaseQuantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th"
                        ? t.maxPurchaseQuantity
                        : "Maximum Purchase Quantity Limit"}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-end space-x-4 py-10">
                <FormField
                  control={form.control}
                  name="isBasicMedicine"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 whitespace-nowrap">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="!mt-0">
                        {currentLang === "th"
                          ? t.isBasicMedicine
                          : "Is Basic Medicine"}
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isPrescriptionRequired"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 whitespace-nowrap">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="!mt-0">
                        {currentLang === "th"
                          ? t.isPrescriptionRequired
                          : "Is prescription required"}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="rounded-lg px-4 py-5 shadow-lg">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              {currentLang === "th" ? t.priceInformation : "Price Information"}
            </h2>
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.price : "Price"} *
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="totalStock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.totalStock : "Total stock"}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.discountType : "Discount type"}
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              currentLang === "th" ? t.percent : "Percent (%)"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="percent">
                          {currentLang === "th" ? t.percent : "Percent (%)"}
                        </SelectItem>
                        <SelectItem value="fixed">
                          {currentLang === "th"
                            ? t.fixedAmount
                            : "Fixed Amount"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discountValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {currentLang === "th" ? t.discountValue : "Discount (%)"}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </Card>
        <Card className="rounded-lg px-4 py-5 shadow-lg">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              {currentLang === "th" ? t.attribute : "Attribute"}
            </h2>
            <Separator />
            <FormField
              control={form.control}
              name="attribute"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {currentLang === "th" ? t.attribute : "Attribute"}
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
                              ? t.selectAttribute
                              : "Select attribute"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="attr1">Attribute 1</SelectItem>
                      <SelectItem value="attr2">Attribute 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Card>

        <Card className="rounded-lg px-4 py-5 shadow-lg">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              {currentLang === "th" ? t.tags : "Tags"}
            </h2>
            <Separator />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {currentLang === "th" ? t.tags : "Tags"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        currentLang === "th" ? t.searchTags : "Search tags"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => form.reset(defaultValues)}
          >
            {currentLang === "th" ? t.reset : "Reset"}
          </Button>
          <Button variant="primary" type="submit">
            {currentLang === "th" ? t.submit : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
