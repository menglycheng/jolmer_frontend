import axios from "axios";

export async function getEvent() {
  try {
    const response = await axios.get(
      "https://api.jolmer.me/api/v1/events?status=active&category=all"
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getEventById(id) {
  try {
    const response = await axios.get(
      `https://api.jolmer.me/api/v1/events/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function postEvent(eventData, token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(
      "https://api.jolmer.me/api/v1/events/post",
      eventData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteEvent(id) {
  try {
    const response = await axios.delete(
      `https://api.jolmer.me/api/v1/events/delete?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function addViewEvent(id, token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(
      `https://api.jolmer.me/api/v1/events/view?id=${id}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function addFavoriteEvent(id, token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(
      `https://api.jolmer.me/api/v1/favorite-events/add?eventId=${id}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getFavoriteEvent(username, token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `https://api.jolmer.me/api/v1/favorite-events?username=${username}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteFavoriteEvent(id, token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.delete(
      `https://api.jolmer.me/api/v1/favorite-events/delete?id=${id}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
