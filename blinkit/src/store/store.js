import { create } from "zustand";
import swal from "sweetalert";

const productStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  fetchProduct: async () => {
    set({ loading: true });
    try {
      const response = await fetch(
        "https://funaabworld-production-64e9.up.railway.app/getproducts"
      ).then((res) => res.json());
      console.log(response);
      set({ products: response, loading: false });
    } catch (err) {
      swal("Error", err.message, "error");
      set({ error: err, loading: false });
    }
  },
  deleteProduct: async (id) => {
    const { products } = get(); // Retrieve the current products from Zustand
    console.log(id);

    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        // Perform the API delete operation
        const response = await fetch(
          "https://funaabworld-production-64e9.up.railway.app/deleteproduct",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        console.log(products);

        // If the deletion is successful, filter the product out from the list
        const updatedProducts = products.data.product.filter(
          (product) => product.id !== id
        );

        // Update the Zustand store with the filtered list
        set({
          products: updatedProducts,
        });
      } catch (error) {
        swal("Error", error.message, "error");
        console.error(error);
      }
    }
  },
}));
export default productStore;
