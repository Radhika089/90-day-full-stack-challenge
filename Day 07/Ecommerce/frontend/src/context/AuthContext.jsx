import { createContext, useCallback, useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../api/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartUpdated, setCartUpdated] = useState(0);
  const [wishlistUpdated, setWishlistUpdated] = useState(0);

  const refreshUser = useCallback(async () => {
    try {
      const data = await getCurrentUser();

      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 400) {
        setUser(null);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshCart = () => {
    setCartUpdated((prev) => prev + 1);
  };

  const refreshWishlist = () => {
    setWishlistUpdated((prev) => prev + 1);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshUser,
        logout,
        cartUpdated,
        refreshCart,
        wishlistUpdated,
        refreshWishlist,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
