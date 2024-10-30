import ItemUpdateForm from "@/components/item-update-forms";

export default function Items() {
  return (
    <main className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4">Item Update</h1>{" "}
      <ItemUpdateForm />
    </main>
  );
}
