/* eslint-disable import/no-unresolved */
import { sendForm } from "@emailjs/browser";
import { RefObject } from "react";
import {
  NEXT_PUBLIC_SERVICE_ID,
  NEXT_PUBLIC_TEMPLATE_ID,
  NEXT_PUBLIC_ID_KEY,
} from "env.d.ts";

export const SendEmail = async (
  form: RefObject<HTMLFormElement>
): Promise<void> => {
  if (NEXT_PUBLIC_SERVICE_ID && NEXT_PUBLIC_TEMPLATE_ID && NEXT_PUBLIC_ID_KEY) {
    await sendForm(
      NEXT_PUBLIC_SERVICE_ID,
      NEXT_PUBLIC_TEMPLATE_ID,
      form.current as HTMLFormElement,
      {
        publicKey: NEXT_PUBLIC_ID_KEY,
      }
    );
  }
};
