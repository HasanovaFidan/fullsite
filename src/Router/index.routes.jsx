import AddProducts from "../pages/Admin/AddProduct/AddProducts";
import AdminRoot from "../pages/Admin/AdminRoot";
import Edit from "../pages/Admin/EditProduct/Edit";
import Products from "../pages/Admin/Products/Products";
import Wishlist from "../pages/Site/Favorites/Wishlist";
import Home from "../pages/Site/Home/Home";
import Product from "../pages/Site/Product/Product";
import ProductDetail from "../pages/Site/ProductDetails/ProductDetail";
import SiteRoot from "../pages/Site/SiteRoot";
const ROOT = [
  {

    path: "/",
    element: <SiteRoot />,
    children: [{
      path: "",
      element: <Home />
    },
    {
      path: "favourites",
      element: <Wishlist />


    },
    {
      path: "product",
      element: <Product />
    },
    {
      path: "/:id",
      element: <ProductDetail />
    },

    ]

  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "addproducts",
        element: <AddProducts />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "",
        element: <Products />,
      },
    ],
  },


]
export default ROOT