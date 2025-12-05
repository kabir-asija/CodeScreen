import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
    try {
        const token = chatClient.createToken(req.user.clerkId)
        res.status(200).jsonn({
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image,
        })
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.error(("Error in getStreamToken controller: ",error))
    }
}
