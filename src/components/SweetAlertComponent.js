import React from "react";
import Swal from "sweetalert2";

export default function SweetAlertComponent({ type }) {
  const showSwal = () => {
    if (type === "auto-close") {
      Swal.fire({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error occurred!",
      });
    }
  };

  // Call showSwal when the component mounts
  React.useEffect(() => {
    showSwal();

    // Cleanup function (optional)
    return () => {
      // Additional cleanup (if needed)
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
}
