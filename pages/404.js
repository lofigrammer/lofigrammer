import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    location.replace("/");
  });
}
