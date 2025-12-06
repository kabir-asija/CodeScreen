import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import dotenv from "dotenv";
dotenv.config({ quiet: true });

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or secret is missing");
}

export const streamClient = new StreamClient(apiKey, apiSecret); //for video calls
export const chatClient = StreamChat.getInstance(apiKey, apiSecret); //for chat messaging

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream User:  ", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
  } catch (error) {
    console.error("Error deleting Stream User:  ", error);
  }
};
