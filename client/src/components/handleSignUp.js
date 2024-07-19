import axios from "axios";

const Api = import.meta.env.VITE_API_URL;

const handleSignUp = async ({ user }) => {
  try {
    // Step 1: Create the user
    const userResponse = await axios.post(`${Api}/api/users`, {
      username: user.username,
      email: user.email,
      password: user.password,
    });

    if (userResponse.status !== 201) {
      return { error: userResponse.data.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in handleSignUp:", error);
    return { error: error.message };
  }
};

export default handleSignUp;
