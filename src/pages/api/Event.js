import axios from "axios";

export async function getEvent() {
  try {
    const response = await axios.get(
      "https://api.jolmer.me/api/v1/events?status=all&category=all"
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

export async function postEvent(eventData) {
  try {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ZWFuLnNvdmFudmF0aGFuYTE5QGtpdC5lZHUua2giLCJpYXQiOjE2ODg0NDE0NDQsImV4cCI6MTY4ODQ0MTc0NH0.kQmuyCXtjXNK0dCAYgKi3XTiIR8DMRcGXNIOhK7dgbY";
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

// export async function getArtist() {
//   const res = await fetch(`https://cataas.com/api/cats?tags=cute`);
//   return res.json();
// }

// export async function getArtistAlbums(username) {
//   const res = await fetch(`https://api.example.com/artist/${username}/albums`);
//   return res.json();
// }
