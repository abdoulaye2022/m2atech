"use server";

import api from "@/lib/axios/axiosConfig";

export async function api_contact(contactData) {
  try {
    const response = await api.post(
      "/contact",
      contactData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response) {
      return response.data;
    } else {
      throw new Error(
        JSON.stringify({ status: 400, message: "No data received" })
      );
    }
  } catch (error) {
    if (error.response) {
      const status = error.status || error.response.status;
      const message =
        error.response.data.message ||
        {
          400: "Invalid email or password. Please check your credentials and try again.",
          401: "Unauthorized: Authentication is required or has failed.",
          403: "Forbidden: You do not have permission to access this resource.",
          404: "Not Found: The requested resource could not be found.",
          500: "Internal Server Error: An error occurred on the server.",
        }[status] ||
        "An error occurred with the request.";

      return { status, message };
    } else if (error.request) {
      throw {
        status: 503,
        message:
          "No response from the server. Please check the server or your internet connection.",
      };
    } else {
      return {
        status: 500,
        message: error.message || "An unexpected error occurred.",
      };
    }
  }
}
