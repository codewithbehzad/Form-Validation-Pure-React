import { toast } from "react-toastify";

export const notify = (text, type) => {
  if (type === "success") {
    toast.success(text, { position: "bottom-right" });
  } else {
    toast.error(text, { position: "bottom-right" });
  }
};
