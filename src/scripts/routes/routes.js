import dashboardHome from "../../views/dashboard/pages/dashboard";
import aboutHome from "../../views/dashboard/pages/about";
import accountsAdmin from "../../views/home/pages/akun";
import dashboardAdmin from "../../views/home/pages/dashboard";
import dataAdmin from "../../views/home/pages/data";
import editData from "../../views/home/pages/editData";
import editMenu from "../../views/home/pages/editMenu";
import editMenu2 from "../../views/home/pages/editMenu2";
import editMenu3 from "../../views/home/pages/editMenu3";
import editMenu4 from "../../views/home/pages/editMenu4";
import editMenu5 from "../../views/home/pages/editMenu5";
import menuAdmin from "../../views/home/pages/menu";
import menuAdmin2 from "../../views/home/pages/menu2";
import menuAdmin3 from "../../views/home/pages/menu3";
import menuAdmin4 from "../../views/home/pages/menu4";
import menuAdmin5 from "../../views/home/pages/menu5";
import profil from "../../views/home/pages/profil";
import mainLogin from "../../views/login/pages/main-login";
import mainRegister from "../../views/register/pages/main-register";


// Register routes
const registerRoutes = {
  '/': mainRegister,
};

// Login routes
const loginRoutes ={
  '/': mainLogin,
};

const adminRoutes = {
  '/': dashboardAdmin,
  '/akun': accountsAdmin,
  '/data': dataAdmin,
  '/menu': menuAdmin,
  '/menu2': menuAdmin2,
  '/menu3': menuAdmin3,
  '/menu4': menuAdmin4,
  '/menu5': menuAdmin5,
  '/profil': profil,
  '/editdata/:id': editData,
  '/editmenu/:id': editMenu,
  '/editmenu2/:id': editMenu2,
  '/editmenu3/:id': editMenu3,
  '/editmenu4/:id': editMenu4,
  '/editmenu5/:id': editMenu5
}

const HomeRoutes = {
  '/': dashboardHome,
  '/about': aboutHome,
}

export {
  registerRoutes, loginRoutes, adminRoutes, HomeRoutes
};
