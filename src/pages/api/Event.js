import axios from "axios";

export async function getEvent() {
  try {
    // const response = await axios.get("https://cataas.com/api/cats?tags=cute");
    const response = await axios.get(
      "https://api.jolmer.me/api/v1/events?status=all&category=all"
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
