import axios from "axios";

export async function updateProfile(userData, token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.patch(
      "https://api.jolmer.me/api/v1/user/profile",
      userData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getEventUser(username) {
  try {
    const response = await axios.get(
      `https://api.jolmer.me/api/v1/events/user?username=${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function becomeOrganizer(OrganizerData, token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(
      "https://api.jolmer.me/api/v1/user/organizer",
      OrganizerData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
