/* eslint-disable import/no-unresolved */
import { sendForm } from "@emailjs/browser";
import { RefObject } from "react";

export const SendEmail = async (
  form: RefObject<HTMLFormElement>
): Promise<void> => {
  await sendForm(
    process.env.NEXT_PUBLIC_SERVICE_ID as string,
    process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
    form.current as HTMLFormElement,
    {
      publicKey: process.env.NEXT_PUBLIC_ID_KEY as string,
    }
  );
};
