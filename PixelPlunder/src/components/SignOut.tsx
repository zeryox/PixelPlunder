import React from "react";
import { supabase } from "../lib/supabaseClient";

export const LogoutButton = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      console.log("Logged out successfully");
      // Optionally refresh or update UI here
    }
  };

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};
