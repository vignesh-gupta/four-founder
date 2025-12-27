import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MAIN_CONTACT = "+919076033699";

export const CONTACT_PREFIX = "9190760336";
export const ALL_CONTACTS = ["99", "77", "55", "44"]

export function getWhatsAppUrl(message: string, phoneNumber = MAIN_CONTACT) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function getFormattedPhoneNumber(
  rawNumber: string = MAIN_CONTACT
): string {
  // Remove all non-digit characters
  const digits = rawNumber.replace(/\D/g, "");

  if(digits.length < 10) {
    return rawNumber; // Return as is if not enough digits
  }

  // Format the number as +XX XXX XXX XXXX (assuming country code is 2 digit)
  if (digits.length === 12) {
    return `+${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(
      6,
      9
    )} ${digits.slice(9)}`;
  } else if (digits.length === 11) {
    return `+${digits.slice(0, 1)} ${digits.slice(1, 4)} ${digits.slice(
      4,
      7
    )} ${digits.slice(7)}`;
  } else {
    // Return the raw number if it doesn't match expected lengths
    return rawNumber;
  }
}
